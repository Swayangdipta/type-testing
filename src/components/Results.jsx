import React, { useContext } from 'react'
import { ControlContext } from '../ControlContext'
import Evaluations from './Evaluations'
import Timer from './Timer'

const Results = () => {
    const [control,setControl] = useContext(ControlContext)
  return (
    <div className='w-[300px] h-[250px] bg-zinc-900 rounded-md'>
        {
            control.isStarted && !control.isSubmitted ? (
                <Timer />
            ) : !control.isStarted && control.isSubmitted ? (
                <Evaluations />
            ) : (
              <div className='w-full h-full flex items-center justify-center text-zinc-100 p-5'>Timer and Results will load here.</div>
            )
        }
    </div>
  )
}

export default Results