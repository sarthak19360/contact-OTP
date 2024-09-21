const express = require("express");
const twilio = require("twilio");
const cors = require("cors");
const http = require("http");
require("dotenv").config();
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Twilio configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

// Route to send SMS
app.post("/send-sms", async (req: any, res: any) => {
  const { to, message, firstName, lastName, otp } = req.body;
  const prisma = new PrismaClient();
  try {
    const result = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: to,
    });

    const resp = await prisma.messages.create({
      data: {
        firstName,
        lastName,
        otp,
        to,
      },
    });
    console.log(resp);

    res.json({ success: true, messageSid: result.sid });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ success: false, error: error });
  }
});

// to fetch contact messages history
app.get("/get-history", async (req: any, res: any) => {
  try {
    const prisma = new PrismaClient();
    const resp = await prisma.messages.findMany();
    res.status(201).json(resp);
  } catch (error) {
    console.log("Error fetching details: ", error);
    res.status(500).json({ success: false, error: error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
