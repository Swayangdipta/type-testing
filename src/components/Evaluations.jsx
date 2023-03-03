import React,{useContext, useEffect, useState} from 'react'
import { BsArrowRight, BsChevronRight } from 'react-icons/bs'
import { ControlContext } from '../ControlContext'
import { TimeContext } from '../TimeContext.'
import Compare from './Compare'

const Evaluations = () => {
    const [control,setControl] = useContext(ControlContext)
    const [time,setTime] = useContext(TimeContext)
    const [compareOpen,setCompareOpen] = useState(false)

  return (
    <div className='w-full h-full px-5 py-2'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[24px] text-zinc-100 select-none underline'>Results</h1>
            <button onClick={e=>setCompareOpen(true)} className='flex items-center justify-center gap-1 bg-zinc-200 px-[10px] py-[5px] rounded-md font-[500] hover:bg-amber-100'>Compare <BsChevronRight /></button>
        </div>
        <div className='flex items-center justify-between border-b-[1px] border-zinc-600 py-2 select-none'>
            <p className='text-zinc-300 text-[20px]'>Keystrokes</p>
            <p className='w-[30px] h-[30px] rounded-full bg-zinc-300 flex items-center justify-center font-[500]'>{control.keystrokes}</p>
        </div>
        <div className='flex items-center justify-between border-b-[1px] border-amber-300 py-2 select-none'>
            <p className='text-amber-300 text-[20px]'>Speed (letter/min)</p>
            <p className='w-[30px] h-[30px] rounded-full bg-amber-300 flex items-center justify-center font-[500]'>{Math.floor(control.keystrokes / (time.elapsedTime/60))}</p>
        </div>
        <div className='flex items-center justify-between border-b-[1px] border-emerald-600 py-2 select-none'>
            <p className='text-emerald-300 text-[20px]'>Correct</p>
            <p className='w-[30px] h-[30px] rounded-full bg-emerald-300 flex items-center justify-center font-[500]'>{control.correct}</p>
        </div>
        <div className='flex items-center justify-between py-2 select-none'>
            <p className='text-rose-600 text-[20px]'>Mistakes</p>
            <p className='w-[30px] h-[30px] rounded-full bg-rose-600 flex items-center justify-center font-[500]'>{control.mistakes}</p>
        </div>

        {
            compareOpen && (<Compare setCompareOpen={setCompareOpen} />)
        }
    </div>
  )
}

export default Evaluations