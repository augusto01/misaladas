import '../styles/Aside.css';
import Buscador from './Buscador.jsx';
import { Link } from 'react-router-dom';

const Aside = () => {
  const sections = [
    {
      title: 'Turismo',
      items: [
        { label: 'Carnavales', path: '/carnavales' },
        { label: 'Fiesta Provincial de la Miel y Expo Saladas', path: '/ubicacion#fiesta-miel' },
        { label: 'Fiestas Patronales', path: '/ubicacion#fiestas-patronales' },
        { label: 'Museo Histórico', path: '/museo' },
        { label: 'Sargento Cabral', path: '/ubicacion#cabral' },
        { label: 'Estudiantina', path: '/estudiantina' },
        { label: 'La Ciudad', path: '/ubicacion' },
      ],
    },
    {
      title: 'Cultura',
      items: [
        { label: 'Solicitar Turno', path: '/turnos' },
        { label: 'Comprar Entradas', path: '/entradas' },
        { label: 'Contacto', path: '/contacto' },
      ],
    },
    {
      title: 'Economía Regional',
      items: [
        { label: 'Solicitar Turno', path: '/turnos' },
        { label: 'Comprar Entradas', path: '/entradas' },
        { label: 'Contacto', path: '/contacto' },
      ],
    },
    {
      title: 'Boletines',
      items: [
        { label: 'Solicitar Turno', path: '/turnos' },
        { label: 'Comprar Entradas', path: '/entradas' },
        { label: 'Contacto', path: '/contacto' },
      ],
    },
    {
      title: 'Contacto',
      items: [
        { label: 'Solicitar Turno', path: '/turnos' },
        { label: 'Comprar Entradas', path: '/entradas' },
        { label: 'Contacto', path: '/contacto' },
      ],
    },
  ];

  return (
    <aside className="aside-container">
      <Buscador onBuscar={(filtros) => console.log(filtros)} />
      {sections.map((section, index) => (
        <div className="custom-card" key={index}>
          <div className="card-title">{section.title}</div>
          <ul className="card-list">
            {section.items.map((item, i) => (
              <li key={i}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Aside;
