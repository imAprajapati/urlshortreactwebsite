import React from 'react'
import Logo from '../../assest/logo.svg'
import './header.css'
const Header = () => {
  return (
    <>
    <nav>
        <img src={Logo} alt="" />
        <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
        </ul>
    </nav>
    </>
  )
}

export default Header