import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Student from './Student.jsx'


// propTypes = a mechanism that ensures that the passed value is a correct datatype.
//.jsx              age.PropType.number


function App() {
  return (
    <>
      <Student name="Spongebob" age="30" isStudent={false}></Student>
      <Student name="Pattrick" age={42} isStudent={true}></Student>
      <Student name="John" age={18} isStudent=""></Student>
      <Student name="John" age={18} isStudent=""></Student>     
    </>
  )
}

export default App
