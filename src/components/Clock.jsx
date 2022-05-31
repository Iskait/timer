import React, {useState, useContext} from 'react';
import { TimerContext } from '../pages/Timer';

import Timesetter from './Timesetter';

function Clock() {
  const {setStart, setTimerCount} = useContext(TimerContext);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0); 

  const states = {setHours, setMinutes, setSeconds}
    
  function handleStart(e) {
      e.preventDefault();
      setStart(start=>!start)
      setTimerCount({hours, minutes, seconds})
  }
  return (
    <form onSubmit={handleStart} className="timer__clock">
        <Timesetter {...states} />
        {(!!+hours || !!+minutes || !!+seconds ) && 
        <input type="submit" value = "Start" className="timer__start" />}
    </form>
  )
}

export default Clock;