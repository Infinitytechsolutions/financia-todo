import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Benefits from '../components/Benefits'
import Requirements from '../components/Requirements'
import SliderBanner2 from '../components/SliderBanner2'

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
            <SliderBanner2/>
           <div className="custom-shape-divider-bottom-1664653005">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>  
          
        </div>
        <div className='section-3' >
            <div className='text-steps'>
                <div>
                    <p>Tu préstamo online</p>
                    <h2>En 3 sencillos pasos</h2>
                    <p>Solicitar un préstamo en Panamá con Financiatodo es muy sencillo. Aplica en línea sin necesidad de desplazarte!</p>
                    <Link to="/solicitar-prestamo"><button className='button'>¡Aplica YA!</button></Link> 
                </div>
            </div>
            <div className='steps' data-aos-easing="ease-out-back" data-aos-delay="0">
                <div className='step-1' data-aos="fade-up" data-aos-duration="1500">
                    <h2>1.</h2>
                    <h3>Gestiona tu préstamo online</h3>
                    <p>Tenemos la forma más rápida y segura de solicitar un préstamo online. Completa el formulario y nosotros te contactamos inmediatamente.</p>
                </div>
                <div className='step-2' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="400">
                    <h2>2.</h2>
                    <h3>Estudiamos tu solicitud</h3>
                    <p>Una vez enviada tu solicitud, uno de nuestros especialistas de crédito se comunicará con la mayor brevedad. La información suministrada es confidencial y completamente segura.</p>
                </div>
                <div className='step-3' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">
                    <h2>3.</h2>
                    <h3>Obtienes tu dinero</h3>
                    <p>Sabemos que en una emergencia financiera necesitas una solución expedita. Es por eso que nos esforzamos por dar aprobaciones casi inmediatas. Al aprobar tu préstamo, nos comunicamos contigo al instante. </p>
                </div>
            </div>
        </div>
        <div className='section_4' data-aos="fade-up" data-aos-duration="1500" >
            <div className='section_4_switch'>
                <div className='benefits' ref={benefitsRef} onClick={()=>{setState("beneficios")}}>
                    <h3>Beneficios</h3>
                </div>
                <div className='requirements' ref={requirementsRef} onClick={()=>{setState("requisitos")}}>
                    <h3>Requisitos</h3>
                </div>
            </div>
            {state==="beneficios" ? <Benefits /> : <Requirements />}
        </div>   

        <div className='section-5'data-aos="fade-up" data-aos-duration="1000">
            <div className='section-5-contact'>
                <div >
                    <h3>Aplicar para el prestamo</h3>
                    <p>¡Si lo quieres, lo obtienes!</p>
                    <NavLink to="/solicitar-prestamo"><button className='button'>Solicitar</button></NavLink>
                    
                </div>
                <div >
                    <h3>Llámanos</h3>
                    <p>+507 208-1216</p>
                    <a href="tel:+5072081216"><button className='button'>Llamar</button>
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home
