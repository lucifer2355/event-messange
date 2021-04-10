const express = require("express");
const { signup, login, sendEmail } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/email", sendEmail);

module.exports = router;
