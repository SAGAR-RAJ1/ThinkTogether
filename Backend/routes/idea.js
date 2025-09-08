const express = require("express");
const Idea = require("../models/Idea.js");
const router = express.Router();

// Get all ideas
router.get("/ideas", async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.json(ideas);  // send JSON response
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
});
router.get("/love", async (req, res) => {
res.send("Love u aparna");
});

module.exports = router;