import { Routes, Route } from 'react-router-dom';
import Portada from '../components/pages/Portada';
import Noticias from '../components/pages/Noticias';
import Ejecutivo from '../components/pages/Ejecutivo';
import HCD from '../components/pages/Hcd';
import Boletines from '../components/pages/Boletines';
import CartaOrganica from '../components/pages/CartaOrganica';
import Ubicacion from '../components/pages/Ubicacion';
import Galeria from '../components/pages/Galeria';
import Contacto from '../components/pages/Contacto';

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Portada />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/ejecutivo" element={<Ejecutivo />} />
      <Route path="/hcd" element={<HCD />} />
      <Route path="/boletines" element={<Boletines />} />
      <Route path="/carta-organica" element={<CartaOrganica />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default Rutas;
