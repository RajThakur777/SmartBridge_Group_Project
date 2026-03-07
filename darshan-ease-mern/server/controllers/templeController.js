const Temple = require("../models/Temple");

// GET all temples
exports.getTemples = async (req, res) => {
  try {
    const temples = await Temple.find();
    res.json(temples);
  } catch (error) {
    res.status(500).json({ message: "Error fetching temples" });
  }
};

// ADD temple
exports.addTemple = async (req, res) => {
  try {
    const temple = new Temple(req.body);
    await temple.save();
    res.status(201).json(temple);
  } catch (error) {
    res.status(500).json({ message: "Error adding temple" });
  }
};

// UPDATE temple
exports.updateTemple = async (req, res) => {
  try {
    const temple = await Temple.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(temple);
  } catch (error) {
    res.status(500).json({ message: "Error updating temple" });
  }
};

// DELETE temple
exports.deleteTemple = async (req, res) => {
  try {
    await Temple.findByIdAndDelete(req.params.id);
    res.json({ message: "Temple deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting temple" });
  }
};