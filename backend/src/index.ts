import express from "express";
import twilio from "twilio";
import cors from "cors";
import path from "path";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../build")));

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

//to make react router work in case of other routes doesnt match
app.get("*", (req: any, res: any) =>
  res.sendFile(path.resolve("build", "index.html"))
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
