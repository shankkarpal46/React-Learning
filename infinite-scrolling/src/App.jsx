import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Card from './component/Card.jsx'
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [data, setData] = useState([])
  const[page,setPage] = useState(1)

  async function fetchData(){
    const response = await fetch('https://picsum.photos/v2/list?page=1&limit=12')
    
    const datafetched = await response.json()

    setData(prevData =>[...prevData,...datafetched]) // The content should display on next page or after the previous data. 
                                                     //  Inshort to prevent overwritting of data.
                                                     
    setPage(prevPage= prevPage + 1)  // To update the page number (pagination)
  }

  useEffect(()=>{
    fetchData() 
  },[])

  return (
    <>
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
  }> 
      <div className="container">
        <div className="row">
          {
            data.map(e=><Card d={e}></Card>)
          }
        </div>
      </div>
    </InfiniteScroll>
    
    </>
  )
}

export default App
