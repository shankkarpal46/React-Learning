import {useState,useEffect} from 'react'

function MyComponent(){
    const [count,setCount] = useState(0)
    const [color,setColor] = useState("green")
   
    function addCount(){
        setCount(c => c + 1)
    }

    function subtractCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === 'green'? 'red' : 'green')
    }
    useEffect(()=>{
        document.title = `Count: ${count} ${color}`
    },[count,color])

    return(
        <>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={addCount}>Add Count</button>
            <button onClick={subtractCount}>Subtract Count</button>
            <button onClick={changeColor}>Subtract Count</button>
        </>
    )
}

export default MyComponent