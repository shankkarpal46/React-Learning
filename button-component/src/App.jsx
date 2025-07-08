import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './component/Button.jsx'
import Button2 from './Button2.jsx'
import Button3 from './Button3.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button></Button>
      <Button2></Button2>
      <Button3></Button3>
    </>
  )
}

export default App
