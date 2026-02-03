


# Auth Task Manager

A full-stack Task Management application with secure authentication, role-based access control, and CRUD functionality.  
This project was built as part of a **Backend Developer Intern assignment** to demonstrate backend API design, security practices, and frontend integration.

---

##  Features

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
- Register and login flows
- JWT-protected routes
- Task dashboard with CRUD operations
- Axios-based API integration
- Success and error messages

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- bcrypt
- Swagger (swagger-jsdoc, swagger-ui)

### Frontend
- React
- Axios
- React Router

---


##  Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local instance or MongoDB Atlas)

---

### Backend Setup

```bash
cd backend
npm install

Create a .env file inside the backend directory:

PORT=7777
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>

Start the backend server:

npm start

Backend runs at:

http://localhost:7777

Swagger API documentation:

http://localhost:7777/api-docs


⸻

Frontend Setup

cd frontend
npm install
npm start

Frontend runs at:

http://localhost:3000


⸻

Authentication Flow
	1.	User registers via /api/v1/auth/register
	2.	User logs in via /api/v1/auth/login
	3.	Backend returns a JWT token
	4.	Token is stored in localStorage
	5.	Axios interceptor attaches JWT to protected requests
	6.	Backend validates JWT for secured routes

⸻

 API Documentation

All APIs are documented using Swagger.

Access Swagger UI at:

http://localhost:7777/api-docs

Includes:
	•	Authentication APIs
	•	Task CRUD APIs
	•	Request/response schemas
	•	JWT authorization support

⸻

 Scalability Notes
	•	Stateless JWT authentication allows horizontal scaling
	•	Auth and task modules can be separated into microservices
	•	Redis can be added for caching frequently accessed data
	•	MongoDB Atlas supports replica sets and scaling
	•	Application can be deployed behind a load balancer (NGINX / cloud LB)
