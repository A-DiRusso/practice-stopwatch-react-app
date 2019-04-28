import React from 'react'

function Stopwatch({clickHandler, timerBool, timerTime}) {
  return (<>
            <h2>{Math.floor(timerTime/3600)} Hours</h2>
            <h3>{Math.floor(timerTime/60)%60} Minutes</h3>
            <h4>{timerTime%60} Seconds</h4>
            <button onClick={clickHandler}>{timerBool ? `Stop` : `Start`}</button>
          </>     
  )
}

export default Stopwatch
