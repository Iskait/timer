import React, { useState, useEffect, useRef, useContext } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { TimerContext } from '../pages/Timer';

import lead from './helpers/lead';


function Countdown() {
    const {timerCount : {hours, minutes, seconds}, setTimerCount, setStart} = useContext(TimerContext);
    const [on, setOn] = useState(true);
    const secondsRef = useRef(+hours*3600 + +minutes * 60 + +seconds);
    const initialRef = useRef(secondsRef.current);
    const [value, setValue] = useState(100);
    const bool = hours + minutes + seconds > 0;
    function handleRestart () {
        setTimerCount({
            hours: ~~(initialRef.current / 3600),
            minutes: ~~(initialRef.current % 3600 / 60),
            seconds: initialRef.current % 3600 % 60,
            })
            secondsRef.current = initialRef.current;
            setValue(100);
    }
    useEffect(() => {
        let timer = null;
        if (on) {
            timer = setInterval(() => {
            if (!hours && !minutes && !seconds) return;
            secondsRef.current-=1;
            setTimerCount({
                hours: ~~(secondsRef.current / 3600),
                minutes: ~~(secondsRef.current % 3600 / 60),
                seconds: secondsRef.current % 3600 % 60,
                })
            setValue((secondsRef.current / initialRef.current) * 100)
            }, 1000)
        } else {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        }
    })
    return (
        <div className='timer__body'>
            <div className="timer__countdown">
                <div className="timer__time-counter">
                {bool ? `${lead(hours)}:${lead(minutes)}:${lead(seconds)}` :
                <>
                <p style={{marginBottom: '20px'}}>Timer is over.</p>
                <button className="timer__cancel" onClick={() => setStart(start=>!start)}>Cancel</button>
                </>
                }
                </div>
                <CircularProgressbar 
                 value={value} 
                 strokeWidth={2}
                />
            </div>
            <div className="timer__buttons" 
            style={{justifyContent: `${bool ? 'space-between' : 'center'}`}}>
            {bool ? 
            <>
            <button className="timer__cancel" onClick={() => setStart(start=>!start)}>Cancel</button>
            <button className="timer__toggler" onClick={() => setOn(!on)}>{on? 'Stop' : 'Resume'}</button>
            </> : 
            <button className="timer__restart" onClick={handleRestart}>Restart</button>}
            </div>
        </div>
    )
}

export default Countdown;