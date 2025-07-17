import {useState} from 'react'

function Counter(){
    const [count,setCount] = useState(0)

    const increment = () => setCount(count+1)

    const reset = () => setCount(0)

    const decrement = () => setCount(count-1)

    return(
        <>
            <p>Count: {count}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter 