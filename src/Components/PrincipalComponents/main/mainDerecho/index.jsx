import React from 'react';
import './styles.css';
import { ProyectosDeDesarrolloWeb } from '../../../mainDerechoComponents/proyectosDeDesarrolloWeb';
import { ExperienciaProfesional } from '../../../mainDerechoComponents/experienciaProfesional';

export const MainDerecho = () => {
  return (
        <>
          <div className='MainDerecho-container'>
        
              <ProyectosDeDesarrolloWeb />
        
              <ExperienciaProfesional />
              
          </div>  
        </>
  )
}
