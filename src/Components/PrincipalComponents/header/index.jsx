import React, { useState } from 'react';
import './styles.css';


export const Header = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(true); // Activar pantalla completa
  };

  const closeFullScreen = () => {
    setIsFullScreen(false); // Desactivar pantalla completa
  };

  return (
    <>
      {/* Contenedor que maneja el clic para pantalla completa */}
      <div
        className='Header-container'
        onClick={handleImageClick} // Manejar clic para activar pantalla completa
      />

      {/* Pantalla completa de la imagen */}
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <div className="fullscreen-image">
            <img
              src={require('../../../images/header/LogoLinkedin.png')} // Asegúrate de que la ruta sea correcta
              alt='Imagen en pantalla completa'
              className="fullscreen-img" // Clase CSS para la imagen en pantalla completa
            />
          </div>
        </div>
      )}
      
    </>
  );
};
