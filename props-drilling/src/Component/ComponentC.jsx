import ComponentD from './ComponentD.jsx'

function ComponentC(props){
    return(<>
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD user={props.user}></ComponentD>
        </div>
    </>)
}

export default ComponentC;