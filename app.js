const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

// starting express
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Importing the routes
const postsRoute = require("./routes/posts");
// ROUTES
app.use("/posts", postsRoute);

// Connect to the DB
mongoose.connect(
  process.env.DB,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Start listening the server
app.listen(3000);
