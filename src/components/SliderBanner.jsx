import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../images/banner-1.png"
import { Link } from 'react-router-dom'

const SliderBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 2000,
        autoplaySpeed: 6000,
        // cssEase: "linear"
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-banner">

          <div className="text-banner" data-aos="fade-right" data-aos-duration="1500">
            <h2>TU PRESTAMO <span>IDEAL</span></h2>
            <p className="text-banner-1">Con grandes esfuerzos llegas a la meta, pide tu préstamo personal para renodelacion, auto, viajes, estudios, y más.</p>
            <p>Aprobación en 24 horas y requisitos básicos.</p>
            <Link to="/solicitar-prestamo"><button className="button">Solicitalo ahora</button></Link>
            
          </div>
          <img src="https://clinicasastre.es/wp-content/uploads/2019/12/doctor-png-images-free-download-nurse-png-png-of-a-doctor-904_870.png" alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
          
        </div>
        <div className="slider-banner test">
        <div className="text-banner" data-aos="fade-right" data-aos-duration="1500">
            <h2>TU PRESTAMO <span>IDEAL</span></h2>
            <p className="text-banner-1">Con grandes esfuerzos llegas a la meta, pide tu préstamo personal para renodelacion, auto, viajes, estudios, y más.</p>
            <p>Aprobación en 24 horas y requisitos básicos.</p>
            <Link to="/solicitar-prestamo"><button className="button">Solicitalo ahora</button></Link>
            
          </div>
          <img src="https://www.pngall.com/wp-content/uploads/2016/06/Nurse-Free-PNG-Image.png" alt="Imagen referencia financiatodo prestamos online" data-aos="fade-left" data-aos-duration="1500"/>
        </div>
      </Slider>

     
    </div>
  )
}

export default SliderBanner
