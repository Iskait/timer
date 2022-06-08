import { useSelector, useDispatch } from 'react-redux';
import { setTimerCount, togglecountdownOn, setPercentage } from '../redux/slices/countdownSlice';
import { toggleStart } from '../redux/slices/timesetterSlice';
import Timesetter from './Timesetter';

function Clock() {
  const dispatch = useDispatch();

  const { hours, minutes, seconds } = useSelector(state=>state.timesetter);

  function handleStart(e) {
      e.preventDefault();
      dispatch(toggleStart());
      dispatch(togglecountdownOn(true));
      dispatch(setTimerCount({
        seconds: +hours*3600 + +minutes * 60 + +seconds
      }));
      dispatch(setPercentage({percentage: 100}));
  }
  return (
    <form onSubmit={handleStart} className="timer__clock">
        <Timesetter />
        {(!!hours || !!minutes || !!seconds ) && 
        <input type="submit" value = "Start" className="timer__start" />}
    </form>
  )
}

export default Clock;