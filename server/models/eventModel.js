const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
    require: [true, "Please tell event title"],
  },
  message: {
    type: String,
    require: [true, "Please write some message"],
  },
  dateTime: {
    type: Date,
    require: [true, "PLease tell your event date & time"],
  },
  email: {
    type: String,
    lowercase: true,
    validator: [validator.isEmail, "Please provide valid email id"],
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
