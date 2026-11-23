import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
  }
  function handleReset() {
    handleStop();
    setStartTime(null);
  }
  let msPassed = 0;
  if (startTime != null && now != null) {
    msPassed = now - startTime;
  }
  const totalSecond = Math.floor(msPassed / 1000);
  const hours = Math.floor(totalSecond / 3600);
  const minutes = Math.floor((totalSecond % 3600) / 60);
  const seconds = totalSecond % 60;
  const milliseconds = msPassed % 1000;

  const pad = (n, len = 2) => String(n).padStart(len, "0");
  return (
    <>
      <h1>
        stop watch {pad(hours)}:{pad(minutes)}:{pad(seconds)}:
        {pad(milliseconds)}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
