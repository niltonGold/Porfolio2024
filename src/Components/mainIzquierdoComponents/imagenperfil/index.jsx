import React, { useState } from 'react';
import './styles.css'; // Asegúrate de que los estilos CSS estén en este archivo

export const ImagenPerfil = () => {
  const [isFullScreen, setIsFullScreen] = useState(false); // Estado para manejar pantalla completa

  // Función para manejar el click y activar la pantalla completa
  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  // Función para cerrar la pantalla completa
  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      {/* Contenedor de la imagen de perfil */}
      <div
        className='imagenperfil-imagen'
        onClick={handleImageClick} // Manejador de click para pantalla completa
      />

      {/* Contenedor de la imagen en pantalla completa */}
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <div className="fullscreen-image">
            <img
              src={require('../../../images/header/foto_de_perfil.png')} // Ruta de la imagen, asegúrate de que sea correcta
              alt='Imagen de perfil en pantalla completa'
              className="fullscreen-img" // Clase CSS para la imagen en pantalla completa
            />
          </div>
        </div>
      )}
    </>
  );
};