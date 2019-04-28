import React from 'react'

function Stopwatch({clickHandler, timerBool}) {
  return (<>
            <button onClick={clickHandler}>{timerBool ? `Stop` : `Start`}</button>
          </>     
  )
}

export default Stopwatch
