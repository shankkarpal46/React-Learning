import Button from './Button.jsx'

function ButtonContainer({handleClick}){

    let l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "X", "C"]

    return(
        <>
            <div>
                {l.map(e=><Button values={e} handleClick={handleClick}> </Button>)} {/* Here the items of the array 
                                                                                    are passed as props to the Button 
                                                                                    component as values. 
                                                                                    
                                                                                    HandleClick function is passed as 
                                                                                    props drilling to the Button component,
                                                                                    which came globally from the App component;
                                                                                    */}
            </div>      
        </>
    )
}

export default ButtonContainer