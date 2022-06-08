import Clock from '../components/Clock';
import Countdown from '../components/Countdown';
import { useSelector } from 'react-redux';


function Timer() {
    const {start} = useSelector(state=>state.timesetter);
    return (
      <div className="timer">
        {start ?  
        <Countdown /> : 
        <Clock />}
      </div>
    )
}

export default Timer;