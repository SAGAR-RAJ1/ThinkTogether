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
  console.log("Inside createIdea");

  try {
    const { title, description, image } = req.body;

    const newIdea = new Idea({
      title,
      description,
      ...(image ? { image: { url: image } } : {}),
    });

    console.log(req.user);

    newIdea.owner = req.user._id;

    await newIdea.save();

    return res.status(201).json({
      success: true,
      message: "Idea created successfully",
      idea: newIdea,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: err.message,
    });
  }
};
// Delete an idea
exports.deleteIdea = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedIdea = await Idea.findByIdAndDelete(id);

    if (!deletedIdea) {
      return res.status(404).json({ error: "Idea not found" });
    }

    res.json({ message: "Idea deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete idea" });
  }
};
