import React, { useContext, useEffect } from 'react'
import { TimeContext } from '../TimeContext.'
import { ControlContext } from '../ControlContext'

const Timer = () => {
    const [time,setTime] = useContext(TimeContext)
    const [control,setControl] = useContext(ControlContext)

    useEffect(()=>{
      document.getElementById('overlay').style.animation = `spinOverlay ${control.totalTime}s linear infinite`
    },[])

  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[150px] overflow-hidden h-[150px] animate-pulse-slow rounded-full border-[1px] bg-zinc-800 border-zinc-600 text-zinc-100 text-[24px] select-none flex items-center justify-center relative top-0'>
          <div id='overlay' className=' z-0 w-[300px] h-[300px] rounded-[150px] bg-cyan-500 absolute top-[150px] animate-spin-slow'></div>
          <p className='z-10'>
            {
                time.elapsedTime > 60 ? (Math.floor(time.elapsedTime / 60)+"min") : (time.elapsedTime+"secs")
            }              
          </p>
          
        </div>
    </div>
  )
}

export default Timer