import Home from './Component/Home.jsx'
import { ErrorBoundary } from "react-error-boundary";
import './App.css'


function App() {
  
  return (
    <>
      <ErrorBoundary fallback={"Something went wrong."}>
        <Home name={"Shankar"}></Home>
      </ErrorBoundary>
    </>
  )
}

export default App
