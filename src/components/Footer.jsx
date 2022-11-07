import React from 'react'
import logo from "../images/logo.png"

import { NavLink } from 'react-router-dom'
import FloatingCard from './FloatingCard'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <img src={logo} alt="Logo de Financia Todo Panama" />
            <SocialMedia />
            <p>Financiatodo © Todos los derechos reservados.</p>
        </div>
        <div className='footer-mid'>
            <h3>Enlaces</h3>
            <NavLink className="footer-menu" to="/">Inicio</NavLink>
            <NavLink className="footer-menu" to="/solicitar-prestamo">Solicitar Prestamo</NavLink>
            <NavLink className="footer-menu" to="/preguntas-frecuentes">Preguntas Frecuentes</NavLink>
            <NavLink className="footer-menu" to="/sobre-nosotros">Sobre Nosotros</NavLink>
        </div>
        <div className='footer-right'>
            <h3>TÉRMINOS Y CONDICIONES DEL PRÉSTAMO</h3>
            <p>El porcentaje de la tasa de interés siempre será el mismo durante todo el plazo del préstamo. Esto permite que el monto de la letra no cambie. nuestra traza mensual va desde 0.83%, según perfil del cliente. Nuestros plazos desde 12 meses hasta 150 meses.</p>
        </div>
        <div className='footer-floating-card'>
            <FloatingCard />
        </div>
      
    </div>
  )
}

export default Footer
