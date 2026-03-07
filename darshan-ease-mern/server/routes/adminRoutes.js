const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Temple = require("../models/Temple");

// Get all users
router.get("/users", async (req, res) => {
  const users = await User.find({}, "name email role");
  res.json(users);
});

// Get all temples
router.get("/temples", async (req, res) => {
  const temples = await Temple.find();
  res.json(temples);
});


// Multer setup for image upload
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// Add new temple (with image upload)
router.post("/temples", upload.single('image'), async (req, res) => {
  const { name, location, description } = req.body;
  let imagePath = req.file ? `/images/${req.file.filename}` : '';
  const temple = await Temple.create({ name, location, description, image: imagePath });
  res.json(temple);
});

// Delete temple
router.delete("/temples/:id", async (req, res) => {
  await Temple.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

// Update temple (with optional image upload)
router.put("/temples/:id", upload.single('image'), async (req, res) => {
  const { name, location, description } = req.body;
  let update = { name, location, description };
  if (req.file) {
    update.image = `/images/${req.file.filename}`;
  }
  const temple = await Temple.findByIdAndUpdate(req.params.id, update, { new: true });
  res.json(temple);
});

module.exports = router;
