const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url;
    this.from = `Dhruvil Gajjar <${process.env.EMAIL_FROM}>`;
  }

  createTransport() {
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

  send(template, subject) {
    //! Send the actual email
    const html = pug.renderFile(`${__dirname}/../../views/${template}.pug`, {
      filename: this.firstName,
      url: this.url,
      subject,
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
  }

  sendWelcome() {
    this.send("welcome", "Welcome to the family! 😊");
  }
};

const sendEmail = async (options) => {
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
  await transporter.sendMail(mailOptions);
};
