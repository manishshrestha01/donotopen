import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, settime] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  function FormatTime() {
    let hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${addzero(hours)}:${addzero(min)}:${addzero(sec)} ${meridium}`;
  }

  function addzero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="card card-h2">
      <h1>Digital Clock</h1>
      <p style={{ fontSize: 40 }}>{FormatTime()}</p>
    </div>
  );
};

export default Clock;
