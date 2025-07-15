import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Carnavales.css';

const agrupaciones = [
  {
    nombre: 'Carisma Show',
    logo: '/img/logo-carisma.png',
    ruta: '/carnavales/yasi-bera',
  },
  {
    nombre: 'Coe Berá',
    logo: '/img/logo_coebera.jpg',
    ruta: '/carnavales/coebera',
  },
  {
    nombre: 'Iberá',
    logo: '/img/iberalogo.jpg',
    ruta: '/carnavales/ivoti-pora',
  },
  {
    nombre: 'Sambatuque',
    logo: '/img/sambatuque.jpg',
    ruta: '/carnavales/rupa-nande',
  },
  {
    nombre: 'Xangô',
    logo: '/img/logo_xango.jpeg',
    ruta: '/carnavales/yasi-pora',
  },
];

const cronograma = [
  {
    dia: 'Viernes 9 Feb',
    hora: '20:00 hs',
    evento: 'Apertura oficial del carnaval',
    orden: ['Carisma Show', 'Iberá', 'Sambatuque', 'Xango'],
  },
  {
    dia: 'Sábado 10 Feb',
    hora: '21:00 hs',
    evento: 'Primera noche de desfile',
    orden: ['Carisma Show', 'Iberá', 'Sambatuque', 'Xango'],
  },
  {
    dia: 'Domingo 11 Feb',
    hora: '21:00 hs',
    evento: 'Segunda noche de desfile',
    orden: ['Iberá', 'Xango', 'Carisma Show', 'Sambatuque'],
  },
  {
    dia: 'Viernes 16 Feb',
    hora: '22:00 hs',
    evento: 'Tercera noche y show musical',
    orden: ['Sambatuque', 'Carisma Show', 'Iberá', 'Xango'],
  },
  {
    dia: 'Sábado 17 Feb',
    hora: '22:00 hs',
    evento: 'Gran cierre y premiación',
    orden: [],
  },
];

const historial = [
  { año: 2024, comparsa: 'Iberá', agrupacion: 'Xangó' },
  { año: 2023, comparsa: 'Coe Berá', agrupacion: 'Xangó' },
  { año: 2022, comparsa: 'Carisma Show', agrupacion: 'Xangó' },
  { año: 2021, comparsa: 'Carisma Show', agrupacion: 'Xangó' },
  { año: 2020, comparsa: 'Carisma Show', agrupacion: 'Xangó' },
  { año: 2019, comparsa: 'Sambatuque', agrupacion: 'Iberá' },
];

const Carnavales = () => {
  const [verTodo, setVerTodo] = useState(false);
  const [activo, setActivo] = useState(null);
  const historialVisible = verTodo ? historial : historial.slice(0, 3);

  const toggle = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <section className="carnavales-container">
      <div className="carnavales-header">
        <img
          src="/img/logo_carnaval.png"
          alt="Logo Carnaval Saladas"
          className="carnavales-logo-principal"
        />
        <p>
          Los carnavales de Saladas son una fiesta llena de brillo, música y alegría, donde la pasión por la cultura local se vive a flor de piel. 
          Comparsas y agrupaciones musicales te invitan a bailar, emocionarte y disfrutar de noches mágicas bajo las estrellas, 
          con trajes deslumbrantes, coreografías vibrantes y ritmo contagioso.

          El corso oficial se celebra en el <strong>Complejo Turístico Municipal</strong>, en el <strong>Corsódromo Pablo Ignacio</strong>, 
          ubicado en <a 
            href="https://www.google.com/maps/place/Cors%C3%B3dromo+Pablo+Ignacio/@-28.258064,-58.621417,17z/data=!4m6!3m5!1s0x944d92c9cb9eaf25:0xb46e882318bc214b!8m2!3d-28.258064!4d-58.6192283!16s%2Fg%2F11h4k0nwhd" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#000', textDecoration: 'underline' }}
          >
            P9RM+8J, Saladas, Corrientes
          </a>. 
          Es un espacio emblemático donde la comunidad entera se reúne para celebrar esta tradición que crece año a año.
        </p>
      </div>

      <div className="carnavales-subsection">
            <h3 className="titulo-con-borde">Comparsas y Agrupaciones</h3>

        <div className="agrupaciones-grid">
          {agrupaciones.map((grupo) => (
            <Link to={grupo.ruta} className="agrupacion-card" key={grupo.nombre}>
              <img src={grupo.logo} alt={grupo.nombre} />
              <h4>{grupo.nombre}</h4>
            </Link>
          ))}
        </div>
      </div>

      <div className="cronograma-section">
        <h3 className="titulo-con-borde">Cronograma</h3>
        <div className="cronograma-accordion">
          {cronograma.map((item, i) => (
            <div key={i} className="cronograma-item">
              <div className="cronograma-header" onClick={() => toggle(i)}>
                <strong>{item.dia}</strong> – {item.hora} – {item.evento}
              </div>
              {activo === i && item.orden.length > 0 && (
                <ul className="orden-list">
                  {item.orden.map((nombre, idx) => (
                    <li key={idx}>
                      <span>{idx + 1}°</span> {nombre}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="carnavales-historial">
        <h3 className="titulo-con-borde">HISTORIAL</h3>
        <div className="tabla-historial">
          <div className="tabla-header">
            <div className="fw-bold">Año</div>
            <div className="fw-bold">Comparsa Campeona</div>
            <div className="fw-bold">Agrupación Campeona</div>
            <div className="fw-bold"></div>
        </div>

          {historialVisible.map((item) => (
            <div className="tabla-row" key={item.año}>
              <div>{item.año}</div>
              <div>{item.comparsa}</div>
              <div>{item.agrupacion}</div>
              <div>
                <button className="btn-mas-info">Detalle</button>
              </div>
            </div>
          ))}
        </div>
        <button className="btn-ver-mas" onClick={() => setVerTodo(!verTodo)}>
          {verTodo ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </section>
  );
};

export default Carnavales;
