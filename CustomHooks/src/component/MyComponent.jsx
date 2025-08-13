import useCounter from "../custom-hooks/useCounter"

function MyComponent(){

    const {count,handleIncrement,handleDecrement,handleReset} = useCounter(10)
    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement} style={{marginLeft:"10px"}}>Decrement</button>
            <button onClick={handleReset} style={{marginLeft:"10px"}}>Reset</button>
        </>
    )
}
export default MyComponent 