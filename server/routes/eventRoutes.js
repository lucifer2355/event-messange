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
router
  .route("/:id")
  .patch(updateEvent)
  .post(deleteEvent);

module.exports = router;
