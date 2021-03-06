import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='header-nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
      </ul>
    </nav>
  )
}

export default Nav