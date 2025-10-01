const User = require("../models/User.js");

module.exports.PostSignup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);

    console.log(registeredUser);

    res.status(201).json({ 
      success: true, 
      message: "Signup successful", 
      user: registeredUser ,
      redirect: "http://localhost:5173/"
    });

  } catch (error) {
    console.error("Signup error:", error);

    res.status(400).json({ 
      success: false, 
      message: "Signup failed", 
      error: error.message,
      redirect: "http://localhost:5173/signup" 
    });
  }
};

module.exports.PostLogin = async (req, res) => {
  try {
    res.status(200).json({ 
      success: true, 
      message: "Login successful",
      redirect: "http://localhost:5173/"
       
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({ 
      success: false, 
      message: "Login failed", 
      error: error.message ,
      redirect: "http://localhost:5173/login"
    });
  }
};

module.exports.Logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).json({ 
        success: false, 
        message: "Logout failed", 
        error: err.message 
      });
    }
    res.status(200).json({ 
      success: true, 
      message: "Logged out successfully" 
    });
  });
};