const express = require("express");
const Idea = require("../models/Idea.js");
const router = express.Router();
const {isLoggedIn}=require("../Middleware/script.js")


const IdeaController = require("../controllers/ideas.js");

// Get all ideas
router.get("/", IdeaController.getAllIdeas);
// Create a new idea
router.post("/",isLoggedIn, IdeaController.createIdea);
//Delete an idea
router.delete("/:id",isLoggedIn, IdeaController.deleteIdea);



module.exports = router;