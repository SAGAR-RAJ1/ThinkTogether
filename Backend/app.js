const express = require('express');
const app = express();
const path = require('path');
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views",path.join(__dirname, "views"));
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

app.get('/', function(req, res) {
    res.send("fuck aparna ");
});

//todo Routes to / will redirected or i could say will go to ./routes/idea
const ideaRoutes = require("./routes/idea");
app.use("/", ideaRoutes);

app.listen(3000);