const express = require("express");
const router = express.Router({ mergeParams: true }); //merge params to get the data from the parent query
const User = require("../models/User");
const passport = require("passport");
const ListingUser = require("../controllers/user");
const {isLoggedIn}=require("../Middleware/script.js")

// we are using router.route as we it is used to structure the code I say, but that's not all it's used For writing routes, whether it is get post delete if they have the same path, we can club them together with a single path. You will be shown below

//route() creates a Route object for a specific path. After that, you can attach different HTTP methods (get, post, put, delete, etc.) to the same URL.
router.route("/signup")
.post(ListingUser.PostSignup); //Middleware for checking users already exist or not


router.route("/login")
  .post(passport.authenticate("local"), ListingUser.PostLogin);

router.route("/logout")
.post(ListingUser.Logout);

router.get("/profile", isLoggedIn, ListingUser.getProfile);

router.put("/profile", isLoggedIn, ListingUser.updateProfile);

module.exports = router;
