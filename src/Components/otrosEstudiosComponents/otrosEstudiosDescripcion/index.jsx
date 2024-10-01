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

                                                                    {/* Fila 1 - Siempre tiene contenido */}
                                                                    <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila1 }
                                                                    </div>
                                                                    
                                                                    {/* Fila 2 - Solo aparece si tecnologiasAprendidasfila2 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila2 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila2 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 3 - Solo aparece si tecnologiasAprendidasfila3 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila3 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila3 }
                                                                        </div>
                                                                    )}
                              
                                                                    {/* Fila 4 - Solo aparece si tecnologiasAprendidasfila4 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila4 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila4 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 5 - Solo aparece si tecnologiasAprendidasfila5 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila5 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila5 }
                                                                        </div>
                                                                    )}
                                                                    
                                                                    {/* Fila 6 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila6 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila6 }
                                                                        </div>
                                                                    )}
                                                                    
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

                                                                    {/* Fila 1 - Siempre tiene contenido */}
                                                                    <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila1 }
                                                                    </div>
                                                                    
                                                                    {/* Fila 2 - Solo aparece si contenidoDelCursoFila2 tiene contenido */}
                                                                    { props.contenidoDelCursoFila2 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila2 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 3 - Solo aparece si contenidoDelCursoFila3 tiene contenido */}
                                                                    { props.contenidoDelCursoFila3 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila3 }
                                                                        </div>
                                                                    )}
                              
                                                                    {/* Fila 4 - Solo aparece si contenidoDelCursoFila4 tiene contenido */}
                                                                    { props.contenidoDelCursoFila4 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila4 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 5 - Solo aparece si contenidoDelCursoFila5 tiene contenido */}
                                                                    { props.contenidoDelCursoFila5 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila5 }
                                                                        </div>
                                                                    )}
                                                                    
                                                                    {/* Fila 6 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila6 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila6 }
                                                                        </div>
                                                                    )}
                                                                    
                                                        </div>
                                                
                                            </div>

                                </div>

                    </div>

        
        </div>
      
      
      </>
  )
}
