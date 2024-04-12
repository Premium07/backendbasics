require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.get("/signup", (req, res) => {
  res.send("Please register");
});

app.get("/login", (req, res) => {
  res.send("<h1>You are login</h1>");
});

app.get("/profile", (req, res) => {
  res.send("Welcome to my Profile");
});

app.listen(process.env.PORT, () => {
  console.log(port);
});
