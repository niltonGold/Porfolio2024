import React from 'react';
import './styles.css';
import { ProyectosDeDesarrolloWeb } from '../../../mainDerechoComponents/proyectosDeDesarrolloWeb';
import { ExperienciaProfesional } from '../../../mainDerechoComponents/experienciaProfesional';
import { HeaderEnlaces } from '../../../mainDerechoComponents/headerEnlaces';
import { Estudios } from '../../../mainDerechoComponents/estudios';

export const MainDerecho = () => {
  return (
        <>
          <div className='MainDerecho-container'>
        
              <HeaderEnlaces/>

              <ProyectosDeDesarrolloWeb />
        
              <ExperienciaProfesional />
              
              <Estudios />
          </div>  
        </>
  )
}
