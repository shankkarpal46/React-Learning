import './App.css'
import MyComponent from './component/MyComponent'
import useCounter from './custom-hooks/useCounter'
import useCustomFetch from './custom-hooks/useCustomFetch'

function App() {

  const { count, handleIncrement, handleDecrement, handleReset } = useCounter()
  
  const { data } = useCustomFetch("https://fakestoreapi.com/products")

  console.log(data)

  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} style={{marginLeft:"10px"}}>Decrement</button>
      <button onClick={handleReset} style={{marginLeft:"10px"}}>Reset</button>

      <MyComponent></MyComponent>
    </>
  )
}

export default App
