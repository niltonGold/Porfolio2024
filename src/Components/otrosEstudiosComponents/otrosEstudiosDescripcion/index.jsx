import React from 'react';
import './styles.css';


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

                                                                    {/* Fila 7 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila7 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila7 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 8 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila8 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila8 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 9 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila9 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila9 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 10 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila10 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila10 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 11 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila11 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila11 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 12 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila12 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila12 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 13 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila13 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila13 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 14 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila14 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila14 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 15 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila15 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila15 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 16 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila16 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila16 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 17 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila17 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila17 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 18 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila18 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila18 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 19 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila19 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila19 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 20 - Solo aparece si tecnologiasAprendidasfila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasfila20 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasfila20 }
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

                                                                    {/* Fila 7 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila7 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila7 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 8 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila8 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila8 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 9 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila9 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila9 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 10 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila10 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila10 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 11 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila11 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila11 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 12 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila12 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila12 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 13 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila13 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila13 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 14 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila14 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila14 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 15 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila15 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila15 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 16 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila16 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila16 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 17 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila17 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila17 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 18 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila18 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila18 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 19 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila19 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila19 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 20 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila20 && (
                                                                        <div className='otrosEstudiosDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila20 }
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
