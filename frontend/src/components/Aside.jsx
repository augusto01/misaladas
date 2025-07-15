import '../styles/Aside.css';

const Aside = () => {
  const sections = [
    {
      title: 'Turismo',
      items: [
        'Ubicación',
        'Fiestas Patronales',
        'Fiesta Provincial de la Miel y Expo Saladas',
        'Museo Histórico',
        'Sargento Cabral',
        'Estudiantina',
        'La Ciudad',
        'Carnavales',
      ],
    },
    {
      title: 'Cultura',
      items: ['Solicitar Turno', 'Comprar Entradas', 'Contacto'],
    },
    {
      title: 'Economía Regional',
      items: ['Solicitar Turno', 'Comprar Entradas', 'Contacto'],
    },
    {
      title: 'Boletines',
      items: ['Solicitar Turno', 'Comprar Entradas', 'Contacto'],
    },
    {
      title: 'Contacto',
      items: ['Solicitar Turno', 'Comprar Entradas', 'Contacto'],
    },
  ];

  return (
    <aside className="aside-container">
      {sections.map((section, index) => (
        <div className="custom-card" key={index}>
          <div className="card-title">{section.title}</div>
          <ul className="card-list">
            {section.items.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Aside;
