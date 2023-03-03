import React, { useEffect, useState, useContext } from 'react'
import { ControlContext } from '../ControlContext'
import { getARandomStory } from './helper/getStories'

const TextToWriteSection = () => {
    const [control,setControl] = useContext(ControlContext)
    const [story,setStory] = useState("Story will load here...")
    const [counter,setCounter] = useState(0)

    useEffect(()=>{
      if(control.isStarted && counter === 0){
          let randomStory = getARandomStory()
          setStory(randomStory)
          setControl({...control,story: randomStory})
          setCounter(pc => pc++)        
      }
    },[control.isStarted])

    // useEffect(()=>{
    //   if(story.length > 500){
    //     setControl({...control,story: story}) 
    //     console.log(story);       
    //   }
    // },[story])
  return (
    <div className='w-full h-[70%] rounded-md bg-zinc-900 overflow-y-scroll p-5 text-zinc-400 text-[24px] select-none'>
        {
            control.isStarted ? story : ('Story will load after you press the start button')
        }
    </div>
  )
}

export default TextToWriteSection