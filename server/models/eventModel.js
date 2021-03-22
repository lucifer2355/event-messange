const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Please tell event title"],
  },
  message: {
    type: String,
    require: [true, "Please write some message"],
  },
  emailFrom: {
    type: String,
    lowercase: true,
    validator: [validator.isEmail, "Please provide valid email id"],
  },
  emailTo: {
    type: String,
    lowercase: true,
    validator: [validator.isEmail, "Please provide valid email id"],
  },
  phoneNoFrom: {
    type: Number,
    minLength: 10,
    maxLength: 10,
  },
  platforms: {
    type: Array,
    require: [true, "Please select platforms"],
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
