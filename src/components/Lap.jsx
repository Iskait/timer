import React from 'react';

function Lap({minutes, seconds, miliseconds, position}) {
  return (
    <div className='stopwatch__lap'>
      <div>
      <span>Lap {position}</span> 
      
      <span>{minutes}:{seconds}.{miliseconds}</span>
      </div>
    </div>
  )
}

export default Lap;

