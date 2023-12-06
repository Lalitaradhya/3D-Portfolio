import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md text-2xl'>
            <h1 className='blue-gradient_text'>LA</h1>
        </NavLink>
        <nav className='flex text-lg gap-7 w-70 h-11 rounded-lg bg-white font-bold shadow-md px-2 items-center justify-center'>
            <NavLink to='/about' className={ ({isActive}) => isActive ? 'text-blue-500': 'blue-gradient_text'}  >
              About
            </NavLink>
            {/* <NavLink to='/project' className={({isActive}) => isActive ? 'text-blue-500': 'blue-gradient_text'} >
              Projects
            </NavLink> */}
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-blue-500': 'blue-gradient_text'} >
              Contact
            </NavLink>

        </nav>
    </header>
  )
}

export default Navbar