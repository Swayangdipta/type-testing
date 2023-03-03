import React, { useContext, useEffect, useState } from 'react'
import { BsFillClockFill, BsFillPlayCircleFill } from 'react-icons/bs'
import { BiChevronsRight, BiReset } from 'react-icons/bi'
import { ControlContext } from '../ControlContext'
import { TimeContext } from '../TimeContext.'

const Controls = () => {
  const [control,setControl] = useContext(ControlContext)
  const [time,setTime] = useContext(TimeContext)
  const [interId,setInterId] = useState(undefined)

  const handleTime = val => e => {
    setControl({...control,totalTime: val})
    handleUiChange(e.target.id)
  }

  const handleUiChange = id => {
    let ten = document.getElementById('ten')
    let twenty = document.getElementById('twenty')
    let thirty = document.getElementById('thirty')
    if(id === 'ten'){
      // ten.classList.add('textWhite')
      ten.classList.add('greenBg')

      twenty.classList.remove('greenBg')
      // twenty.classList.remove('text-white')
      thirty.classList.remove('greenBg')
      // thirty.classList.remove('text-white')
    }else if(id === 'twenty'){
      twenty.classList.add('greenBg')
      // twenty.classList.add('text-white')

      ten.classList.remove('greenBg')
      // ten.classList.remove('text-white')
      thirty.classList.remove('greenBg')
      // thirty.classList.remove('text-white')
    }else{
      thirty.classList.add('greenBg')
      // thirty.classList.add('text-white')

      ten.classList.remove('greenBg')
      // ten.classList.remove('text-white')
      twenty.classList.remove('greenBg')
      // twenty.classList.remove('text-white')
    }
  }

  const handleStart = val => {
    let toutId
    setControl({...control,isStarted: true,isSubmitted:false})
    toutId = setInterval(()=>{
      setTime({...time,elapsedTime: time.elapsedTime++})
    },1000)     
    setInterId(toutId)
  }

  const handleSubmit = () => {
    setControl({...control,isStarted: false,isSubmitted:true})
    // if(control.keystrokes < control.story.length / 2){
    // }
    clearInterval(interId)
  }

  const handleReset = () => {
    setControl({...control,isStarted: false,isSubmitted:false,elapsedTime: 0,mistakes: 0,correct: 0,keystrokes: 0,typedText: '',story: ''})
    setTime({...time,elapsedTime: 0})
    clearInterval(interId)
    window.location.href = '/'
  }

  useEffect(()=>{
    if(time.elapsedTime === control.totalTime){
      handleSubmit()
    }
  },[time.elapsedTime])

  return (
    <div className='w-[300px] h-[300px] rounded-md bg-zinc-900'>
        <h1 className='text-zinc-100 text-[20px] px-3 py-2 select-none'>Controls</h1>
        <h2 className='mt-4 px-3 text-[18px] select-none flex items-center gap-2 text-zinc-100'><BsFillClockFill />Time</h2>
        <div className='w-full mt-4 px-3 flex items-center justify-between'>
          <div id='ten' onClick={e=> handleTime(600)(e)} className='w-12 h-12 font-[500] text-zinc-800 rounded-full flex items-center justify-center bg-zinc-300 cursor-pointer greenBg'>10m</div>
          <div id='twenty' onClick={e=> handleTime(900)(e)} className='w-12 h-12 font-[500] text-zinc-800 rounded-full flex items-center justify-center bg-zinc-300 cursor-pointer'>15m</div>
          <div id='thirty' onClick={e=> handleTime(1200)(e)} className='w-12 h-12 font-[500] text-zinc-800 rounded-full flex items-center justify-center bg-zinc-300 cursor-pointer'>20m</div>
        </div>

        <button disabled={control.isStarted} onClick={e=>handleStart(true)} className='w-[280px] hover:bg-emerald-500 h-[50px] text-zinc-100 text-[24px] font-[500] mt-4 mx-[10px] bg-emerald-600 rounded-md flex items-center justify-center gap-2'>
          {
            control.isStarted ? ('Started...') : (
              <>
                Start
                <BsFillPlayCircleFill className='text-[20px] pt-[2px]' />
              </>
            )
          }
        </button>
        <div className='flex items-center jutify-between gap-[0px]'>
        <button onClick={handleReset} className='w-full hover:bg-rose-600 h-[40px] text-zinc-100 text-[20px] font-[500] mt-4 mx-[10px] bg-rose-500 rounded-md flex items-center justify-center gap-2'>
          Reset
          <BiReset className='text-[20px] pt-[2px]' />
        </button>

        <button onClick={handleSubmit} className='w-full hover:bg-amber-500 h-[40px] text-zinc-800 text-[20px] font-[500] mt-4 mx-[10px] bg-amber-400 rounded-md flex items-center justify-center gap-2'>
          Submit
          <BiChevronsRight className='text-[24px] pt-[2px]' />
        </button>
        </div>
    </div>
  )
}

export default Controls