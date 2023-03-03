import React, { useContext, useEffect } from 'react'
import { ControlContext } from '../ControlContext'
import { BsKeyboardFill, BsStarFill } from 'react-icons/bs'
import { getUserHighScore } from './helper/HighScore_LS_Helper'


const Header = () => {
    const [control, setControl] = useContext(ControlContext)

    useEffect(()=>{
        let score = getUserHighScore()
        setControl({...control,highScore: score})
    },[])
    return (
        <header className="w-screen h-[50px] bg-zinc-900 flex items-center justify-between">
            <div className="ml-[30px] h-full flex gap-2 items-center justify-start select-none">
                <BsKeyboardFill className='text-zinc-100 text-[26px]' />
                <h1 className='text-zinc-100 text-[22px]'>TypeTesting</h1>
            </div>
            <div className="mr-[30px] h-full flex gap-2 items-center justify-start select-none">
                <BsStarFill className='text-zinc-100 text-[18px]' />
                <h1 className='text-zinc-100 text-[18px]'>High Score: {control.highScore} letters/min</h1>
            </div>
        </header>
    )
}

export default Header