import React from 'react'
import Swal from 'sweetalert2'
import Input from './Input'
import {FaWhatsapp} from "react-icons/fa"

const Form = () => {

    const handleSubmit = (e)=>{
      e.preventDefault();
        try { 
          Swal.fire({
            title: 'Correo enviado',
            icon: 'success',
            showConfirmButton: false,
            timer:1500,
            timerProgressBar:true,
            color:"#6c6c6c"
            
          })
        } catch (error) {
          console.log(error)
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text:"No se ha podido enviar el mail.",
            showConfirmButton: false,
            timer:1500,
            timerProgressBar:true,
            color:"#6c6c6c"
          })
        }
      }

  return (
    <div className='container-form'>
      <div className='text-form'>
        <h2>Solicita tu prestamo de la mejor forma</h2>
        <h3>Rápido, Fácil, Seguro</h3>
        <p>Aplica en línea desde la comodidad de tu hogar. Una vez enviada la solicitud, te llamaremos a la brevedad para darte respuesta.</p>
        
      </div>
      <div>
        <form className='contact-form' action="correos.php" method='POST' onSubmit={handleSubmit}>
        <Input type="text" name="nombre" label="Nombre" />
        <Input type="text" name="apellido" label="Apellido" />
        <Input type="text" name="documento" label="Documento" />
        <Input type="text" name="correo" label="Correo" />
        <Input type="text" name="telefono" label="Teléfono" />
        <Input type="text" name="empresa" label="Empresa" />
        <Input type="text" name="antiguedad" label="Antiguedad"/>
        <Input type="text" name="salario" label="Salario"/>
        <Input type="text" name="cantidad" label="Cantidad a solicitar"/>
        <button className='button' type='submit'>Enviar solicitud</button> 
        
        </form>
        
        <div className='contact'>
        <p className='contact-ws'>Tambien puedes realizar la solicitud a través de WhatsApp. </p>
        <a href="https://wa.me/50764714369?text=Hola%20Financiatodo!%20Quiero%20solicitar%20un%20prestamo.%20"><button className='button wsapp'>Contactar<FaWhatsapp size="25px" /></button></a>
        </div>
      </div>
      
    </div>
  )
}

export default Form
