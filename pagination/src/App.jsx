import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Card from './Component/Card.jsx'

function App() {
    const [data,setData] = useState([])
    const [currpage,setCurrPage] = useState(1)

    async function fetch_data(){
      const response = await fetch('https://fakestoreapi.com/products')

      const data_fetched = await response.json()

      console.log(data_fetched)

      const sindex = 4 * currpage - 4
      const eindex = sindex + 3

      console.log(sindex)
      console.log(eindex)

      setData(data_fetched.slice(sindex, eindex + 1))

    }

    const total = data.length + 1
    
    useEffect(()=>{
      fetch_data()
    },[currpage])

    return(
      <>
        <div className="container">
          <div className="row mt-5">
              {
                data.map((e)=><Card d={e}></Card>)
              }
          </div>

          <div style={{display:"flex", justifyContent:"space-between", margin:"20px"}}>
              <button disabled={currpage == 1} onClick={()=>setCurrPage(currpage-1)} className="btn btn-success text-white">Prev</button>
              <p><b>{currpage} of {total}</b></p>

              <button disabled={currpage == 5} onClick={()=>setCurrPage(currpage+1)} className='btn btn-success text-white'>Next</button>
          </div>
        </div>
      </>
    ) 
}
export default App
