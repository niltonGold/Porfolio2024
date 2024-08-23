import React from 'react';
import './styles.css';

export const Idiomas = () => {
  return (
        <>
            <div className='Idiomas-container'>
                
                  <div className='idiomas-titulo'>IDIOMAS</div>
                  
                  <div className='idiomas-all-container'>
                        
            
                            <div className='idiomas-titulo-descripcion-container'> 
                                <div className='idiomas-icono-titulo-container'>
                                    <div className='idiomas-icono idiomas-espanol' />
                                    <div className='idiomas-titulo-lengua'>ESPAÑOL :</div>
                                    <div className='idiomas-icono idiomas-espanol' />
                                </div>
                                <div className='idiomas-parrafo'>
                                    Excelentes habilidades para organizar y gestionar tareas y proyectos de manera eficiente.
                                </div>
                            </div>
                          
                          {/* --------------------------------------------------------------------------------  */}
                          
                            <div className='idiomas-titulo-descripcion-container'> 
                                <div className='idiomas-icono-titulo-container'>
                                    <div className='idiomas-icono idiomas-ingles' />
                                    <div className='idiomas-titulo-lengua'>INGLÉS :</div>
                                    <div className='idiomas-icono idiomas-ingles' />
                                </div>
                                <div className='idiomas-parrafo'>
                                    Excelentes habilidades para organizar y gestionar tareas y proyectos de manera eficiente.
                                </div>
                            </div>


                  </div>
            
            </div>
        </>
  )
}
