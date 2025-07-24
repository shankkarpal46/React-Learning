import {useState} from 'react'
import ComponentB from './ComponentB.jsx'

function ComponentA(){

    const [user,setUser] = useState("Shankar")
    return(<>
        <div className="box">
            <h1>ComponentA</h1>
            <p>Hello {user}</p>
            <ComponentB user={user}></ComponentB>
        </div>
    </>)
}

export default ComponentA;