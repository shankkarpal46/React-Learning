import React from 'react'

const MyComponent= React.memo(({name,show})=>{
    console.log("Submit")
    return(
        <>
            <button onClick={()=>show()}>{name}</button> 
        </>
    )
})

export default MyComponent
