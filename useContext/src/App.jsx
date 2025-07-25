import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComponentA from './Component/ComponentA'

function App() {
  /* 
    useContext() = React Hook that allows you to store values between multiple levels of components without passing props through each level.
  */
  return (
    <>
      <ComponentA></ComponentA>      
    </>
  )
}

export default App
