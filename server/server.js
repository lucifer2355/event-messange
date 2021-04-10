/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./index");

dotenv.config({ path: "../config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successfully");
  })
  .catch((error) => console.log("DB connection error", error.message));

app.listen(process.env.PORT, () => {
  console.log(`app running on prot ${process.env.PORT}`);
});
