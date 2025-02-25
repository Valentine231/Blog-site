import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='bg-teal-600 w-full h-20 py-2 px-2 my-3'>
        <nav>
            <ul>
                <li><NavLink>Home</NavLink></li>

                <Searchbar />
            </ul>
        </nav>
    </div>
  )
}

export default Navbar