import React from 'react';
import './styles.css';


import ProyectosCarrusel from '../../proyectosDeDesarrolloWebComponents/proyectosCarrusel';

export const ProyectosDeDesarrolloWeb = () => {
  return (
    <>
      <div>
          <div className='ProyectosDeDesarrolloWeb-container'>
            
            <div className='proyectosdedesarrolloweb-titulo'>
                PROYECTOS DE DESARROLLO WEB
            </div>
            <div className='proyectosdedesarrolloweb-lista-carrusel'>
                <ProyectosCarrusel />
            </div>
       
        </div>
        
        </div>
        </>
  )
}
