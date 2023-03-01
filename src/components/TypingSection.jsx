import React,{useContext,useEffect,useState} from 'react'
import { ControlContext } from '../ControlContext'

const TypingSection = () => {
    const [control,setControl] = useContext(ControlContext)
    const [typedText,setTypedText] = useState('')

    const evaluate = () => {
        let originalStory = control.story.split('')
        let userTypedStory = typedText.split('')
        let correct = 0,mistakes = 0,strokes = userTypedStory.length
        console.log((userTypedStory.length / (control.elapsedTime/60))+" letter/min");

        let lengthOfLoop = originalStory.length > userTypedStory.length ? userTypedStory.length : originalStory.length

        for (let index = 0; index < lengthOfLoop; index++) {
            if(originalStory[index] === userTypedStory[index]){
                correct++
            }else{
                mistakes++
            }                
        }
        setControl({...control,correct: correct,mistakes: mistakes,keystrokes: strokes,typedText: typedText})
        setTypedText('')
    }

    useEffect(()=>{
        if(control.isSubmitted && typedText !== ''){
            evaluate()
        }
    },[control.isSubmitted])
  return (
    <div className='w-full h-[50%] bg-zinc-800 rounded-md p-5'>
        <textarea autoFocus value={typedText} onChange={e => setTypedText(e.target.value)} disabled={!control.isStarted} className='bg-[transparent] w-full h-full outline-none text-emerald-300 text-[20px]' placeholder='Start typing...' />
    </div>
  )
}

export default TypingSection