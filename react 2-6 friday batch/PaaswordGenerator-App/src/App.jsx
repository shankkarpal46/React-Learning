import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let[password,setpassword]=useState("")
  let[number,setNumber]=useState(false)
  let[specialchar,setSpecialchar]=useState(false)
  let[length,setLength]=useState(8);
  function generatePassword(params) {
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let num="0123456789";
    let schar="!@#$%^&*~,?."
    let value=upper+lower
    if(number==true){
      value+=num
    }
    if(specialchar==true){
      value+=schar
    }
   
    let pass="";
    console.log(value);
    
    for(let i=1;i<=length;i++){
     pass+=value[Math.floor(Math.random()*value.length)]
    }
    setpassword(pass)
  }
  return(
    <>
    <div className="conatiner">
      <div className="row">
        <div className="col-md-4 mx-auto mt-5">
        <div className="card">
          <div className="card-header text-center bg-success text-white">
            <h3>Password Generator App</h3>
          </div>
        <div className="card-body text-center">
          <input type="text" value={password}  className='w-100 p-3' readOnly/> <br />
          <div className='d-flex justify-content-between mt-2'>
          <div>
          <input type="checkbox" onChange={()=>setNumber(value=>!value)} /> numbers
          </div>
          <div>
          <input type="checkbox" className='mx-3' onChange={()=>setSpecialchar(v=>!v)} /> special char 
          </div>
          <div>
          <input type="range"  max="20" onChange={(e)=>setLength(e.target.value)} min="0"/>   <br />
          </div> 
          </div>
          <button className='btn btn-success text-white mt-3' onClick={()=>generatePassword()}>Generate password</button>
        </div>
      </div>

        </div>
      </div>
      
    </div>
    </>
  )
}

export default App
