import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card/>
      <Card/>
    </>
  )
}

export default App
