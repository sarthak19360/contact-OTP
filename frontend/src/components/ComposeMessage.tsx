import { useEffect, useState } from "react";
import { contacts } from "../utils/contacts";
import { useSearchParams } from "react-router-dom";

const ComposeMessage = () => {
  const [message, setMessage] = useState("");
  const [otp, setOTP] = useState<null | string>(null);
  const [contactId] = useSearchParams();
  const id = Number(contactId.get("c"));

  useEffect(() => {
    const randomOTP = Math.floor(100000 + Math.random() * 900000);
    setOTP(randomOTP.toString());
    const fullMessage = `Hi! Your OTP is : ${randomOTP}`;
    setMessage(fullMessage);
  }, []);

  const handleSend = async () => {
    try {
      const response = await fetch("/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: contacts[id - 1].phoneNum,
          message: message,
          firstName: contacts[id - 1].firstName,
          lastName: contacts[id - 1].lastName,
          otp: otp,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="flex mx-auto flex-col w-8/12 my-5">
      <textarea
        rows={4}
        cols={50}
        className="border-2 p-4 rounded-lg"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white py-2 font-bold text-lg my-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default ComposeMessage;
