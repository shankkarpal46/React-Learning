import {useState} from 'react'

function useCounter(initialCount=0){
    const [count,setCount] = useState(initialCount)

    function handleIncrement(){
        setCount(count+1)
    }

    function handleDecrement(){
        setCount(count-1)
    }

    function handleReset(){
        setCount(initialCount)
    }
    return{count,handleIncrement,handleDecrement,handleReset}
}

export default useCounter