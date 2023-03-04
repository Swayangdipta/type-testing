import React,{useContext, useEffect, useState} from 'react'
import { BsChevronLeft } from 'react-icons/bs'
import { ControlContext } from '../ControlContext'

const Compare = ({setCompareOpen=f=>f}) => {
    const [control,setControl] = useContext(ControlContext)
    const [stories,setStories] = useState({
        user: [],
        original: [],
        words: []
    })

    useEffect(()=>{
        setStories({...stories,user: control.typedText.trim().split(" "),original: control.story.trim().split(" ")})
    },[])

    useEffect(()=>{
        if(stories.user.length > 0){
            let words = []
            let og = control.story.trim().split(" ")
            let typed = control.typedText.trim().split(" ")
            let iterationLimit = og.length > typed.length ? typed.length : og.length
            for(let i = 0; i < iterationLimit; i++){
                if(control.isCorrectPosition[i] === "1"){
                    words[i] = <span key={i} className='text-emerald-400'>{stories.user[i]+" "}</span>
                }else if(control.isCorrectPosition[i] === 0){
                    words[i] = <span key={i} className='text-rose-600'>{stories.user[i]+" "}</span>
                }else{
                    let span = document.createElement('span')
                    span.className = 'text-emerald-400'
                    let tempCharArr = stories.user[i].split('')
                    let CharArr = stories.user[i].split('')
                    CharArr.map((char,j)=>{
                        CharArr[j] = <span key={j+"i"} className='text-emerald-400'>{char}</span>
                    })

                    control.isCorrectPosition[i].map((elm) => {
                        CharArr[elm] = <span key={i} className='text-rose-600'>{tempCharArr[elm]}</span>
                    })
                    words[i] = CharArr
                }
            }
            setStories({...stories,words: words})            
        }
    },[stories.user])

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
                stories.words.map((word,i)=>(<span key={i}>{word} </span>))
            }
        </div>
    </div>
  )
}

export default Compare