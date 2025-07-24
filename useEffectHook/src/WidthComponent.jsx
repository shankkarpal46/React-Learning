import {useState, useEffect} from 'react'
 
function WidthComponent(){

    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)


    //without useEffect you keep on creating 
    useEffect(()=>{
        window.addEventListener("resize",handleSize)
        console.log("Event Listener called.")

        return() =>{
            window.removeEventListener("resize",handleSize)
            console.log("Remove Listener called.")
        }
    },[])

    useEffect(()=>{
        document.title = `${window.innerWidth} X ${window.innerHeight}`   
    },[width,height])

    function handleSize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <>
            <p>Width:{width}</p>
            <p>Height:{height}</p>    
        </>
    )
}

export default WidthComponent