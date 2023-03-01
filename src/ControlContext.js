import React,{createContext, useState} from "react";

export const ControlContext = createContext()

export const ControlProvider = props => {
    const [control,setControl] = useState({
        isStarted: false,
        totalTime: 600,
        elapsedTime: 0,
        isSubmitted: false,
        intervalId: '',
        mistakes: 0,
        correct: 0,
        keystrokes: 0,
        typedText: '',
        story: ''
    })

    return(
        <ControlContext.Provider value={[control,setControl]} >
            {props.children}
        </ControlContext.Provider>
    )
}