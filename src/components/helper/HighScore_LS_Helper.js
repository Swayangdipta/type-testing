export const getUserHighScore = () => {
    if(typeof window !== 'undefined'){
        if(localStorage.getItem('typeTestHighScore')){
            console.log(JSON.parse(localStorage.getItem('typeTestHighScore')));
            return JSON.parse(localStorage.getItem('typeTestHighScore'))
        }else{
            return 0
        }
    }
}

export const setUserHighScore = score => {
    console.log(score);
    if(typeof window !== 'undefined'){
        if(localStorage.getItem('typeTestHighScore')){
            if(score > JSON.parse(localStorage.getItem('typeTestHighScore'))){
                localStorage.setItem("typeTestHighScore",JSON.stringify(score))
            }        
        }else{
            localStorage.setItem("typeTestHighScore",JSON.stringify(score))
        }
    }
}