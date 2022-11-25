import React from 'react'
import SocialMedia from '../components/SocialMedia'
import {FiMapPin,FiClock} from "react-icons/fi"
import contactImg from "../images/contact.png"

const ContactUs = () => {
  return (
    <div className='container-contact'>
      <div className='contact-left'>
            <img className='imgBG' src={contactImg} alt="Imagen de contacto financiatodo" />
            <h2>Contáctanos</h2>
            <p>En Financiatodo te brindamos atención personalizada para resolver todas tus dudas y que puedas obtener tu préstamo en poco tiempo. ¡Te esperamos! </p>
            <a href="https://wa.me/50764714369?text=Hola%20Financiatodo!%20Quiero%20solicitar%20un%20prestamo.%20"><button className='button'>Contactar ahora</button></a>
      </div>
      <div className='contact-right'>
        <h3>Información de Contacto</h3>
        <div className='contact-office contact-right-div'>
            <FiMapPin size="25px" />
            <div>
                <h4>Nuestras oficinas</h4>
                <p>Direccion: Avenida Cuba, Edificio P.H. Don Tin a un costado del Municipio de Panamá</p>
            </div>
        </div>
        <div className='contact-attention contact-right-div'>
            <FiClock size="25px" />
            <div>
                <h4>Horarios de Atención</h4>
                <p>Lunes a Viernes: 8am - 5pm.</p>
                <p>Sábados: Atención online durante todo el día.</p>
            </div>
        </div>
        <div className='contact-social contact-right-div'>
            <div className='contact-social-icons'>
                <SocialMedia />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
