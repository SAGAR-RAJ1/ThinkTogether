const express = require("express");
const Idea = require("../models/Idea.js");
const router = express.Router();


const IdeaController = require("../controllers/ideas.js");

// Get all ideas
router.get("/ideas", IdeaController.getAllIdeas);
// Create a new idea
router.post("/ideas", IdeaController.createIdea);




module.exports = router;