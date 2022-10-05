import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MenuNav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [animation, setAnimation] = useState("")

    const menuRef = useRef("")
    

    function disableScroll() {
        document.body.classList.add("stop-scrolling");
      }
      
      function enableScroll() {
        document.body.classList.remove("stop-scrolling");
      }
      
      const setMenu = () =>{
        if(!isOpen){
            setIsOpen(!isOpen)
            disableScroll()
            setAnimation("aparecer")
            menuRef.current.style.display="flex"
        }
        else{
            setIsOpen(!isOpen)
            enableScroll()
            setAnimation("desaparecer")
            setTimeout(()=>{menuRef.current.style.display="none"},200)
        }
      }

  return (
    <>
        <div class={`hambur ${isOpen ? "active" : ""}`} onClick={setMenu}>
            <div class="hambur-1 menu-hambur"></div>
            <div class="hambur-2 menu-hambur"></div>
            <div class="hambur-3 menu-hambur"></div>
        </div>
        <div className={`menu-navbar-mobile ${animation}`}  ref={menuRef}>
            <NavLink className='nav_menu_option' onClick={setMenu} to="/">Inicio</NavLink>
            <NavLink className='nav_menu_option' onClick={setMenu} to="/">Solicitar Crédito</NavLink>
            <NavLink className='nav_menu_option' onClick={setMenu} to="/sobre-nosotros">Sobre Nosotros</NavLink>
            <NavLink className='nav_menu_option' onClick={setMenu} to="/preguntas-frecuentes">Preguntas Frecuentes</NavLink>
            <NavLink className='nav_menu_option' onClick={setMenu} to="/">Contáctanos</NavLink>
        </div>
    </>
  )
}

export default MenuNav
