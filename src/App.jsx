import { Route,Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import AboutUs from './routes/AboutUs';
import ContactForm from './routes/ContactForm';
import ContactUs from './routes/ContactUs';
import Home from './routes/Home';
import Questions from './routes/Questions';
import {FaWhatsappSquare} from "react-icons/fa"

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/preguntas-frecuentes" element={<Questions />} />
        <Route path="/solicitar-prestamo" element={<ContactForm />} />
        <Route path="/contactanos" element={<ContactUs />} />
      </Routes>
      <Footer />
      <div className='ws-fixed'><a href="https://wa.me/50764714369?text=Hola%20Financiatodo!%20Quiero%20solicitar%20un%20prestamo.%20"><FaWhatsappSquare size="50px" color='#1bd741'/></a></div>
    </>
  );
}

export default App;
