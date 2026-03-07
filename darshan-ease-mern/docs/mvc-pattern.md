# MVC Pattern – DarshanEase Backend

The DarshanEase backend follows the MVC (Model-View-Controller) architecture pattern. This ensures clean code structure and scalability.

---

## Folder Structure

/server
│
├── models
├── controllers
├── routes
├── middleware
├── config
└── server.js

---

## 1️⃣ Model Layer (Models)

Location: /server/models

Purpose:
- Define MongoDB schemas using Mongoose.
- Handle database interactions.

Examples:
- User.js
- Temple.js
- DarshanSlot.js
- Booking.js
- Donation.js

Models communicate directly with MongoDB.

---

## 2️⃣ Controller Layer (Controllers)

Location: /server/controllers

Purpose:
- Handle business logic.
- Process incoming requests.
- Send responses back to client.

Example Flow:
Route → Controller → Model → Database → Controller → Response

Examples:
- authController.js
- templeController.js
- bookingController.js

---

## 3️⃣ View Layer (Routes in REST API)

Since this is a REST API, the View layer is represented by the routing system.

Location: /server/routes

Purpose:
- Define API endpoints.
- Connect routes to controllers.

Examples:
- authRoutes.js
- templeRoutes.js
- bookingRoutes.js

---

## Why MVC?

- Clean separation of concerns
- Easier debugging
- Scalable architecture
- Team-friendly development
- Maintainable codebase