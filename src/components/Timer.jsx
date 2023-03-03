import React, { useContext } from 'react'
import { TimeContext } from '../TimeContext.'

const Timer = () => {
    const [time,setTime] = useContext(TimeContext)

  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[150px] h-[150px] rounded-full border-[1px] bg-zinc-800 border-zinc-600 text-zinc-100 text-[24px] select-none flex items-center justify-center'>
            {
                time.elapsedTime > 60 ? (Math.floor(time.elapsedTime / 60)+"min") : (time.elapsedTime+"secs")
            }            
        </div>
    </div>
  )
}

export default Timer