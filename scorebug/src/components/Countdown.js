import { useState, useEffect } from "react";

const Countdown = ({ scorebug, isPaused }) => {
  const [min, setMin] = useState(scorebug.periodLength);
  const [sec, setSec] = useState(0);
  const [timeLeft, setTimeLeft] = useState(scorebug.periodLength * 60);
  const [timer, setTimer] = useState("");

  const formatTime = (t) => (t < 10 ? "0" + t : t);

  const decrement = () => {
    clearInterval(timer);
    const timerId = setInterval(() => {
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft - m * 60;

      setMin(m);
      setSec(s);
      if (m <= 0 && s <= 0) return () => clearInterval(timerId);
      timeLeft((t) => t - 1);
    }, 1000);

    setTimer(timerId);
  };

  const pause = () => {
    clearInterval(timer);
  };

  if (!isPaused) {
    decrement();
  } else {
    pause();
  }

  return (
    <>
      <span>{formatTime(min)}</span> : <span>{formatTime(sec)}</span>
    </>
  );
};

export default Countdown;
