import React from 'react';
import './styles.css';
import ExperienciaListado from '../../experienciaProfesionalComponents/experienciaListado';

export const ExperienciaProfesional = () => {
  return (
        <>
          <div className='ExperienciaProfesional-container'>
            
            <div className='experienciaprofesional-titulo'>
                EXPERIENCIA PROFESIONAL
            </div>

            <ExperienciaListado />

          </div>
        </>
  )
}
