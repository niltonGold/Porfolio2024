import './styles.css';


import React, { forwardRef } from 'react';

// Exportar el componente Footer utilizando forwardRef y export const
export const Footer = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="footer-container">
        <h2>Footer</h2>
        <p>Contenido del footer aquí...</p>
      </div>
    </>
  );
});