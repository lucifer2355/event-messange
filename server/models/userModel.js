const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
// const crypto = require("crypto");

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
    validator: [validator.isEmail, "Please provide valid email"],
  },
  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "admin"],
      message: "Role is either: user, admin",
    },
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", function(next) {
  if (!this.isModified("password")) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = function(candidatePassword, userPassword) {
  console.log("candidate password", candidatePassword);
  console.log("userPassword", userPassword);
  return bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
