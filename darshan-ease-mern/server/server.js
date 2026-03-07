const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

/* ================= DATABASE ================= */

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/darshanEase";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err);
  });

/* ================= ROUTES ================= */

const authRoutes = require("./routes/authRoutes");
const templeRoutes = require("./routes/templeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const donationRoutes = require("./routes/donationRoutes");
const adminRoutes = require("./routes/adminRoutes");

/* NEW DASHBOARD ROUTE */
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/temples", templeRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/admin", adminRoutes);

/* REGISTER DASHBOARD API */
app.use("/api/dashboard", dashboardRoutes);

/* ================= TEST ROUTE ================= */

app.get("/", (req, res) => {
  res.send("DarshanEase Backend Running 🚀");
});

/* ================= ERROR HANDLER ================= */

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong on the server",
  });
});

/* ================= SERVER START ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});