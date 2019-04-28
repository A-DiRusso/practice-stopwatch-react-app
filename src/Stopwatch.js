import React from 'react'

function Stopwatch({clickHandler, timerBool, timerTime}) {
  return (<>
            <h2>{Math.floor(timerTime/3600)} Hours</h2>
            <button onClick={clickHandler}>{timerBool ? `Stop` : `Start`}</button>
          </>     
  )
}

export default Stopwatch
