import ComponentB from './ComponentB.jsx'
import {useState,createContext} from 'react'

export const UserContext = createContext()
function ComponentA(){

    const [user,setUser] = useState("Shankar")
    return(<>
        <div className="box">
            <h1>ComponentA</h1>
            <p>Hello {user}</p>

            <UserContext.Provider value={user}>
                <ComponentB user={user}></ComponentB>
            </UserContext.Provider>
            
        </div>
    </>)
}

export default ComponentA;