import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Login from './Auth/Login.jsx'
import Signup from './Auth/Signup.jsx'
import LandingPage from './Component/Landingpage.jsx'


const router = createBrowserRouter([
  
  {
    path:'/',

    element:<LandingPage />,
  },

  {
    path:'/home',

    element:<Home/>,
  },

  {
    path:'/about',
    element:<About />,
  },

  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
