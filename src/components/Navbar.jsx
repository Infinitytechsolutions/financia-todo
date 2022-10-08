import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className='navbar-desktop'>
        <img src={logo} alt="Financiera Financia Todo"/>
      <ul className='nav_menu'>
        <NavLink className='nav_menu_option' to="/">Inicio</NavLink>
        <NavLink className='nav_menu_option' to="/solicitar-prestamo">Solicitar Prestamo</NavLink>
        <NavLink className='nav_menu_option' to="/sobre-nosotros">Sobre Nosotros</NavLink>
        <NavLink className='nav_menu_option' to="/preguntas-frecuentes">Preguntas Frecuentes</NavLink>
        <NavLink className='nav_menu_option' to="/">Contáctanos</NavLink>
      </ul>
    </div>
  )
}

export default Navbar
