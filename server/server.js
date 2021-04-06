/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./index");

dotenv.config({ path: "../config.env" });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_TOKEN;

// eslint-disable-next-line import/order
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: "whatsapp:+919512531333",
    body: "This message sent with help of code so ignore it and do some work.",
    to: "whatsapp:+917878111271",
  })
  .then((message) => console.log(message.sid));

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
