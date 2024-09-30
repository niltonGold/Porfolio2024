import React from 'react';
import './styles.css';
import OtrosEstudiosListado from '../../otrosEstudiosComponents/otrosEstudiosLista';

export const OtrosEstudios = () => {
  return (
        <>
          <div className='OtrosEstudios-container'>
            
            <div className='otrosEstudios-titulo'>
                OTROS ESTUDIOS
            </div>

            <OtrosEstudiosListado/>

          </div>
        </>
  )
}
