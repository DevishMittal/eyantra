import React from 'react'
import './navbar.css'
import logo from '../../assets/srm.svg'

const navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Faculty</li>
        <li>Activities</li>
        <li>Gallery</li>
      </ul>
    </nav>
  )
}

export default navbar
