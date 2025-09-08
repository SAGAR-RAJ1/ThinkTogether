const Idea = require("../models/Idea.js");


//Get all Ideas
exports.getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json(ideas); // send JSON response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new idea
exports.createIdea = async (req, res) => {
    try {
      const { title, description, image } = req.body;
      const newIdea = new Idea({
        title,
        description,
        image: { url: image }, // if you’re storing image URL
      });
  
      await newIdea.save();
      
    } catch (err) {
      res.status(500).json({ error: "Failed to add idea" });
    }
};