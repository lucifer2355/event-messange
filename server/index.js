const express = require("express");
const cors = require("cors");

const AppError = require("./utils/appError");
const userRouter = require("./routes/userRoutes");

const app = express();

//! MIDDLEWARE
app.use(express.json());
//* Body parser, reading data from body into req.body
app.use(express.json({ limit: "30mb" }));
app.use(cors());

//! ROUTES
app.use("/api/users", userRouter);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

module.exports = app;
