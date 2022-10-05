import React from 'react'
import logoFinanciatodo from "../images/logo-financiatodo.png"
import SocialMedia from '../components/SocialMedia'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us-img'>
        <img src={logoFinanciatodo} alt="" />
      </div>
      <div className='about-us-text'>
        <p>Financiatodo.com hace parte de uno de los grupos financieros más reconocidos en Panamá. ¿Necesitas reparar tu vehículo? ¿Te enfermaste y tienes gastos médicos? ¿O tienes algo que pagar que no tenías en cuenta? Si tienes alguna de estas emergencias financieras, no te preocupes: simplemente reacciona. Financia Todo te resuelve con tan sólo una llamada.</p>
        <p>Emergencias e imprevistos pueden surgir en cualquier momento, y no siempre es fácil solicitarle un anticipo a tu empleador o pedirle un préstamo a un pariente. Es por estas razones que nace Préstamos 911, una financiera panameña fundada con el fin de brindar alivio a todos los residentes de nuestro país en momentos de emergencias financieras. Nos especializamos en ofrecerte un préstamo fácil y rápido: somos tu salvavidas financiero!</p>
      </div>
       <SocialMedia />
       <div className='about-us-contact'>
        <p>TELEFONO: <span>+507 000-0000</span></p>
        <p>MAIL: <span>tuprestamo@financiatodo.com</span> </p>
       </div>
    </div>
  )
}

export default AboutUs
