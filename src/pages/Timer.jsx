import React, {useState} from 'react';

import Clock from '../components/Clock';

import Countdown from '../components/Countdown';


export const TimerContext = React.createContext();

function Timer() {
    const [start, setStart] = useState(false);
    const [timerCount, setTimerCount] = useState({});

    return (
      <TimerContext.Provider 
      value={{timerCount, setTimerCount, setStart}}>
      <div className="timer">
        {start ?  
        <Countdown /> : 
        <Clock />}
      </div>
      </TimerContext.Provider>
    )
}

export default Timer;