import './App.css'
import {useState,useEffect,useRef} from 'react'

/* 
  We can achieve the same task using useState and useEffect but by only using useRef, we can stop the component to re-render. 
*/

function App() {
  const inputRef1  = useRef(null)
  const inputRef2  = useRef(null)
  const inputRef3  = useRef(null)
  
  useEffect(()=>{
    console.log("Component Rendered.")
  })

  const handleClick1 = () =>{
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = "yellow"
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = ""
  }

  const handleClick2 = () =>{
    inputRef2.current.focus()
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = "yellow"
    inputRef3.current.style.backgroundColor = ""
  }

  const handleClick3 = () =>{
    inputRef3.current.focus()
    inputRef1.current.style.backgroundColor = ""
    inputRef2.current.style.backgroundColor = ""
    inputRef3.current.style.backgroundColor = "yellow"
  }

  return (
    <>
      <button onClick = {handleClick1}>Click me!</button>

      <input type="text" ref={inputRef1} />

      <button onClick = {handleClick2}>Click me!</button>

      <input type="text" ref={inputRef2} />

      <button onClick = {handleClick3}>Click me!</button>

      <input type="text" ref={inputRef3} />
    </>
  )
}

export default App
