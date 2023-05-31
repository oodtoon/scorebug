import { useState, useEffect } from "react"

const Countdown = ({ isPaused, periodLength }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  console.log("top of CountdownTimer:", { timeLeft, periodLength });

  const formatMinute = (t) =>
    Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
  const formatSecond = (t) => (t % 60).toString().padStart(2, "0");

  useEffect(() => {
    setTimeLeft(periodLength * 60);
  }, [periodLength]);

  useEffect(() => {
    if (!isPaused && timeLeft !== 0) {
      setTimeout(() => {
        setTimeLeft((t) => t - 1);
        console.log(timeLeft);
      }, 1000);
    }
    return;
  }, [isPaused, timeLeft]);

  return (
    <>
      <span>{formatMinute(timeLeft)}</span> :{" "}
      <span>{formatSecond(timeLeft)}</span>
    </>
  );
};

export default Countdown