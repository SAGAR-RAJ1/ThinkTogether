const User = require("../models/User.js");

module.exports.getProfile = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.updateProfile = async (req, res) => {
  try {
    const { name, bio, github, linkedin, portfolio } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        name,
        bio,
        github,
        linkedin,
        portfolio,
      },
      {
        new: true,
      },
    );

    res.status(200).json({
      success: true,
      user: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.PostSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if (err) {
        console.error("Auto login error:", err);

        return res.status(500).json({
          success: false,
          message: "Signup successful, but auto login failed",
        });
      }

      return res.status(201).json({
        success: true,
        message: "Signup successful",
        user: registeredUser,
        redirect: "http://localhost:5173/",
      });
    });
  } catch (error) {
    console.error("Signup error:", error);

    res.status(400).json({
      success: false,
      message: "Signup failed",
      error: error.message,
      redirect: "http://localhost:5173/signup",
    });
  }
};

module.exports.PostLogin = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Login successful",
      redirect: "http://localhost:5173/",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({
      success: false,
      message: "Login failed",
      error: error.message,
      redirect: "http://localhost:5173/login",
    });
  }
};
module.exports.Logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Logout failed",
      });
    }

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  });
};
