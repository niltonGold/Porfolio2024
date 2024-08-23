import React from 'react';
import './styles.css';
import { Perfil } from '../../../mainIzquierdoComponents/perfil';
import { Contacto } from '../../../mainIzquierdoComponents/contacto';
import { TechnicalSkills } from '../../../mainIzquierdoComponents/technicalSkills';
import { SoftSkills } from '../../../mainIzquierdoComponents/softSkills';
import { Idiomas } from '../../../mainIzquierdoComponents/idiomas';

export const MainIzquierdo = () => {
  return (
        <>
          <div className='MainIzquierdo-container'>
              <Perfil />
              <Contacto />
              <TechnicalSkills />
              <SoftSkills />
              <Idiomas />
          </div>  
        </>
  )
}
