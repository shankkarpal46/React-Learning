import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyComponent from './MyComponent.jsx'
import WidthComponent from './WidthComponent.jsx'


/*
  useEffect() = React Hook that tells React do some code when (pick one): 
                This component re-renders.
                This component mounts.(adding component to the DOM)
                The state of the value.

  useEffect(function, [dependencies])

  useEffect(() => {})      //Runs after every re-render.

  useEffect(() => {},[])  // Runs only on mount.

  useEffect(() => {}, [value]) //Runs on mount + when value changes.


  USES:-

  #1 Event Listeners.
  #2 DOM manipulation.
  #3 Subscription.
  #4 Fetching Data from API.
  #5 Clean up when a component unmount. (removing component to the DOM)

*/

function App() {


  return (
    <>
      {/* <MyComponent></MyComponent>       */}
    
      <WidthComponent></WidthComponent>
    </>
  )
}

export default App
