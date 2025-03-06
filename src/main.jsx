import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
<<<<<<< HEAD
import About from './Component/About.jsx'
=======
import Login from './Auth/Login.jsx'
import Signup from './Auth/Signup.jsx'
>>>>>>> be47eba (layout setup)

const router = createBrowserRouter([
  {
    path:'/',
<<<<<<< HEAD
    element:<Home/>,
  },

  {
    path:'/about',
    element:<About />,
  },

  
=======
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<Signup />
  }
>>>>>>> be47eba (layout setup)
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
