import React, { useEffect, useRef, useState } from 'react'
import Benefits from '../components/Benefits'
import FloatingCard from '../components/FloatingCard'
import Requirements from '../components/Requirements'

import SliderBanner from '../components/SliderBanner'
import beneficios from "../images/beneficios.png"

const Home = () => {

    const [state,setState] = useState("beneficios")

    const benefitsRef = useRef("")
    const requirementsRef = useRef("")

    useEffect(()=>{
        if(state==="beneficios"){
            benefitsRef.current.classList.add("benefits-active")
            requirementsRef.current.classList.remove("requirements-active")
        }else if(state==="requisitos"){
            benefitsRef.current.classList.remove("benefits-active")
            requirementsRef.current.classList.add("requirements-active")
        }
    },[state])

  return (
    <div>
        <div className='test-1'>
            <SliderBanner/>
           <div className="custom-shape-divider-bottom-1664653005">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>  
            {/* <div className='section-2'>
                <div>
                    
                </div>
            </div> */}
        </div>
        <div className='section-3' >
            <div className='text-steps'>
                <div>
                    <p>Tu préstamo online</p>
                    <h2>En 3 sencillos pasos</h2>
                    <p>Solicitar un préstamo en Panamá con Financia Todo es muy sencillo. Aplica en línea sin necesidad de desplazarte!</p>
                    <button className='button'>¡Aplica YA!</button>
                    
                </div>
            </div>
            <div className='steps'>
                <div className='step-1'>
                    <h2>1.</h2>
                    <h3>Gestiona tu préstamo online</h3>
                    <p>Tenemos la forma más rápida y segura de solicitar un préstamo online. Completa el formulario y nosotros te contactamos inmediatamente.</p>
                </div>
                <div className='step-2'>
                    <h2>2.</h2>
                    <h3>Estudiamos tu solicitud</h3>
                    <p>Una vez enviada tu solicitud, uno de nuestros especialistas de crédito se comunicará con la mayor brevedad. La información suministrada es confidencial y completamente segura.</p>
                </div>
                <div className='step-3'>
                    <h2>3.</h2>
                    <h3>Obtienes tu dinero</h3>
                    <p>Sabemos que en una emergencia financiera necesitas una solución expedita. Es por eso nos esforzamos por dar aprobaciones casi inmediatas. Al aprobar tu préstamo, nos comunicamos contigo al instante. </p>
                </div>
            </div>
        </div>
        <div className='section_4'>

            <div className='section_4_switch'>
                <div className='benefits' ref={benefitsRef} onClick={()=>{setState("beneficios")}}>
                    <h3>Beneficios</h3>
                </div>
                <div className='requirements' ref={requirementsRef} onClick={()=>{setState("requisitos")}}>
                    <h3>Requisitos</h3>
                </div>
            </div>
            {state==="beneficios" ? <Benefits /> : <Requirements />}
            
            {/* <div className="custom-shape-divider-top-1664748202">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
            </svg>
            </div> */}

        </div>
        {/* <div className='section-4'>
            <div className='benefits-img'>
                <img src={beneficios} alt="" />
            </div>
            <div className='benefits'>
                <h2>¿Por qué elegirnos?</h2>
                
                <div>
                    <h3>Seguro</h3>
                    <p>Ten la tranquilidad de que la información que nos envies estará totalmente segura.</p>
                </div>
                <div>
                    <h3>Facil</h3>
                    <p>Aplica al credito desde tu PC, tableta o teléfono móvil, es online y te tomará menos de 5 min.</p>
                </div>
                <div>
                    <h3>Rápido</h3>
                    <p>Analizaremos y en un lapso no mayor a 24 horas, tendrás respuesta.</p>
                </div>
                <div>
                    <h3>Responsable</h3>
                    <p>Somos una financiera panameña, acreditada y regulada por M.I.C.I.</p>
                </div>
                <div>
                    <h3>Comodo</h3>
                    <p>Aplica donde y cuando quieras a través de tu teléfono celular o PC.</p>
                </div>
            </div>
        </div> */}

     

        <div className='section-5'>
            {/* <div className='section-5-text'>
                <h2>Estamos para a ayudarte</h2>
                <p>Aplica de forma online, o comunícate con nosotros para una atención personalizada.</p>
            </div> */}
            <div className='section-5-contact'>
                <div>
                    <h3>Aplicar para el prestamo</h3>
                    <p>¡Si lo quieres, lo obtienes!</p>
                    <button className='button'>Solicitar</button>
                </div>
                <div>
                    <h3>Llámanos</h3>
                    <p>+507 000-0000</p>
                    <button className='button'>Contactar</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home
