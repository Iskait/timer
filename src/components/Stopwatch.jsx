import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { resetTime, tickTime, toggleTimer } from '../redux/slices/stopwatchSlice';
import { setLaps, clearLaps } from '../redux/slices/lapsSlice';
import Lap from "./Lap";

import lead from "./helpers/lead";


function Stopwatch() {
  const timerOn = useSelector(state=>state.stopwatch.timerOn);
  const time = useSelector(state=>state.stopwatch.time);
  const { laps }  = useSelector(state=>state);
  const dispatch = useDispatch();
  const seconds = Math.floor(time / 100);
  const minutes = Math.floor(seconds / 60);
  
  function handleLaps () {
    if (time) {
      dispatch(setLaps({
      minutes: lead(minutes % 60),
      seconds: lead(seconds % 60),
      miliseconds: lead(time % 100),
      position: laps.length + 1,
      }))
    } else {
      return;
    }
  }
  function handleReset () {
    dispatch(resetTime());
    dispatch(clearLaps());
  }

  useEffect(() => {
    let timer = null;
    if (timerOn) {
      timer = setInterval(() => {
        dispatch(tickTime());
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearTimeout(timer);
  }, [timerOn, dispatch]);

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
          <button className="stopwatch__stop" onClick={() => dispatch(toggleTimer())}>Stop</button> :
          <button className="stopwatch__start" onClick={() => dispatch(toggleTimer())}>Start</button>
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