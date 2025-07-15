/*
click event = An interaction when a user clicks on specific element.
              We can repond to the clicks by passing callback on onClick Event Handler. 
*/

function Button(){

    // const handleClick = () => console.log("OUCH!...")

    // const handleClick2 = (name) => console.log(`${name}, stop clicking me.`)   
    
    /*
    let count = 0

    const handleClick = (name) => {
        if(count < 3){
            count ++
            console.log(`${name} you have clicked me ${count} times.`)
        }
        else{
            console.log(`${name} stop clicking me!...`)
        }
    }*/

    const handleClick = (e) => e.target.textContent = "Ouchh!...🤕"
    return(
    <>
        <button onDoubleClick={(e)=> handleClick(e)}>Click me 😀</button>
    </>)
}

export default Button