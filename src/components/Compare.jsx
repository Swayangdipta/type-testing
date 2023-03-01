import React,{useContext} from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { ControlContext } from '../ControlContext'

const Compare = ({setCompareOpen=f=>f}) => {
    const [control,setControl] = useContext(ControlContext)
  return (
    <div className='flex fixed top-[80px] left-[30px] bg-zinc-900 rounded-md justify-between w-[calc(100vw_-_60px)] mx-auto py-[30px] h-[calc(100vh_-_110px)] gap-10'>
        <button onClick={e=>setCompareOpen(false)} className='bg-rose-600 fixed top-[90px] left-[40px] font-[500] rounded-md px-[10px] py-[5px] flex items-center justify-center gap-1'><BsChevronLeft/> Close</button>
        <div className='w-full h-full rounded-md bg-zinc-900 overflow-y-scroll p-5 text-zinc-400 text-[24px] select-none'>
            {
                control.story
            }
        </div>
        <div className='w-full h-full rounded-md bg-zinc-900 overflow-y-scroll p-5 text-zinc-400 text-[24px] select-none'>
            {
                control.story.length > control.typedText.length ?  control.typedText.split('').map((char,i)=>(
                    char === control.story[i] ? (<span className='text-emerald-400'>{char}</span>) : (<span className='text-rose-600'>{char}</span>)
                )) : control.story.split('').map((char,i)=>(
                    char === control.typedText[i] ? (<span className='text-emerald-400'>{control.typedText[i]}</span>) : (<span className='text-rose-600'>{control.typedText[i]}</span>)
                ))
            }
        </div>
    </div>
  )
}

export default Compare