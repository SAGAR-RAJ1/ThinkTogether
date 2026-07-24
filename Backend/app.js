require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const flash = require("connect-flash");
app.set("view engine", "ejs");
app.use(express.json());//This middleware converts JSON into a JavaScript object. without this req.body will be undefined
app.use(express.urlencoded({ extended: true }));//This is for HTML forms.username=Sagar&password=123 ->Express converts it into ->req.body = {username:"Sagar",password:"123"}
app.use(express.static(path.join(__dirname, "public")));//Used to serve static files.
app.set("views",path.join(__dirname, "views"));

const passport = require("passport");//for authentication and authorization
const session = require("express-session");
const localStrategy = require("passport-local");
const User = require("./models/User");//This loads your MongoDB model.
require("./config/googlePassport");

const cors = require("cors");
// used to connect backend and frontend, then as they are in different folders
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://think-together-frontend-rho.vercel.app",
  ],
  credentials: true
}));

const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("connection Successful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}
//todo Using session
app.set("trust proxy", 1);

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};


app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use((req, res, next) => {
    console.log("\n========================");
    console.log(`${req.method} ${req.originalUrl}`);
    console.log("Session:", req.session);
    console.log("Passport:", req.session.passport);
    console.log("User:", req.user);
    console.log("Authenticated:", req.isAuthenticated());
    next();
});
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
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});