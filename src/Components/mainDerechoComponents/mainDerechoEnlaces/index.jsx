import React from 'react';
import './styles.css';

export const MainDerechoEnlaces = ( { experienciaRef, educacionRef, otrosEstudiosRef, footerRef } ) => {
  
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <>
          <div className='HeaderEnlaces-container'>
              
                  <div className='headerEnlaces-1'>
                      <div className='HREF-boton' onClick={() => scrollToSection(experienciaRef)}>
                        EXPERIENCIA PROFESIONAL
                      </div>
                      
                      <div className='HREF-boton' onClick={() => scrollToSection(educacionRef)}>
                        EDUCACION
                      </div>
                  </div>
                  
                  <div className='headerEnlaces-2'>
                      <div className='HREF-boton' onClick={() => scrollToSection(otrosEstudiosRef)}>
                        OTROS ESTUDIOS
                      </div>
                      
                      <div className='HREF-boton' onClick={() => scrollToSection(footerRef)}>
                        CURRICULUM VITAE
                      </div>
                  </div>
          
          </div>  
        </>
  )
}
