# Waste Management Database Form

This repository contains a Google Apps Script project and form interface for managing waste collection records. The system is designed for submitting, storing, and reviewing waste data in a structured and anonymized format.  

The project demonstrates integration between **Google Forms / Apps Script** and **Google Sheets**, and is suitable for portfolio purposes.

---

## 📂 Contents

- **code.gs** – Google Apps Script backend, handles data saving, totals calculation, and search by address.  
- **form.html** – Frontend web form, dynamic waste entry rows, validation, and live search functionality.  
- **Database** – The main Google Sheet storing all submissions.  
- **Dictionaries** – Google Sheet tab containing predefined lists of `waste type` and `unit`.

---

## 📝 Usage

### 1. Access the Form
Submit new waste records through the live web form:

[Waste Submission Form](https://script.google.com/macros/s/AKfycbyjEO_NFoBFOZiU2bK6q7zQ36ju__m-G8cWBRKumKnCfdYjrnFleEOMg8yizIcK2MOz/exec)

The form supports:  
- Multiple waste types per submission (up to 5)  
- Automatic total calculations for construction waste and tires  
- **Limits:**  
  - Construction waste: max **20 bags** per address  
  - Tires: max **4 pieces** per address  
- Real-time validation and warnings for exceeding limits  
- Search history by address

---

### 2. Access the Database
The form submissions are stored in the following Google Sheet:

[Waste Management Records (Anonymized)](https://docs.google.com/spreadsheets/d/1VN09jVtZgHf1u14zqwdsjAnS_pCnAyVkDtPMSnyXlJQ/edit?gid=0)

The **Database** tab contains all anonymized records, and **Dictionaries** contain reference lists of waste types and units.

---

### 3. Running the Project in Your Own Apps Script

1. Open [Google Apps Script](https://script.google.com/) and create a **new project**.  
2. Copy `code.gs` and `form.html` into your project.  
3. Update the `SPREADSHEET_NAME` constant in `code.gs` to match your spreadsheet name.  
4. Deploy the project as a **Web App** (Settings → Deploy → New Deployment → Web App).  
5. Share the Web App URL with users to start submitting data.

---

## 🔧 Technology Stack

- Google Apps Script (JavaScript backend)  
- HTML/CSS for frontend form  
- Google Sheets for data storage  
- Client-side validation and live search via Apps Script HTML service

---

## ⚙️ Features

- Dynamic form rows for multiple waste entries  
- **Limit checks:** construction waste (max 20 bags), tires (max 4 pieces)  
- Real-time search by address  
- Fully anonymized database for privacy  
- English translation of waste types and units  

---

## 📌 Notes

- Google Sheets is used as a live database. The repository **does not contain the sheet data**, but links to the live sheet are provided.  
- To fork or adapt the project, replace the spreadsheet link in `code.gs` with your own sheet.  

---

## 👤 Author / Portfolio

This project demonstrates Google Apps Script integration with Google Sheets for interactive data collection and management. Ideal for showcasing portfolio skills in web apps, automation, and spreadsheet integration.
