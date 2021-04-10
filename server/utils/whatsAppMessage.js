const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_TOKEN
);

client.messages
  .create({
    from: "whatsapp:+919512531333",
    body: "This message sent with help of code so ignore it and do some work.",
    to: "whatsapp:+917878111271",
  })
  .then((message) => console.log(message.sid));
