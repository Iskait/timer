import React, { useState, useEffect } from "react";

import Lap from "./Lap";

import lead from "./helpers/lead";


function Stopwatch() {
  const [laps, setLaps] = useState([]);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  function handleLaps () {
    if (time) {
      setLaps([{
      minutes: lead(minutes % 60),
      seconds: lead(seconds % 60),
      miliseconds: lead(time % 100),
      id: Date.now(),
      position: laps.length + 1,
      }, ...laps]);
    } else {
      return;
    }
  }
  function handleReset () {
    setTime(0);
    setLaps([]);
  }

  let seconds = Math.floor(time / 100);
  let minutes = Math.floor(seconds / 60);

  useEffect(() => {
    let timer = null;
    if (timerOn) {
      timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearTimeout(timer);
  }, [timerOn]);

  return (
    <div className="stopwatch__display">
      <div className="stopwatch__time">
        {lead(minutes % 60)}:{lead(seconds % 60)}.{lead(time % 100)}
      </div>
      <div className="stopwatch__buttons">
        {!timerOn && !!time ? 
          <button className="stopwatch__reset" onClick={handleReset}>Reset</button> :
          <button className="stopwatch__set-lap" onClick={handleLaps}>Lap</button>
        }
        {timerOn ?
          <button className="stopwatch__stop" onClick={() => setTimerOn(!timerOn)}>Stop</button> :
          <button className="stopwatch__start" onClick={() => setTimerOn(!timerOn)}>Start</button>
        }
      </div>
      <div className='stopwatch__laps'>
      {laps.map(lap => {
        return <Lap key={lap.id} {...lap}/>
      })}
      </div>
    </div>
  );
}

export default Stopwatch;