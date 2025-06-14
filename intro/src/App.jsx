import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import My from './component/My.jsx'
import Button from './component/Button.jsx'

function App() {
  let value = [1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <My></My> 
      {value.map(e =><Button data={e}></Button>)}
    </>
  )
}

export default App
