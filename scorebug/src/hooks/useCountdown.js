import { useEffect, useRef } from "react";

const useCountdown = (timeLeft, setTimeLeft, time, isPaused) => {
  const timeRef = useRef();

  useEffect(() => {
    setTimeLeft(time * 60);
  }, [time]);

  useEffect(() => {
    if (!isPaused && timeLeft >= 0) {
      timeRef.current = setTimeout(() => {
        setTimeLeft((t) => t - .1);
      }, 100);
      return () => clearTimeout(timeRef.current);
    }
    return;
  }, [isPaused, timeLeft]);
  return timeLeft;
};

export default useCountdown;
