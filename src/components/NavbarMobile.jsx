import React from 'react'
import MenuNav from './MenuNav'
import logo from "../images/logo-financiatodo.png"

const NavbarMobile = () => {
  return (
    <div className='navbar-mobile'>
      <img className='logo-mobile'  src={logo} alt="" />
      <MenuNav/>

    </div>
  )
}

export default NavbarMobile
