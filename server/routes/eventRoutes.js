const express = require("express");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
} = require("../controllers/eventController");

const router = express.Router();

router
  .route("/")
  .get(getAllEvents)
  .post(createEvent);
router.route("/delete").post(deleteEvent);
router.route("/:id").patch(updateEvent);

module.exports = router;
