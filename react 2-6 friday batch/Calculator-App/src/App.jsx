import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Input from './component/Input'
import ButtonContainer from './component/ButtonContainer'

function App() {
  let [value,setValue]=useState("")

  function handleClick(values) {
    console.log(values);
    if(values=="="){
      setValue(String(eval(value)))
    }
    else if(values=="C"){
      setValue("")
    }
    else if(values=="X"){
      setValue(value.substring(0,value.length-1))
    }
    else{
      setValue(value+values)
    }
    
    
}
  return(
    <>
     <div style={{width:"200px",backgroundColor:"gray",margin:"50px auto" ,padding:"10px"}}>
      <Input value={value}></Input>
      <ButtonContainer handleClick={handleClick}></ButtonContainer>
    </div> 


    
    
    </>
  )
}

export default App
