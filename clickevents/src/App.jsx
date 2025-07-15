import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Button /> */}
      <ProfilePicture />
    </>
  )
}

export default App
