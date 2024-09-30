import React from 'react';
import './styles.css';
import Box from '@mui/material/Box';

export const OtrosEstudiosDescripcion = ( props ) => {
  return (
      <>
        {/* CONTAINER PRINCIPAL */}
        <div className='OtrosEstudiosDescripcion_principal_container'>

                    

                    {/* ----------------------------------------------------------------------------------------------- */}
                
                    {/* Container2 de Descripcion del puesto, Competencias potenciadas o desarrolladas, Logros, Lo que aprendí */}
                    <div className='otrosEstudiosDescripcion_descripcion_del_trabajo_container'>
                        
                                {/* Sub-Container2 de Descripciones */}
                                <div className='otrosEstudiosDescripcion_titulo_descripcion_container'>

                                            
                                            
                                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='otrosEstudiosDescripcion_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='otrosEstudiosDescripcion_icono_titulo_descripcion_icono_container'>
                                                            
                                                                    <div className='otrosEstudiosDescripcion_icono otrosEstudiosDescripcion-icono-competencias' />
                                                                    
                                                                    <div className='otrosEstudiosDescripcion_dato otrosEstudiosDescripcion_descripcion_titulo_fontweith'>
                                                                        Tecnologías Aprendidas: 
                                                                    </div>
                                                                    
                                                                    <div className='otrosEstudiosDescripcion_icono otrosEstudiosDescripcion-icono-competencias' />
                                                            
                                                        </div>
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='otrosEstudiosDescripcion_icono_descripcion_parrafo_container'>

                                                                    <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.competencia }
                                                                    </div>

                                                        </div>
                                                

                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='otrosEstudiosDescripcion_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='otrosEstudiosDescripcion_icono_titulo_descripcion_icono_container'>
                                                              
                                                                    <div className='otrosEstudiosDescripcion_icono otrosEstudiosDescripcion-icono-logros' />
                                                                    
                                                                    <div className='otrosEstudiosDescripcion_dato otrosEstudiosDescripcion_descripcion_titulo_fontweith'>
                                                                        Contenido del Curso: 
                                                                    </div>
                                                                    
                                                                    <div className='otrosEstudiosDescripcion_icono otrosEstudiosDescripcion-icono-logros' />
                                                        
                                                        </div>


                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='otrosEstudiosDescripcion_icono_descripcion_parrafo_container'>

                                                                    <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.logros }
                                                                    </div>

                                                        </div>
                                                
                                            </div>
                                        
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            {/* <div className='otrosEstudiosDescripcion_titulo_descripcion_fila_container'>
                                                

                                                        SubSubSub-Container2 de icono titulo icono
                                                        <div className='otrosEstudiosDescripcion_icono_titulo_descripcion_icono_container'>
                                                            
                                                                    <div className='otrosEstudiosDescripcion_icono otrosEstudiosDescripcion_aprendi' />
                                                                    
                                                                    <div className='otrosEstudiosDescripcion_dato otrosEstudiosDescripcion_descripcion_titulo_fontweith'>
                                                                        Lo que aprendí: 
                                                                    </div>
                                                                    
                                                                    <div className='otrosEstudiosDescripcion_icono otrosEstudiosDescripcion_aprendi' />
                                                            
                                                        </div>
                                                        

                                                        SubSubSub-Container2 del parrafo de las descripciones
                                                        <div className='otrosEstudiosDescripcion_icono_descripcion_parrafo_container'>

                                                                    <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.aprendi }
                                                                    </div>

                                                        </div>
                                                

                                            </div> */}

                                
                                </div>

                    </div>

        
        </div>
      
      
      </>
  )
}
