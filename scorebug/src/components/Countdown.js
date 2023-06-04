import { useEffect } from "react";
import useCountdown from "../hooks/useCountdown";

const Countdown = ({
  isPaused,
  periodLength,
  timeLeft,
  setTimeLeft,
  playPeriod,
}) => {
  useEffect(() => {
    setTimeLeft(periodLength * 60);
  }, [playPeriod]);

  const countdownTimer = useCountdown(
    timeLeft,
    setTimeLeft,
    periodLength,
    isPaused
  );

  useEffect(() => {
    setTimeLeft(countdownTimer);
  }, [countdownTimer]);

  const formatMinute = (t) =>
    Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
  const formatSecond = (t) => (t % 60).toString().padStart(2, "0");
  const formatMili = (t) =>
    (t % 60).toString().padStart(2, "0").padEnd(4, ".0");

  return (
    <>
      {countdownTimer >= 60 && (
        <>
          <span>{formatMinute(countdownTimer.toFixed(0))}</span> :{" "}
          <span>{formatSecond(countdownTimer.toFixed(0))}</span>
        </>
      )}
      {countdownTimer < 60 && countdownTimer > 0 && (
        <>
          <span>{formatMili(countdownTimer.toFixed(2))}</span>
        </>
      )}
      {countdownTimer <= 0 && (
        <>
          <span>{formatMinute(countdownTimer.toFixed(0))}</span> :{" "}
          <span>{formatSecond(countdownTimer.toFixed(0))}</span>
        </>
      )}
    </>
  );
};

export default Countdown;
