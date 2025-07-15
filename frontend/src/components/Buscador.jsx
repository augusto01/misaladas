import { useState } from 'react';
import '../styles/Buscador.css';

const Buscador = ({ onBuscar }) => {
  const [filtro, setFiltro] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const manejarCambio = () => {
    onBuscar({
      texto: filtro,
      desde: fechaInicio,
      hasta: fechaFin,
    });
  };

  const limpiarFiltros = () => {
    setFiltro('');
    setFechaInicio('');
    setFechaFin('');
    onBuscar({ texto: '', desde: '', hasta: '' });
  };

  return (
    <div className="buscador-container p-3">
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          placeholder="Título de la noticia"
          value={filtro}
          onChange={(e) => {
            setFiltro(e.target.value);
            manejarCambio();
          }}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Desde</label>
        <input
          type="date"
          className="form-control"
          value={fechaInicio}
          onChange={(e) => {
            setFechaInicio(e.target.value);
            manejarCambio();
          }}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Hasta</label>
        <input
          type="date"
          className="form-control"
          value={fechaFin}
          onChange={(e) => {
            setFechaFin(e.target.value);
            manejarCambio();
          }}
        />
      </div>

      <button className="btn btn-outline-danger w-100" onClick={limpiarFiltros}>
        Limpiar filtros
      </button>
    </div>
  );
};

export default Buscador;
