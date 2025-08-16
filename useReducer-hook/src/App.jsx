/* 
  useReducer is another way to manage state like useState() hook.

  It is used to handle complex data type or state in a concreate way using action element, that is there in the hook itself.

  The action element in useReducer, is used to change the state of the component, when the user performs some action.

  This action element is depended on dispatch function. When the dispatch function is called that time action is performed. 

*/
import { useReducer } from 'react'
import './App.css'


// Method 1:
function reducer(state,action){
  return {count:count.state + 1}  // to only do one / single action.
}

// Method 2:
function reducer1(state,action){
  switch(action.type){
    case 'increment':
      return {count: state.count + 1}

    case 'decrement':
      return {count: state.count - 1}

    default:
      return state
  }
}

// Method 3:
const ACTIONS = {
  INCREMENT : 'increment',
  DECREMENT: 'decrement'
}                                                 // Modular way of writing the action.

function reducer2(state, action){
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}

    case ACTIONS.DECREMENT:
      return {count: state.count - 1}

    default:
      return state
  }
}

function App(){
  // const [state,dispatch] = useReducer(reducer,{ count: 0 }) // Method 1
  // const [state,dispatch] = useReducer(reducer1,{ count: 0 }) // Method 2
  const [state,dispatch] = useReducer(reducer2,{ count: 0 }) // Method 3
  
  function increment(){
    // dispatch( { type: 'increment' })
    dispatch({type:ACTIONS.INCREMENT})
  }

  function decrement(){
    // dispatch( { type: 'decrement' })
    dispatch({type:ACTIONS.DECREMENT})
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
