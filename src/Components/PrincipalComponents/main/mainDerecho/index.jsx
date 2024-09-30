import React, { useRef } from 'react';
import './styles.css';
import { ProyectosDeDesarrolloWeb } from '../../../mainDerechoComponents/proyectosDeDesarrolloWeb';
import { ExperienciaProfesional } from '../../../mainDerechoComponents/experienciaProfesional';
import { MainDerechoEnlaces } from '../../../mainDerechoComponents/mainDerechoEnlaces';
import { Educacion } from '../../../mainDerechoComponents/educacion';
import { OtrosEstudios } from '../../../mainDerechoComponents/otrosEstudios';

export const MainDerecho = ( { footerRef } ) => {

  const experienciaRef = useRef(null);
  const educacionRef = useRef( null );
  const otrosEstudiosRef = useRef(null);

  return (
        <>
          <div className='MainDerecho-container'>
        
                    <MainDerechoEnlaces experienciaRef={experienciaRef} educacionRef={educacionRef} otrosEstudiosRef={otrosEstudiosRef} footerRef={footerRef}/>
                
               
                    <ProyectosDeDesarrolloWeb />
               
                
                    <div ref={experienciaRef}>
                      <ExperienciaProfesional />
                    </div>  
                   

                    <div ref={educacionRef}>
                      <Educacion />
                    </div>
                    
                    <div ref={otrosEstudiosRef}>
                      <OtrosEstudios/>
                    </div>
          
          </div>  
        </>
  )
}
