const express = require("express");
const cors = require("cors");
const schedule = require("node-schedule");
const moment = require("moment");

const Event = require("./models/eventModel");
const User = require("./models/userModel");
const Email = require("./utils/email");
const AppError = require("./utils/appError");
const userRouter = require("./routes/userRoutes");
const eventRouter = require("./routes/eventRoutes");

const app = express();

//! MIDDLEWARE
app.use(express.json());
//* Body parser, reading data from body into req.body
app.use(express.json({ limit: "30mb" }));
app.use(cors());

//! SEND EVENT MAIL
const job = schedule.scheduleJob("* */24 * * * *", async () => {
  const today = moment().startOf("day");
  const data = await Event.find({
    dateTime: {
      $gte: today.toDate(),
      $lte: moment(today)
        .endOf("day")
        .toDate(),
    },
  });

  data.forEach(async (user) => {
    const userData = await User.find({ _id: user.userId });

    await new Email(
      user.email,
      userData[0].firstName,
      user.title,
      user.message
    ).sendEventMessage();
  });
});

//! ROUTES
app.use("/api/users", userRouter);
app.use("/api/event", eventRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

module.exports = app;
