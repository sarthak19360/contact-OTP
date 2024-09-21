import { useEffect, useState } from "react";
import { Clock, User, Key, Phone } from "lucide-react";

const History = () => {
  const [messageHistory, setMessageHistory] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMessageHistory = async () => {
    try {
      const res = await fetch("/get-history");
      const data = await res.json();
      setMessageHistory(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMessageHistory();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!messageHistory || messageHistory.length === 0) {
    return (
      <div className="text-center text-gray-600 p-4">
        No message history available.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Message History
      </h1>
      <div className="space-y-4">
        {messageHistory
          .slice(0)
          .reverse()
          .map((m) => (
            <div
              key={m.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <User className="text-blue-500 mr-2" size={18} />
                  <span className="font-semibold">
                    {m.firstName} {m.lastName}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-green-500 mr-2" size={18} />
                  <span>{m.to}</span>
                </div>
                <div className="flex items-center">
                  <Key className="text-yellow-500 mr-2" size={18} />
                  <span>OTP: {m.otp}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-purple-500 mr-2" size={18} />
                  <span>{formatDate(m.time)}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default History;
