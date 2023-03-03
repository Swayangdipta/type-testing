import React,{createContext, useState} from "react";

export const TimeContext = createContext()

export const TimeProvider = props => {
    const [time,setTime] = useState({
        totalTime: 600,
        elapsedTime: 0,
    })

    return(
        <TimeContext.Provider value={[time,setTime]} >
            {props.children}
        </TimeContext.Provider>
    )
}