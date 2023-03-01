import React, { useContext, useEffect, useState } from 'react'
import { ControlContext } from '../ControlContext'

const Timer = () => {
    const [control,setControl] = useContext(ControlContext)

  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[150px] h-[150px] rounded-full border-[1px] bg-zinc-800 border-zinc-600 text-zinc-100 text-[24px] select-none flex items-center justify-center'>
            {
                control.elapsedTime > 60 ? (Math.floor(control.elapsedTime / 60)+"min") : (control.elapsedTime+"secs")
            }            
        </div>
    </div>
  )
}

export default Timer