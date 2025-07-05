import Button from "./Button"

function ButtonContainer({handleClick}) {
   let l=["0","1","2","3","4","5","6","7","8","9","+","-","*","/","=","X","C"]
    return(
        <>
        <div>
            {l.map(e=><Button values={e} handleClick={handleClick}></Button>)}
        </div>
        </>
    )
}
export default ButtonContainer