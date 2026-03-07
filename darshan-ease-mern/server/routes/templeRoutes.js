// const express = require("express");

// const router = express.Router();

// const { getTemples } =
// require("../controllers/templeController");


// router.get("/",getTemples);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getTemples,
  addTemple,
  updateTemple,
  deleteTemple
} = require("../controllers/templeController");

router.get("/temples", getTemples);
router.post("/temples", addTemple);
router.put("/temples/:id", updateTemple);
router.delete("/temples/:id", deleteTemple);

router.get("/", (req, res) => {

  res.json([
    {
      id: 1,
      name: "Tirupati Balaji",
      location: "Andhra Pradesh",
      image: "/images/tirupati.jpg"
    },
    {
      id: 2,
      name: "Kashi Vishwanath",
      location: "Varanasi",
      image: "/images/kashi.jpg"
    },
    {
      id: 3,
      name: "Vaishno Devi",
      location: "Jammu & Kashmir",
      image: "/images/vaishnodevi.jpg"
    },
    {
      id: 4,
      name: "Somnath Temple",
      location: "Gujarat",
      image: "/images/Somanath.jpg"
    },
    {
      id: 5,
      name: "Golden Temple",
      location: "Punjab",
      image: "/images/goldentemple.jpg"
    },
    {
      id: 6,
      name: "Jagannath Temple",
      location: "Odisha",
      image: "/images/jagannath.jpg"
    },
    {
      id: 7,
      name: "Kedarnath Temple",
      location: "Uttarakhand",
      image: "/images/kedarnath.jpg"
    },
    {
      id: 8,
      name: "Badrinath Temple",
      location: "Uttarakhand",
      image: "/images/badrinath.jpg"
    },
    {
      id: 9,
      name: "Dwarkadhish Temple",
      location: "Gujarat",
      image: "/images/Dwarkadish.jpg"
    },
    {
      id: 10,
      name: "Tirumala Temple",
      location: "Andhra Pradesh",
      image: "/images/tirumala.jpg"
    }
  ]);

});

module.exports = router;