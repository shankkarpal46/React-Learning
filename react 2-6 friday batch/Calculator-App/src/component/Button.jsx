function Button({values,handleClick}) {
    
    return(
        <>
        <button style={{padding:"5px 10px",margin:"8px"}} onClick={()=>handleClick(values)}>{values}</button>
        </>
    )
}
export default Button