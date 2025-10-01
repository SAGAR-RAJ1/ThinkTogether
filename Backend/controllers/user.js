const User = require("../models/User.js");

  
  module.exports.PostSignup = async (req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUSer = new User({ email, username });
      const registeredUser = await User.register(newUSer, password);
      console.log(registeredUser);
        // req.flash("success", "Welcome to WanderLust");
        res.redirect("http://localhost:5173/");
      
    } catch (error) {
      console.error("Signup error:", error); // see error in terminal
      res.status(400).json({ error: error.message });
    }
  };
  module.exports.PostLogin = async (req, res) => {
    //statergy    //failure k case m kaha redirect ho
    res.json({ message: "Login successful" });
  };
  
  module.exports.Logout= (req, res, next) => {
    req.logout((err) => {
      //Passport k apna checking h logout krne k liye
      if (err) {
        return next(err);
      }
      res.json({ message: "Logged out successfully" });
    });
  };
  
  