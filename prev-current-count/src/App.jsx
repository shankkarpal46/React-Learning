import './App.css'
import {useState,useEffect,useRef} from 'react'

/*
    useState: React hook to manage component state.

    useEffect: React hook for side effects, like updating values after a render.
    
    useRef: React hook to persist a mutable reference across renders without triggering a re-render.
*/

function App() {

  const [count,setCount] = useState(0)

  let prevCount = useRef()

  useEffect(()=>{
    prevCount.current = count
  },[count])

  return (
    <>
      <p>The current value is:{count}</p>
      <p>The current value is:{prevCount.current}</p>

      <button onClick={()=>setCount(count + 1)}>Increment</button>         
    </>
  )
}

export default App
