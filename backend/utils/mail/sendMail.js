const transporter = require("./transporter")();
const sendMail = (
  text,
  subject,
  from_info,
  toSendMail,
  cc,
  html,
  attachment = null
) => {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: `${from_info} <${process.env.EMAIL}>`,
      to: toSendMail,
      subject: `${subject}`,
      text: `${text}`,
      cc: cc,
      html: html ? html : text,
      attachments: attachment,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};
module.exports = sendMail;
