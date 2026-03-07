const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createBooking,
  getBookings,
  getBookingById
} = require("../controllers/bookingController");

router.post("/", protect, createBooking);
router.get("/", protect, getBookings);
router.get("/:id", getBookingById);

module.exports = router;

// const express = require("express");

// const router = express.Router();

// const {
//   createBooking,
//   getBookings
// } = require("../controllers/bookingController");

// router.post("/", createBooking);

// router.get("/", getBookings);

// module.exports = router;



// const express = require("express");

// const router = express.Router();

// const {createBooking} = require("../controllers/bookingController");

// router.post("/create",createBooking);

// module.exports = router;