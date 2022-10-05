import React from 'react'
import seguro from "../images/beneficio-seguro-2.png"
import facil from "../images/beneficio-facil-2.png"
import rapido from "../images/beneficio-rapido-2.png"
import responsable from "../images/beneficio-responsable-2.png"

const Benefits = () => {
  return (
    <div className='benefits-cards'>
      <div className='benefit-card'>
        <div>
            <img src={seguro} alt="" />
            <h3>Seguro</h3>
            <p>Ten la tranquilidad de que la información que nos envíes estará totalmente segura.</p>
        </div>
      </div>
      <div className='benefit-card'>
        <div>
            <img src={facil} alt="" />
            <h3>Facil</h3>
            <p>Aplica al crédito desde tu PC, tableta o teléfono móvil, es online y te tomará menos de 5 min.</p>
        </div>
      </div>
      <div className='benefit-card'>
        <div>
            <img src={rapido} alt="" />
            <h3>Rápido</h3>
            <p>Analizaremos y en un lapso no mayor a 24 horas, tendrás respuesta.</p>
        </div>
      </div>
      <div className='benefit-card'>
        <div>
            <img src={responsable} alt="" />
            <h3>Responsable</h3>
            <p>Somos una financiera panameña, acreditada y regulada por M.I.C.I.</p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
