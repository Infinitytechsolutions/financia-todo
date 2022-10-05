import React from 'react'
import req1 from "../images/req-1-2.png"
import req2 from "../images/req-2-2.png"
import req3 from "../images/req-3-2.png"

const Requirements = () => {
  return (
    <div className='requeriments-cards'>
      <div className='requeriment-card'>
        <div>
            <img src={req1} alt="" />
            <h3>FICHA DEL SEGURO SOCIAL</h3>
            <p>Con fecha no mayor a los 3 meses.</p>
        </div>
      </div>
      <div className='requeriment-card'>
        <div>
            <img src={req2} alt="" />
            <h3>CÉDULA O PASAPORTE</h3>
            <p>Documento Nacional de Identidad.</p>
        </div>
      </div>
      <div className='requeriment-card'>
        <div>
            <img src={req3} alt="" />
            <h3>CARTA LABORAL</h3>
            <p>Un comprobante de tu puesto y salario.</p>
        </div>
      </div>
    </div>
  )
}

export default Requirements
