const express = require("express");
const {
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

router.route("/").post(createEvent);
router
  .route("/:id")
  .patch(updateEvent)
  .delete(deleteEvent);

module.exports = router;
