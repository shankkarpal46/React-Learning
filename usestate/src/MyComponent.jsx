import {useState} from "react"

function MyComponent(){
    const [name,setName] = useState("Guest")

    const [age,setAge] = useState(0)

    const [isEmployed,setisEmployed] = useState(false) 
    
    const updateName = () => {
        setName("Spongebob")
    }

    const incrementAge = () =>{
        setAge(age+1)
    }

    const isEmployedStatus = () =>{
        setisEmployed(!isEmployed)
    }
    return(
        <>
            <p>Name: {name}</p>

            <p>Age: {age}</p>

            <p>Is Employed: {isEmployed?"Yes":"No"}</p>
            
            <button onClick={updateName}>Set Name</button>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={isEmployedStatus}>Give Job</button>
        </>
    )
}

export default MyComponent 