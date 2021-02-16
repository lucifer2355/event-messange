const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//! MIDDLEWARE
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

module.exports = app;
