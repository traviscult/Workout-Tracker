const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
// let mongodb = require("mongodb");
// const path = require("path");

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://workout:workout1@ds163255.mlab.com:63255/heroku_0235js4t", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api"));
app.use(require("./routes/view"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
