import { Link, NavLink } from 'react-router-dom';

import '../../styles/Navbar.css';

const Navbar = () => {
  const links = [
    { label: 'Portada', path: '/' },
    { label: 'Noticias', path: '/noticias' },
    { label: 'Ejecutivo', path: '/ejecutivo' },
    { label: 'HCD', path: '/hcd' },
    { label: 'Boletines', path: '/boletines' },
    { label: 'Carta Orgánica', path: '/carta-organica' },
    { label: 'Visítanos', path: '/ubicacion' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container-fluid justify-content-center">
       

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          <ul className="navbar-nav text-center">
            {links.map((link, idx) => (
              <li className="nav-item" key={idx}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active-link' : ''}`
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
