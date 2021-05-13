const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(email, firstName, title, message) {
    this.to = email;
    this.firstName = firstName;
    this.subject = title;
    this.message = message;
    this.from = `Dhruvil Gajjar <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      return 1;
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject, message) {
    //! Send the actual email
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      firstName: this.firstName,
      subject,
      message,
    });

    //! Define email option
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    //! Create transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(
      "welcomeEmailTemplate",
      "Welcome to the family! 😊",
      "Welcome to the family, we're glad to have you 🎉🙏"
    );
  }

  async sendEventMessage() {
    await this.send("birthdayEmailTemplate", this.subject, this.message);
  }
};

// const sendEmail = async (options) => {
//! Create transporter
//   const transpoter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//*     Activate in gmail 'less secure app' option
//   });
//! Define the email options
//! Actually send the email
// };
