import React from 'react'
import { Link } from 'react-router-dom'

const FloatingCard = () => {
  return (
    <div className="card">
        <h2>¿Tienes malas referencias crediticias?</h2>
        <p>¡No te preocupes! Un mal puntaje en la APC no te descalifica.
        </p>
        <Link className='nav_menu_option' to="/solicitar-prestamo"><button>¡Aplica ahora!</button></Link>
        
    </div>

  )
}

export default FloatingCard
