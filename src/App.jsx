import { Route,Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import AboutUs from './routes/AboutUs';
import Home from './routes/Home';
import Questions from './routes/Questions';

function App() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/preguntas-frecuentes" element={<Questions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
