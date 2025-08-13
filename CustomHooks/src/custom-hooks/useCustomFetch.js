import { useState, useEffect } from 'react'

function useCustomFetch(url){
    const [data,setData] = useState()
    
    async function fetchData(){
        const response = await fetch(url)

        const dataRetrieve = await response.json()

        setData(dataRetrieve)
    }
     
    useEffect(()=>{
        fetchData()
    },[])

    return{data}
}

export default useCustomFetch