import { useState, lazy, Suspense } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from '../Component/Nav.jsx'
import Home from '../Component/Home.jsx'
import Contact from '../Component/Contact.jsx'
// import About from '../Component/About.jsx'
const About = lazy(()=>import("../Component/About.jsx")) //Code Splitting
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav></Nav>
          <Home name="Shankar"></Home>
        </>
      )
    },
    {
      path:'/about',
      element:(
        <>
          <Suspense fallback={<h1>Loading....</h1>}> {/* LAZY LOADING*/}
              <Nav></Nav>
              <About></About>
              <Outlet></Outlet>
          </Suspense>
        </>
      )
    },

    {
      path:'/contact',
      element:(
        <>
          <Nav></Nav>
          <Contact></Contact>
        </>
      )
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
