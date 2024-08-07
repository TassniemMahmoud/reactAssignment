import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './Components/Home/Home'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
function App() {
  const [count, setCount] = useState(0)
let x = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"about", element: <About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact", element:<Contact/>},
    {path:"*", element:<NotFound/>}

  ]}
])
  return (
   <RouterProvider router={x}></RouterProvider>
  )
}

export default App
