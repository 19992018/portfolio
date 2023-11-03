const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const { log } = require("console");
const bodyParser = require("body-parser")
require("dotenv").config();

const PORT = process.env.PORT || 3001;

// server used to send send emails
const app = express();
app.use(express.static(path.resolve(__dirname, "../build")))
app.use(cors());
app.use(bodyParser.json());

// app.use(express.json());
// app.use("/", router);



app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" })
  // res.status(200).json("Heyy heyy");
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_APP_USER,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/api/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
          const mail = {
          from: `${firstName} ${lastName} <${email}>`,
          to: process.env.GOOGLE_APP_USER,
          replyTo: `${firstName} ${lastName} <${email}>`,
          subject: "Contact Form Submission - Portfolio",
          html: `<p>Name: ${firstName} ${lastName}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
        };
        // emailTransport.sendMail(mail, (error) => {
          contactEmail.sendMail(mail, (error) => {

          if (error) {
            res.json(error);
          } else {
            res.json({ code: 200, status: "Message Sent" });
          }
        });
})

// router.post("/contact", (req, res) => {
//   const { firstName, lastName, email, message, phone } = req.body;
//   const mail = {
//     from: `${firstName} ${lastName} <${email}>`,
//     to: process.env.GOOGLE_APP_USER,
//     replyTo: `${firstName} ${lastName} <${email}>`,
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${firstName} ${lastName}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   emailTransport.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"))
})

// app.listen(5000, () => console.log("Server Running"));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})