const express = require('express');
const app = express();
const path = require('path');
const flash = require("connect-flash");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname, "views"));

const passport = require("passport");
const session = require("express-session");
const localStrategy = require("passport-local");
const User = require("./models/User");

const cors = require("cors");
// used to connect backend and frontend, then as they are in different folders
app.use(cors({
  origin: "http://localhost:5173", // frontend
  credentials: true
}));

const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection Successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ideaDB');
}
//todo Using session
const sessionOptions = {
  // store:store,
 secret: "mySecretCode", // cookies m kaam aata search krolo (just like privacy pass)
 resave: false,
 saveUninitialized: true, //ye dono likhna pdta error aaata kiuch chat gpt m dkeh lo
//  cookie: {
//    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //after how many time the cokkie will expire
//    httpOnly: true, //by default true so we set true no more knowledge about it now generally for security prevent crosssafety attacks
//  },
};

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get('/', function(req, res) {
    res.send("HY MAI KAAM KR RHA");
});

//todo Routes to / will redirected or i could say will go to ./routes/idea
const ideaRoutes = require("./routes/idea");
app.use("/ideas", ideaRoutes);
//todo Routes to / will redirected or i could say will go to ./routes/idea
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.listen(3000);