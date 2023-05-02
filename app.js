require("dotenv").config();
const express = require("express");

const app = express();

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

app.get("/", (req, res) => {
  res.send(`I am ${name}, wilder in ${city}, and I love ${language}.`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
