import React, { useState } from 'react';
import './styles.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleMenu} className="menu-toggle">
        &#x25B6; {/* Esta es la flecha */}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="content">
        {/* Contenido detrás del menú */}
        <h1>Contenido Principal</h1>
        <p>Este es el contenido principal de la página.</p>
      </div>
    </div>
  );
}

export default App;
