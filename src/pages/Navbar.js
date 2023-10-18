import React from 'react'
import '../style/Navbar.css'
import navlogo from './navlogo.jpeg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/"><img className='nav-logo' src={navlogo} alt="" /></a>
        <div className="nav-title">Adult-hub</div>
      </nav>
    </div>
  )
}

export default Navbar
