// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import LogoWhatsApp from './components/WhatsAppButton';
import NavBar from './components/NavBar';
import DropdownMenu from './components/DropdownMenu';
import Home from './components/Home';
import Mudanzas from './components/Mudanzas';
import Guardamuebles from './components/Guardamuebles';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Router>
        <ScrollToTop />
        <NavBar />
        <DropdownMenu />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <Footer /> {/* Muestra el Footer solo en esta ruta */}
              </>
            } />
            <Route path="/mudanzas" element={
              <>
                <Mudanzas />
                <Footer /> {/* Muestra el Footer solo en esta ruta */}
              </>
            } />
            <Route path="/guardamuebles" element={
              <>
                <Guardamuebles />
                <Footer /> {/* Muestra el Footer solo en esta ruta */}
              </>
            } />
            <Route path="/contacto" element={<Contacto />} /> {/* No hay Footer en esta ruta */}
          </Routes>
        </div>
      </Router>
      <LogoWhatsApp /> {/* Mueve LogoWhatsApp aquí si quieres que se mantenga visible */}
    </div>
  );
}

export default App;
