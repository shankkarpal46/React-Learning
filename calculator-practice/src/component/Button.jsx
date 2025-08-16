function Button({values,handleClick}){
    return(
        <>
            <button style={{                                                
                padding:"5px 10px",
                margin: "8px"
            }} onClick={()=>handleClick(values)}>{values}</button> {/* Here the value are taken from ButtonContainer's 
                                                                    array and even printed on button. 
                                                                        
                                                                    The HandleClick function, which came from App 
                                                                    component, through "Props-Drilling" accepts the 
                                                                    values that has come by "Props-Drilling", but 
                                                                    from ButtonContainer component. 
                                                                    
                                                                    Whatever values are passed handleClick funtion, 
                                                                    they are dynamically passed to App component 
                                                                    handleClick using "State Lifting" concept.  
                                                                    */}
        </>
    )
}

export default Button