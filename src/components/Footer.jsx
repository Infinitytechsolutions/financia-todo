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
            <p>El porcentaje de la tasa de interés siempre será el mismo durante todo el plazo del préstamo. Esto permite que el monto de la letra no cambie. Nuestra tasa efectiva anual va desde el 165% al 177%, según perfil del cliente. Nuestros plazos desde los 3 y hasta los 18 meses, además le financiaremos los gastos de formalización, los cuales van incluidos en el préstamo otorgado.</p>
            <p><span>EJEMPLO DE PRESTAMO:</span> Monto solicitrado por el cliente: $100.00, Monto principal incluyendo los gastos de formalización: $277,00 letra mensual por 12 meses de $23,08.</p>
        </div>
        <div className='footer-floating-card'>
            <FloatingCard />
        </div>
      
    </div>
  )
}

export default Footer
