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
    if(typeof window !== 'undefined'){
        if(localStorage.getItem('typeTestHighScore')){
            if(score > JSON.parse(localStorage.getItem('typeTestHighScore'))){
                localStorage.setItem("typeTestHighScore",JSON.stringify(score))
            }        
        }
    }
}