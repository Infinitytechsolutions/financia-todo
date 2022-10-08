import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../images/banner-1.png"

const SliderBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-banner">

          <div className="text-banner">
            <h2>TU PRESTAMO <span>IDEAL</span></h2>
            <p className="text-banner-1">Desde $1000 hasta $5000</p>
            <p>Con aprobación en 24 horas y requisitos básicos.</p>
            <button className="button">Solicitalo ahora</button>
            
          </div>
          <img src={banner1} alt="Imagen referencia financiatodo prestamos online" />
          
        </div>
        <div className="slider-banner test">
            <h3>2</h3>
        </div>
      </Slider>

     
    </div>
  )
}

export default SliderBanner
