/* 
  useState() = Re - renders the component when the state value changes.

  useRef() = "use Reference" Does not cause re-render  when it's state 
              value changes. 
              
              When you want your component to remember some information, 
              but you don't want your component to re-render.

              1. Accessing / Interacting with DOM elements.
              2. Handling Focus, Animation and Transitions.
              3. Managing, Timer and Intervals.
*/

import {useState, useEffect, useRef} from 'react'
function App() {
  // const [number,setNumber] = useState(0)

  const ref = useRef("Shankar")

  // console.log(ref)

  useEffect(()=>{
    console.log("Component render")
  },)

  function handleClick(){
    // setNumber(n=>n+1)

    ref.current = ref.current + 1
    
    console.log(ref.current)
  }

  return (
    <>
      <button onClick={handleClick} >Click me!...</button>
    </>
  )
}

export default App
