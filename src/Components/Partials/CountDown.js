import { useState, useEffect } from "react";

const CountDown = ({ start }) => {
  const [time, setTime] = useState(start);

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const getTimeUnits = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };
  const { days, hours, minutes, seconds } = getTimeUnits(time);
  return (
    <div id="timer">
      <div id="days" className="date">
        {days}
        <span> Days</span>
      </div>
      <div id="hours" className="date">
        {hours}
        <span> Hours</span>
      </div>
      <div id="minutes" className="date">
        {minutes}
        <span> Minutes</span>
      </div>
      <div id="seconds" className="date">
        {seconds}
        <span> Seconds</span>
      </div>
      {time === 0 && (
        <p style={{ fontSize: "1rem", color: "red" }}>Time's up!</p>
      )}
    </div>
  );
};

export default CountDown;
