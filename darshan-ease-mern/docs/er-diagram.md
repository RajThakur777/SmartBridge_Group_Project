# ER Diagram – DarshanEase

## 1. User Collection

- _id (Primary Key)
- name
- email (unique)
- password (hashed)
- phone
- role (USER | ORGANIZER | ADMIN)
- createdAt
- updatedAt

Relationship:
One User → Many Bookings
One User → Many Donations

-----------------------------

## 2. Temple Collection

- _id (Primary Key)
- templeName
- location
- description
- createdAt
- updatedAt

Relationship:
One Temple → Many DarshanSlots

---

## 3. DarshanSlot Collection

- _id (Primary Key)
- templeId (Foreign Key → Temple)
- date
- startTime
- endTime
- totalSeats
- availableSeats
- price
- createdAt
- updatedAt

Relationship:
One DarshanSlot → Many Bookings

---

## 4. Booking Collection

- _id (Primary Key)
- userId (Foreign Key → User)
- slotId (Foreign Key → DarshanSlot)
- bookingDate
- numberOfSeats
- totalAmount
- bookingStatus (CONFIRMED | CANCELLED)
- createdAt
- updatedAt

---

## 5. Donation Collection

- _id (Primary Key)
- userId (Foreign Key → User)
- templeId (Foreign Key → Temple)
- amount
- donationDate
- createdAt
- updatedAt