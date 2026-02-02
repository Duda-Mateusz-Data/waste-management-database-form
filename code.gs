const SPREADSHEET_NAME = 'Waste Management Records (Anonymized)';
const SHEET_NAME = 'Database';

// ===== WEB APP =====
function doGet() {
  return HtmlService.createHtmlOutputFromFile('form')
    .setTitle('Waste Management – Form');
}

// ===== ZAPIS DANYCH =====
function saveData(data) {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) throw new Error('Sheet not found: ' + SHEET_NAME);

  // Save each waste item separately
  data.waste.forEach(w => {
    sheet.appendRow([
      data.date || '',
      data.name || '',
      data.address || '',
      w.type || '',
      w.qty || '',
      w.unit || ''
    ]);
  });

  // After saving, calculate totals for alerts
  const totals = getTotalsForAddress(data.address);
  return totals;
}

// ===== GET SPREADSHEET =====
function getSpreadsheet() {
  const files = DriveApp.getFilesByName(SPREADSHEET_NAME);
  if (!files.hasNext()) throw new Error('Spreadsheet not found: ' + SPREADSHEET_NAME);
  return SpreadsheetApp.open(files.next());
}

// ===== CALCULATE TOTALS =====
function getTotalsForAddress(address) {
  const sheet = getSpreadsheet().getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  address = address.toLowerCase();

  let totalConstruction = 0;
  let totalTires = 0;

  for (let i = 1; i < rows.length; i++) {
    const [ , , addr, type, qty, unit] = rows[i];
    if (addr && addr.toString().toLowerCase() === address) {
      if (type === 'Construction waste' && (unit === 'pcs' || unit === 'bags 120l')) {
        totalConstruction += Number(qty) || 0;
      }
      if (type === 'Tires') {
        totalTires += Number(qty) || 0;
      }
    }
  }

  return { totalConstruction, totalTires };
}

// ===== SEARCH BY ADDRESS =====
function searchByAddress(address) {
  if (!address) return [];

  const sheet = getSpreadsheet().getSheetByName(SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  const out = [];
  address = address.toLowerCase();

  for (let i = 1; i < rows.length; i++) {
    const [date, name, addr, type, qty] = rows[i];
    if (addr && addr.toString().toLowerCase().includes(address)) {
      out.push({
        name: name || '',
        date: Utilities.formatDate(new Date(date), Session.getScriptTimeZone(), 'yyyy-MM-dd'),
        type: type || '',
        qty: qty || ''
      });
    }
  }

  return out;
}
