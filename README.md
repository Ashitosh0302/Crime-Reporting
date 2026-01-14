# 🛡️ Crime Reporting Web Application

An efficient and secure online crime reporting system that enables citizens to submit various types of crime reports digitally. The platform centralizes crime-related data, making it easier for authorities to manage, review, and track reports in an organized manner.

Built using Node.js, Express.js, MongoDB, and EJS, this project focuses on usability, scalability, and secure data handling.

---

## 📌 Project Overview

The Crime Reporting Web Application allows users to report incidents such as:

- Cyber Crime  
- Missing Person  
- Missing Items & Gadgets  
- Accidents  
- Unidentified Bodies  
- Other Crime Reports  

Each report is stored securely in a MongoDB database and can include uploaded files such as images or documents.

---

## ✨ Key Features

- 📄 Multiple crime reporting forms  
- 🔐 Secure data storage using MongoDB  
- 📤 File upload support  
- 🧭 Structured MVC architecture  
- 🎨 Dynamic views using EJS  
- 🌐 RESTful routing  
- 🚀 Deployment-ready configuration  
- ⚠ Centralized error handling  

---

## 🛠️ Tech Stack

| Technology | Usage |
|---------|------|
| Node.js | Backend runtime |
| Express.js | Server & routing |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| EJS | View engine |
| Multer | File uploads |
| dotenv | Environment variables |
| CORS | Cross-origin handling |

---

## ⚙️ How It Works

1. Users access the home page of the application.
2. They select the type of crime they want to report.
3. The relevant form is filled with required details and file uploads.
4. Submitted data is validated on the server.
5. Valid reports are securely stored in MongoDB and managed centrally.

---

## 🧪 Error Handling

- Centralized error handling middleware is used across the application.
- Proper HTTP status codes are returned for different error scenarios.
- Stack traces are hidden in production to enhance security.
- Clear and meaningful error messages are sent to the client.

---

## 📈 Future Enhancements

- Admin dashboard for managing and reviewing crime reports.
- User authentication and authorization for secure access.
- Case status tracking and report updates.
- Email and SMS notification system.
- Analytics and reporting features for insights and monitoring.

---

## ⭐ Note

This project demonstrates a real-world application of full-stack development concepts, focusing on public safety, structured system architecture, and a scalable backend design.

---
## 📂 Project Structure

```bash
C_REPO/
│
├── public/
│   └── (static assets like CSS, images)
│
├── uploads/
│   └── (uploaded files)
│
├── src/
│   ├── controllers/
│   │   ├── Accident.js
│   │   ├── CyberCrime.js
│   │   ├── E_complaint.js
│   │   ├── Home.js
│   │   ├── Missing_gadgets.js
│   │   ├── Missing_item_home.js
│   │   ├── Missing_person.js
│   │   ├── Missing_vehicle.js
│   │   ├── Other_items.js
│   │   └── Unidentified_body.js
│   │
│   ├── middlewares/
│   │   ├── errorMiddleware.js
│   │   └── upload.js
│   │
│   ├── models/
│   │   ├── Accident.js
│   │   ├── CyberCrime.js
│   │   ├── E_complaint.js
│   │   ├── Missing_gadgets.js
│   │   ├── Missing_person.js
│   │   ├── Missing_vehicle.js
│   │   ├── Other_items.js
│   │   └── Unidentified_body.js
│   │
│   ├── routes/
│   │   ├── Accident.js
│   │   ├── CyberCrime.js
│   │   ├── E_complaint.js
│   │   ├── home.js
│   │   ├── Missing_item_home.js
│   │   ├── missing_person.js
│   │   └── Unidentified_body.js
│   │
│   ├── views/
│   │   ├── Accident.ejs
│   │   ├── Cyber_Crime.ejs
│   │   ├── E_complaint.ejs
│   │   ├── home.ejs
│   │   ├── missing_gadgets.ejs
│   │   ├── missing_item_home_page.ejs
│   │   ├── Missing_person.ejs
│   │   ├── missing_vehicle.ejs
│   │   └── unidentified_body.ejs
│   │
│   └── app.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md

---
