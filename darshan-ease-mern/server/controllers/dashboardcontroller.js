const Booking = require("../models/Booking");
const Donation = require("../models/Donation");
const Temple = require("../models/Temple");

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Booking.find({ user: userId });

    const upcomingBooking = bookings.find(
      b => new Date(b.date) >= new Date()
    );

    const pastBookings = bookings.filter(
      b => new Date(b.date) < new Date()
    );

    const donations = await Donation.find({ user: userId });

    const totalDonations = donations.reduce(
      (sum, d) => sum + d.amount,
      0
    );

    res.json({
      upcomingBooking,
      pastBookings,
      totalDonations
    });

  } catch (error) {
    res.status(500).json({ message: "Dashboard error" });
  }
};

exports.getAdminStats = async (req, res) => {
  try {

    const temples = await Temple.countDocuments();
    const bookings = await Booking.countDocuments();
    const donations = await Donation.countDocuments();

    res.json({
      temples,
      bookings,
      donations
    });

  } catch (error) {
    console.error("Admin Stats Error:", error);
    res.status(500).json({ message: "Error fetching admin stats" });
  }
};