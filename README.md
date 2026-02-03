# Auth Task Management App

A full-stack Task Management application built with Node.js, Express, MongoDB, and React.  
The project demonstrates secure authentication, role-based access control, RESTful API design, and frontend integration.

This project was developed as part of a Backend Developer Intern assignment.

---

## 🚀 Features

### Backend
- User registration and login with JWT authentication
- Password hashing using bcrypt
- Role-based access control (user / admin)
- CRUD APIs for task management
- API versioning (`/api/v1`)
- Centralized error handling
- Rate limiting and security headers (Helmet)
- Swagger API documentation

### Frontend
- React-based user interface
- User registration and login screens
- JWT-based protected routes
- Task dashboard with CRUD operations
- Axios-based API integration
- Success and error feedback messages

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt
- Swagger (swagger-jsdoc, swagger-ui)

### Frontend
- React
- Axios
- React Router

---

## 📁 Project Structure

auth-task-manager/
│
├── backend/
│ ├── config/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── services/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md


---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or MongoDB Atlas)

---

### 1️⃣ Backend Setup

```bash
cd backend
npm install
Create a .env file inside the backend directory:

PORT=7777
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
Start the backend server:

npm start
Backend will run at:

http://localhost:7777
Swagger API documentation:

http://localhost:7777/api-docs
2️⃣ Frontend Setup
cd frontend
npm install
npm start
Frontend will run at:

http://localhost:3000
🔐 Authentication Flow
User registers via /api/v1/auth/register

User logs in via /api/v1/auth/login

Backend returns a JWT token

Token is stored in localStorage

Axios interceptor attaches token to protected API requests

Backend validates JWT for secured routes

📌 API Documentation
All APIs are documented using Swagger.

Access Swagger UI at:

http://localhost:7777/api-docs
Includes:

Authentication endpoints

Task CRUD endpoints

Request/response schemas

JWT authorization support

📈 Scalability Notes
Stateless JWT authentication enables horizontal scaling

Auth and Task modules can be separated into microservices

Redis can be added for caching frequently accessed data

MongoDB Atlas supports replica sets and horizontal scaling
