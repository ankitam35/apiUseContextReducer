import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [hrs, setHrs] = useState(0);
  const [start, setStart] = useState(false);
  const [paused, setPaused] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    if (start && !paused) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          let updatedSeconds = prevSeconds + 1;
          if (updatedSeconds === 60) {
            setMinutes((prevMinutes) => {
              let updatedMinutes = prevMinutes + 1;
              if (updatedMinutes === 60) {
                setHrs((prevHrs) => prevHrs + 1);
                updatedMinutes = 0;
              }
              return updatedMinutes;
            });
            updatedSeconds = 0;
          }
          return updatedSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [start, paused]);

  const toggleTimer = () => {
    if (paused) {
      setPaused(false);
    } else {
      setStart((prevStart) => !prevStart);
    }
  };

  const pauseTimer = () => {
    setPaused(true);
  };

  const resetTimer = () => {
    setHrs(0);
    setMinutes(0);
    setSeconds(0);
    setStart(false);
    setPaused(false);
  };

  return (
    <center>
      <div>
        <span>{hrs < 10 ? `0${hrs}` : hrs}</span>
        <span>:</span>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div>
        <button onClick={toggleTimer}>
          {start && !paused ? "Stop" : "Start"}
        </button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Restart</button>
      </div>
    </center>
  );
};

export default StopWatch;
