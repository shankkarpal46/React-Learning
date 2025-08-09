/* 
  When to use useMemo:-
  1) When you have state dependent on expensive calculation, but you don't want to run 
    on expensive calculation.

  2) When you declare an array or object inside a component, it's reference changes on every render,
    even though the value remains the same. Wrapping values inside useMemo maintains the referential eqaulity
    and prevents unnecessary re-renders. This is essential when there is useEffect dependent on array of object.

  3) When you are rendering list using Array.map that do not need to change unless a certain value changes.
*/

import { useState, useMemo} from 'react'
import './App.css'
function App() {

  const [count,setCount] = useState(0)

  const [num,setNum] = useState(0)

  // Method 2
  function getSquare(num){
    console.log("Loop is called.")

    for(let i=0;i<=1000000000;i++){

    }

    return num*num
  }

  let square = useMemo(()=>{
    return getSquare(num) 
  },[num])


/*
  // Method 1
  useMemo(() =>{
    for(let i=1;i<1000000000;i++){}
  },[])
*/

  function handleClick(){
    console.log("Component rendered.")

    setCount(count+1)
  }
  
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={handleClick}>Increment</button>

      <input type="text" onChange={(e)=>setNum(e.target.value)} />  
      <p>Square:{getSquare(num)}</p> 
    </>
  )
}

export default App
