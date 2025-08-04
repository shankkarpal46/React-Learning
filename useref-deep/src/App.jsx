import './App.css'
import {useRef,useState,useEffect} from 'react'

/*    
    useRef: React hook to persist a mutable reference across renders without triggering a re-render.
*/

function App() {

  const focusPoint = useRef(null) // to focus on input elements.
 
  const onClickHandler = () => {
    focusPoint.current.value = "The quick brown fox jumps over the lazy dogs"
    focusPoint.current.focus()
    focusPoint.current.style.background = "red"
  }
  return (
    <>
      <div>
        {/* <input type="text" ref={focusPoint}/> */}
        <button onClick={onClickHandler}>Click</button>
      </div>

      <br/>

      <label>Click on the button to focus and populate the text.</label>

      <br/>
      <br/>

      <textarea ref={focusPoint}/>
    </>
  )
}

export default App
