import { useState,useCallback } from 'react'
import './App.css'
import MyComponent from './Component/MyComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  console.log("I am rendering.")

  const name="Shankar"

  const show = useCallback(()=>{
    console.log("show")
  },[name])

  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      
      <br />

      <MyComponent name={name} show={show}></MyComponent>    
    </>
  )
}

export default App
