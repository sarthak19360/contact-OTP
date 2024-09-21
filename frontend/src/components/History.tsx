import { useEffect, useState } from "react";

const History = () => {
  const [messageHistory, setMessageHistory] = useState(null);
  const fetchMessageHistory = async () => {
    const res = await fetch("/get-history");
    const data = await res.json();
    setMessageHistory(data);
  };
  useEffect(() => {
    fetchMessageHistory();
  }, []);
  if (!messageHistory) {
    return (
      <div className="font-bold text-lg text-blue-300 p-4">
        Fetching Message History...
      </div>
    );
  }
  return (
    <div>
      {messageHistory
        // @ts-ignore
        .slice(0)
        .reverse()
        .map((m: any) => {
          return (
            <div
              className="bg-slate-700 text-white py-2 px-3 my-2 text-center w-7/12 mx-auto rounded-lg"
              key={m.id}
            >
              <div>Name: {m.firstName + " " + m?.lastName}</div>
              <div>OTP: {m.otp}</div>
              <div>To: {m.to}</div>
              <div>Time: {JSON.stringify(new Date(m.time))}</div>
            </div>
          );
        })}
    </div>
  );
};

export default History;
