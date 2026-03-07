const express = require("express");
const router = express.Router();

const { getDashboard, getAdminStats } = require("../controllers/dashboardController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getDashboard);
router.get("/stats", getAdminStats);

module.exports = router;