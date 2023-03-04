import React,{useContext,useEffect,useState} from 'react'
import { ControlContext } from '../ControlContext'

const TypingSection = () => {
    const [control,setControl] = useContext(ControlContext)
    const [typedText,setTypedText] = useState('')

    const evaluate = () => {
        let originalStory = control.story.split('')
        let originalWords = control.story.split(' ')
        let userTypedStory = typedText.split('')
        let userTypedWords = typedText.trim().split(' ')
        let isCorrectPosition = []
        let correct = 0,mistakes = 0,strokes = userTypedStory.length,correctWords = 0, wrongWords = 0
        console.log(userTypedWords);

        let lengthOfLoop = originalStory.length > userTypedStory.length ? userTypedStory.length : originalStory.length
        let lengthOfLoopWords = originalWords.length > userTypedWords.length ? userTypedWords.length : originalWords.length
        isCorrectPosition.fill("1",0,lengthOfLoopWords)
        for (let index = 0; index < lengthOfLoop; index++) {
            if(originalStory[index] === userTypedStory[index]){
                correct++
            }else{
                mistakes++
            }                
        }

        for(let index = 0; index < lengthOfLoopWords; index++){
            if(userTypedWords[index] === originalWords[index]){
                correctWords++
                isCorrectPosition[index] = "1"
            }else{
                if(userTypedWords[index].length !== originalWords[index].length){
                    isCorrectPosition[index] = 0
                }else{
                    let arr = []
                    for(let j = 0; j < userTypedWords[index].length; j++){
                        if(userTypedWords[index][j] !== originalWords[index][j]){
                            arr.push(j)
                        }
                    }
                    isCorrectPosition[index] = arr
                }
                wrongWords++
            }
        }

        setControl({...control,correct: correct,mistakes: mistakes,keystrokes: strokes,typedText: typedText,isCorrectPosition: isCorrectPosition})
        setTypedText('')
        console.log(isCorrectPosition);
        console.log(correctWords);
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