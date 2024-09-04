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

function App() {
  return (
    <div className="app-container">
        <LogoWhatsApp />
      <Router>
        <ScrollToTop />
        <NavBar />
        <DropdownMenu />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mudanzas" element={<Mudanzas />} />
            <Route path="/guardamuebles" element={<Guardamuebles />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
