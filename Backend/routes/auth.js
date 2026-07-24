const express = require("express");
const passport = require("passport");

const router = express.Router();

// Redirect user to Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google redirects back here
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://think-together-frontend-rho.vercel.app/login",
  }),
  (req, res) => {
    res.redirect("https://think-together-frontend-rho.vercel.app");
  }
);

module.exports = router;