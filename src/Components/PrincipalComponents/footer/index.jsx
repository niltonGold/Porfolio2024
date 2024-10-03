import './styles.css';
import React, { forwardRef } from 'react';
import CurriculumVitae from '../../../documents/Curriculum-vitae-2024_v5.pdf'

// Exportar el componente Footer utilizando forwardRef y export const
export const Footer = forwardRef((props, ref) => {

  const handleDownload = () => {
      const link = document.createElement('a');
      link.href = CurriculumVitae; // La ruta al archivo que quieres descargar
      link.setAttribute('download', 'CurriculumVitae.pdf'); // El nombre con el que quieres que se descargue el archivo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <div ref={ref} className="footer-container">
      
          <button className='footer-btn' onClick={handleDownload}>
            <div>CURRICULUM VITAE</div>
            <div className='footer-descarga-icono'/>
          </button>

    </div>
  );
});