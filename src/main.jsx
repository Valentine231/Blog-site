import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
  },

  {
    path:'/about',
    element:<About />,
  },

  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
