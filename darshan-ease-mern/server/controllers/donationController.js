const Donation = require("../models/Donation");

exports.createDonation = async (req, res) => {
  try {
    const { amount } = req.body;

    const donation = await Donation.create({
      user: req.user.id,
      amount
    });

    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: "Error creating donation" });
  }
};

exports.getDonations = async (req, res) => {
  try {
    
let donations;

if (req.user.role === "admin") {
  donations = await Donation.find().populate("user", "name");
} else {
  donations = await Donation.find({ user: req.user.id }).populate("user", "name");
}

    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donations" });
  }
};