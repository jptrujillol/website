import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Brochure from './pages/Brochure';
import Prototipo from './pages/Prototipo';
import PrototipoParapente from './pages/PrototipoParapente';
import CubiertaParapente from './pages/CubiertaParapente';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/prototipo" element={<Prototipo />} />
        <Route path="/prototipo-parapente" element={<PrototipoParapente />} />
        <Route path="/cubierta-parapente" element={<CubiertaParapente />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
