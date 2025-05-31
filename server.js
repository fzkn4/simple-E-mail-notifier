// server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const Brevo = require("@getbrevo/brevo");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Brevo API Configuration
const apiInstance = new Brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

// Email sending endpoint
app.post("/send-email", async (req, res) => {
  const { toEmail, toName, subject, htmlContent } = req.body;

  if (!toEmail || !subject || !htmlContent) {
    return res
      .status(400)
      .json({ message: "Missing required email parameters." });
  }

  const sendSmtpEmail = {
    sender: { name: process.env.SENDER_NAME, email: process.env.SENDER_EMAIL },
    to: [{ email: toEmail, name: toName || toEmail }],
    subject,
    htmlContent,
  };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully via Brevo:", data);
    res.status(200).json({ message: "Email sent successfully!", result: data });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response ? error.response.body : error
    );
    res
      .status(500)
      .json({ message: "Failed to send email.", error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
