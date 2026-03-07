# Technical Architecture – DarshanEase (MERN)

## 1. Overview

DarshanEase is built using the MERN stack (MongoDB, Express.js, React.js, Node.js).  
The system follows a layered architecture separating frontend, backend, and database responsibilities.

---

## 2. System Layers

### A. Client Layer (React Frontend)

- Built using React.js
- Handles UI rendering and routing
- Uses Axios for API communication
- Stores JWT token in localStorage
- Implements protected routes for role-based access

---

### B. Server Layer (Node.js + Express)

- REST API built with Express.js
- Middleware-based architecture
- JWT authentication & authorization
- Role-based access control (USER, ORGANIZER, ADMIN)
- Controllers handle business logic
- Routes organized per module

---

### C. Database Layer (MongoDB)

MongoDB stores all persistent data.

Collections:
- Users
- Temples
- DarshanSlots
- Bookings
- Donations

Mongoose is used for schema modeling and validation.

---

## 3. Authentication Flow

1. User registers → Password hashed using bcrypt.
2. User logs in → JWT token generated.
3. Token stored on client side.
4. Protected routes verify token via middleware.
5. Role-based access restricts ADMIN / ORGANIZER routes.

---

## 4. Booking Flow

1. User selects temple.
2. User selects available slot.
3. System checks seat availability.
4. Booking created and seats reduced.
5. Confirmation returned.

---

## 5. Architecture Pattern

Backend follows MVC Pattern:
- Models → Mongoose schemas
- Controllers → Business logic
- Routes → API endpoints

Frontend follows component-based architecture.