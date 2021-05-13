const express = require("express");
const cors = require("cors");
const schedule = require("node-schedule");

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
const job = schedule.scheduleJob("*/5 * * * * *", () => {
  // console.log("Today is recognized by Rebecca Black!");
});

//! ROUTES
app.use("/api/users", userRouter);
app.use("/api/event", eventRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

module.exports = app;
