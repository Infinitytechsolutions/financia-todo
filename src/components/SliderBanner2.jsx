import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import familia from "../images/familia-feliz-3.png"
import profesiones from "../images/profesiones.png"
import profesiones2 from "../images/profesiones-2.png"
import profesiones3 from "../images/profesiones-3.png"
import enfermera from "../images/enfermera.png"
import doctora from "../images/doctora.png"
import { Link } from 'react-router-dom'

const SliderBanner2 = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay: true,
        // speed: 2000,
        autoplaySpeed: 3000,
        // cssEase: "linear"
      };
  return (
    <div className="slider-container2">

        <div className="text-banner2" data-aos="fade-right" data-aos-duration="1500">
                    <h2>TU PRESTAMO <span>IDEAL</span></h2>
                    <p className="text-banner-2">Con grandes esfuerzos llegas a la meta, pide tu préstamo personal para remodelacion, auto, viajes, estudios, y más.</p>
                    <p>Aprobación en 24 horas y requisitos básicos.</p>
                    <Link to="/solicitar-prestamo"><button className="button">Solicitalo ahora</button></Link>     
        </div>

        <div className="right-banner">
            <Slider {...settings}>
                <div className="slider-banner2">
                <img src={familia} alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
                <div className="slider-banner2">
                <img className="familia-2" src={profesiones} alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
                <div className="slider-banner2">
                <img className="familia-2" src={profesiones2} alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
                <div className="slider-banner2">
                <img className="familia-2" src={profesiones3} alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
                <div className="slider-banner2">
                <img src={doctora} alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
                <div className="slider-banner2 test2">
                <img src={enfermera} alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
                </div>
            </Slider>
        </div>

     
    </div>
  )
}

export default SliderBanner2
