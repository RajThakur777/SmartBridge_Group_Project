🛕 DarshanEase – Temple Darshan Ticket Booking System

DarshanEase is a full-stack MERN application designed to simplify the process of booking temple darshan tickets online. The platform allows devotees to easily reserve darshan slots, choose pooja types, and manage bookings through a seamless and user-friendly interface.

With the help of modern web technologies, DarshanEase eliminates the need for long queues and traditional offline booking methods, allowing devotees to plan their spiritual visits conveniently from anywhere.

📖 Overview

DarshanEase is inspired by modern ticket booking systems used in travel platforms. Just as travel apps allow users to book bus, train, or flight tickets, DarshanEase brings the same convenience to temple darshan bookings.

The system provides a centralized platform where users can:

Browse temples

Check available darshan slots

Book pooja services

Manage their bookings

Donate to temples

This digital transformation ensures efficient crowd management, transparency, and convenience for both temples and devotees.

🚀 Features
👤 User Features

User Registration and Login

Browse available temples

View temple details and pooja types

Book darshan slots

Online donation to temples

View booking history

Cancel bookings

🛕 Organizer Features

Manage temple details

Create darshan slots

Manage pooja types

View bookings

🛡️ Admin Features

Manage users

Manage temples

Monitor bookings

System management

📊 System Features

Secure authentication

Real-time booking management

Role-based access control

Responsive user interface

Efficient database handling

🏗️ Tech Stack
Frontend

React.js

Vite

Tailwind CSS

Axios

React Router

Backend

Node.js

Express.js

Database

MongoDB

Mongoose ODM

Other Tools

JWT Authentication

REST APIs

Git & GitHub

📂 Project Structure
darshan-ease-mern
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── context
│   └── assets
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/RajThakur777/SmartBridge_Group_Project.git
cd SmartBridge_Group_Project/darshan-ease-mern
2️⃣ Backend Setup

Navigate to backend directory:

cd backend

Install dependencies:

npm install

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend server:

npm start
3️⃣ Frontend Setup

Navigate to frontend directory:

cd frontend

Install dependencies:

npm install

Run frontend:

npm run dev

Application will run on:

http://localhost:5173
🔐 Authentication

DarshanEase uses JWT (JSON Web Token) for secure authentication.

Features include:

User login authentication

Protected routes

Role-based authorization

Secure API access

🗄️ Database Design

The application uses MongoDB collections such as:

Users

Stores user information and roles.

Temples

Contains temple details and location.

Bookings

Stores darshan reservations made by users.

Donations

Tracks donations made to temples.

🌟 Advantages of DarshanEase

✔ Eliminates long waiting queues
✔ Allows devotees to plan visits in advance
✔ Easy slot booking system
✔ Transparent booking records
✔ Efficient temple crowd management

🔮 Future Enhancements

Online payment gateway integration

QR code based entry system

Real-time slot availability updates

AI-based crowd prediction

Mobile application support

Multi-language support

👨‍💻 Contributors

Raj Thakur

SmartBridge Project Team

📜 License

This project is developed for educational and academic purposes.