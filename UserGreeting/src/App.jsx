import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserGreetings from './UserGreetings.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserGreetings isLoggedIn={true} username="Shankar"/>
    </>
  )
}

export default App
