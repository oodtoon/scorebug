import { useEffect } from "react"
import useCountdown from "../hooks/useCountdown";

const Countdown = ({ isPaused, periodLength, timeLeft, setTimeLeft }) => {


  const countdownTimer = useCountdown(timeLeft, setTimeLeft, periodLength, isPaused)

  useEffect(() => {
    setTimeLeft(countdownTimer)
  }, [countdownTimer])
 
  const formatMinute = (t) =>
    Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
  const formatSecond = (t) => (t % 60).toString().padStart(2, "0");

  return (
    <>
      <span>{formatMinute(countdownTimer.toFixed(0))}</span> :{" "}
      <span>{formatSecond(countdownTimer.toFixed(0))}</span>
    </>
  );
};

export default Countdown