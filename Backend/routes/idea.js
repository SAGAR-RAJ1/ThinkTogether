const express = require("express");
const Idea = require("../models/Idea.js");
const router = express.Router();


const IdeaController = require("../controllers/ideas.js");

// Get all ideas
router.get("/", IdeaController.getAllIdeas);
// Create a new idea
router.post("/", IdeaController.createIdea);
//Delete an idea
router.delete("/:id", IdeaController.deleteIdea);



module.exports = router;