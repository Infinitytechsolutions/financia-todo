import React from 'react'
import logoFinanciatodo from "../images/logo-financiatodo.png"
import SocialMedia from '../components/SocialMedia'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us-img'>
        <img src={logoFinanciatodo} alt="Logo de financiera financiatodo" />
      </div>
      <div className='about-us-text'>
        <p>Financiatodo.com hace parte de uno de los grupos financieros más reconocidos en Panamá. ¿Necesitas reparar tu vehículo? ¿Te enfermaste y tienes gastos médicos? ¿O tienes algo que pagar que no tenías en cuenta? Si tienes alguna de estas emergencias financieras, no te preocupes: simplemente reacciona. Financia Todo te resuelve con tan sólo una llamada.</p>
        <p>Emergencias e imprevistos pueden surgir en cualquier momento, y no siempre es fácil solicitarle un anticipo a tu empleador o pedirle un préstamo a un pariente. Es por estas razones que nace Préstamos 911, una financiera panameña fundada con el fin de brindar alivio a todos los residentes de nuestro país en momentos de emergencias financieras. Nos especializamos en ofrecerte un préstamo fácil y rápido: somos tu salvavidas financiero!</p>
        <div className='mision'>
          <h3>MISIÓN</h3>
          <p>Satisfacer las necesidades financieras de nuestros clientes sirviendo con responsabilidad y excelencia; con un recurso humano capacitado y comprometido en brindar soluciones rápidas y confiables, generando valor a los clientes, colaboradores y accionistas.</p>
        </div>
        <div className='visión'>
          <h3>VISIÓN</h3>
          <p>Ser la empresa financiera líder en soluciones innovadoras para nuestros clientes, comprometida con un servicio excelente y mejoramiento continuo, contribuyendo con el desarrollo de nuestros colaboradores y al crecimiento de nuestro país.</p>
        </div>
      </div>
       <SocialMedia />
       <div className='about-us-contact'>
        <p>TELEFONO: <span>+507 208-1216</span></p>
        <p>MAIL: <span>info@financiatodo.com</span> </p>
       </div>
    </div>
  )
}

export default AboutUs
