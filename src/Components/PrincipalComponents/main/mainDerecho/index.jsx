import React, { useRef } from 'react';
import './styles.css';
import { ProyectosDeDesarrolloWeb } from '../../../mainDerechoComponents/proyectosDeDesarrolloWeb';
import { ExperienciaProfesional } from '../../../mainDerechoComponents/experienciaProfesional';
import { MainDerechoEnlaces } from '../../../mainDerechoComponents/mainDerechoEnlaces';
import { Educacion } from '../../../mainDerechoComponents/educacion';

export const MainDerecho = () => {

  const experienciaRef = useRef(null);
  const educacionRef = useRef(null);

  return (
        <>
          <div className='MainDerecho-container'>
        
                    <MainDerechoEnlaces experienciaRef={experienciaRef} educacionRef={educacionRef}/>
                
               
                    <ProyectosDeDesarrolloWeb />
               
                
                    <div ref={experienciaRef}>
                      <ExperienciaProfesional />
                    </div>  
                   

                    <div ref={educacionRef}>
                      <Educacion />
                    </div>
                    
          
          </div>  
        </>
  )
}
