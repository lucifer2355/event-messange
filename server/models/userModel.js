const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please tell your name!"],
  },
  email: {
    type: String,
    require: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validator: [validator.isEmail, "Please provide valide email"],
  },
});
