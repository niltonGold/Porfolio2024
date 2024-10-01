import './styles.css';
import React, { forwardRef } from 'react';


// Exportar el componente Footer utilizando forwardRef y export const
export const Footer = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} className="footer-container">
            
            
            <button className='footer-btn'>
                  
                  <div>CURRICULUM VITAE</div>
                  <div className='footer-descarga-icono'/>
            
            </button>
      
      
      </div>
    </>
  );
});