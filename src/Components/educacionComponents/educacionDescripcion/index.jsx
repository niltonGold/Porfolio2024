import React from 'react';
import './styles.css';
import Box from '@mui/material/Box';

export const EducacionDescripcion = ( props ) => {
  return (
      <>
        {/* CONTAINER PRINCIPAL */}
        <div className='EducacionDescripcion_principal_container'>

                    {/* Container1 de nombre de la centroEducativo, fechaDelCurso que trabaje en la centroEducativo y localizacion de la centroEducativo */}
                    <div className='educacionDescripcion_datos_principales_de_la_centroEducativo'>
                            
                                {/*  Sub-Container1 de nombre de la centroEducativo, fechaDelCurso que trabaje en la centroEducativo y localizacion de la centroEducativo */}
                                <div className='educacionDescripcion_centroEducativo_fechaDelCurso_calle_container'>
                                        

                                            {/*  SubSub-Container1 icono centroEducativo, fechaDelCurso, localizacion + dato de cada icono */}
                                            <div className='educacionDescripcion_icono_dato_principal_container'>
                                                    
                                                    <div className='educacionDescripcion_icono educacionDescripcion_centroEducativo' />

                                                    <div className='educacionDescripcion_dato educacionDescripcion_fontweith1'>
                                                        <Box sx={{ fontFamily: 'Roboto', fontWeight: 900 }}> { props.centroEducativo } </Box>
                                                    </div>
                                            </div>
                                        
                                            {/*  SubSub-Container1 icono centroEducativo, fechaDelCurso, localizacion + dato de cada icono */}
                                            <div className='educacionDescripcion_icono_dato_principal_container'>
                                                    <div className='educacionDescripcion_icono educacionDescripcion_fechaDelCurso' />

                                                    <div className='educacionDescripcion_dato educacionDescripcion_fontweith2'>
                                                        <Box sx={{ fontFamily: 'Roboto', fontWeight: 500 }}> { props.fechaDelCurso } </Box>
                                                    </div>
                                            </div>
                                

                                </div>

                    </div>

                    {/* ----------------------------------------------------------------------------------------------- */}
                
                    {/* Container2 de horasDeClasesImparti das del puesto, tecnologiasAprendidass potenciadas o desarrolladas, contenidoDelCurso, Lo que aprendí */}
                    <div className='educacionDescripcion_del_trabajo_container'>
                        
                                {/* Sub-Container2 de horasDeClasesImpartid ases */}
                                <div className='educacionDescripcion_titulo_container'>

                                            {/* SubSub-Container2 de icono titulo y horasDeClasesImparti das */}
                                            <div className='educacionDescripcion_titulo_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='educacionDescripcion_icono_titulo_icono_container'>
                                                            
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-tiempo' />
                                                                
                                                                    <div  className='educacionDescripcion_dato educacionDescripcion_titulo_fontweith'>
                                                                        Horas de Clases Impartidas:
                                                                    </div>
                                                                
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-tiempo' />
                                                            
                                                        </div>
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de las horasDeClasesImparti dases */}
                                                        <div className='educacionDescripcion_icono_parrafo_container'>

                                                                    {/* Fila 1 - Siempre tiene contenido */}
                                                                    <div className='educacionDescripcion_parrafo'>
                                                                        { props.horasDeClasesImpartidasFila1 }
                                                                    </div>

                                                        </div>
                                                

                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y */}
                                            <div className='educacionDescripcion_titulo_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='educacionDescripcion_icono_titulo_icono_container'>
                                                            
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-tecnologiasAprendidas' />
                                                                    
                                                                    <div className='educacionDescripcion_dato educacionDescripcion_titulo_fontweith'>
                                                                        Tecnologías Aprendidas: 
                                                                    </div>
                                                                    
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-tecnologiasAprendidass' />
                                                            
                                                        </div>
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de lases */}
                                                        <div className='educacionDescripcion_icono_parrafo_container'>

                                                                    {/* Fila 1 - Siempre tiene contenido */}
                                                                    <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila1 }
                                                                    </div>
                                                                    
                                                                    {/* Fila 2 - Solo aparece si tecnologiasAprendidasFila2 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila2 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila2 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 3 - Solo aparece si tecnologiasAprendidasFila3 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila3 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila3 }
                                                                        </div>
                                                                    )}
                              
                                                                    {/* Fila 4 - Solo aparece si tecnologiasAprendidasFila4 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila4 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila4 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 5 - Solo aparece si tecnologiasAprendidasFila5 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila5 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila5 }
                                                                        </div>
                                                                    )}
                                                                    
                                                                    {/* Fila 6 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila6 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila6 }
                                                                        </div>
                                                                    )}

                                                        </div>
                                                

                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y */}
                                            <div className='educacionDescripcion_titulo_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='educacionDescripcion_icono_titulo_icono_container'>
                                                              
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-contenidoDelCurso' />
                                                                    
                                                                    <div className='educacionDescripcion_dato educacionDescripcion_titulo_fontweith'>
                                                                        Contenido del Curso: 
                                                                    </div>
                                                                    
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-contenidoDelCurso' />
                                                        
                                                        </div>


                                                        {/* SubSubSub-Container2 del parrafo de lases */}
                                                        <div className='educacionDescripcion_icono_parrafo_container'>

                                                                    {/* Fila 1 - Siempre tiene contenido */}
                                                                    <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila1 }
                                                                    </div>
                                                                    
                                                                    
                                                                    {/* Fila 2 - Solo aparece si contenidoDelCursoFila2 tiene contenido */}
                                                                    { props.contenidoDelCursoFila2 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila2 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 3 - Solo aparece si contenidoDelCursoFila3 tiene contenido */}
                                                                    { props.contenidoDelCursoFila3 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila3 }
                                                                        </div>
                                                                    )}
                              
                                                                    {/* Fila 4 - Solo aparece si contenidoDelCursoFila4 tiene contenido */}
                                                                    { props.contenidoDelCursoFila4 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila4 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 5 - Solo aparece si contenidoDelCursoFila5 tiene contenido */}
                                                                    { props.contenidoDelCursoFila5 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila5 }
                                                                        </div>
                                                                    )}
                                                                    
                                                                    {/* Fila 6 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila6 && (
                                                                        <div className='educacionDescripcion_parrafo'>
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
