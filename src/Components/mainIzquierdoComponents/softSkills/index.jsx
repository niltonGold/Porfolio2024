import React from 'react';
import './styles.css';

export const SoftSkills = () => {
  return (
        <>
            <div className='SoftSkills-container'>
                
                  <div className='softskills-titulo'>SOFT SKILLLS</div>
                  
                  <div className='softskills-skills-container'>
                      
          
                            <div className='softskills-titulo-descripcion-container'> 
                                <div className='softskills-icono-titulo-container'>
                                    <div className='softskills-icono sofskill-organizacion' />
                                    <div className='softskill-titulo-descripcion softskill-titulo-descripcion-organizacionYgestion'>
                                        ORGANIZACIÓN Y GESTIÓN :
                                    </div>
                                    <div className='softskills-icono sofskill-organizacion' />
                                </div>
                                <div className='softskills-parrafo'>
                                    Excelentes habilidades para organizar y gestionar tareas y proyectos de manera eficiente.
                                </div>
                            </div>
                            
                            {/* --------------------------------------------------------------------------------  */}
                            
                            <div className='softskills-titulo-descripcion-container'>
                                <div className='softskills-icono-titulo-container'>
                                    <div className='softskills-icono sofskill-puntualidad' />
                                    <div className='softskill-titulo-descripcion softskill-titulo-descripcion-puntualidadAbsoluta'>
                                        PUNTUALIDAD ABSOLUTA:
                                    </div>
                                    <div className='softskills-icono sofskill-puntualidad' />
                                </div>
                                <div className='softskills-parrafo'>
                                    Siempre puntual y comprometido con la responsabilidad en todas las actividades.
                                </div>
                            </div>
              
                            {/* --------------------------------------------------------------------------------  */}
                            
                            <div className='softskills-titulo-descripcion-container'> 
                                <div className='softskills-icono-titulo-container'>
                                    <div className='softskills-icono sofskill-adaptabilidad' />
                                    <div className='softskill-titulo-descripcion softskill-titulo-descripcion-adaptabilidad_y_flexibilidad'>
                                        ADAPTABILIDAD Y FLEXIBILIDAD :
                                    </div>
                                    <div className='softskills-icono sofskill-adaptabilidad' />
                                </div>
                                <div className='softskills-parrafo'>
                                    Capacidad para adaptarme fácilmente a diferentes situaciones y entornos.
                                </div>
                            </div> 
              
          
                  </div>
            
            </div>
        </>
  )
}
