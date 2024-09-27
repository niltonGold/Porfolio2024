import React from 'react';
import './styles.css';
import EducacionListado from '../../educacionComponents/educacionListado';

export const Educacion = () => {
  return (
        <>
          <div className='Educacion-container'>
            
            <div className='educacion-titulo'>
                EDUCACÍON
            </div>

            <EducacionListado/>

          </div>
        </>
  )
}
