// backend/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const host = process.env.host || "localhost";

app.get("/", (req, res) => {
  res.send("Welcome to the Resume Builder API! Good luck!  :");
});

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
