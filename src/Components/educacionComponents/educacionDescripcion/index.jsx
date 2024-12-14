import React from 'react';
import './styles.css';
import Box from '@mui/material/Box';

export const EducacionDescripcion = ( props ) => {
  return (
      <>
        {/* CONTAINER PRINCIPAL */}
        <div className='EducacionDescripcion_principal_container'>

                    {/* Container1 de nombre de la tituloDelCurso, fechaDelCurso que trabaje en la tituloDelCurso y localizacion de la tituloDelCurso */}
                    <div className='educacionDescripcion_datos_principales_de_la_tituloDelCurso'>
                            
                                {/*  Sub-Container1 de nombre de la tituloDelCurso, fechaDelCurso que trabaje en la tituloDelCurso y localizacion de la tituloDelCurso */}
                                <div className='educacionDescripcion_tituloDelCurso_fechaDelCurso_calle_container'>
                                        

                                            {/*  SubSub-Container1 icono tituloDelCurso, fechaDelCurso, localizacion + dato de cada icono */}
                                            <div className='educacionDescripcion_icono_dato_principal_container'>
                                                    
                                                    <div className='educacionDescripcion_icono educacionDescripcion_tituloDelCurso' />

                                                    <div className='educacionDescripcion_dato educacionDescripcion_fontweith1'>
                                                        <Box sx={{ fontFamily: 'Roboto', fontWeight: 900 }}> { props.tituloDelCurso } </Box>
                                                    </div>
                                            </div>
                                        
                                            {/*  SubSub-Container1 icono tituloDelCurso, fechaDelCurso, localizacion + dato de cada icono */}
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
                                                                    
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-tecnologiasAprendidas' />
                                                            
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

                                                                    {/* Fila 7 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila7 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila7 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 8 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila8 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila8 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 9 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila9 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila9 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 10 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila10 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila10 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 11 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila11 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila11 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 12 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila12 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila12 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 13 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila13 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila13 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 14 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila14 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila14 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 15 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila15 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila15 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 16 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila16 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila16 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 17 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila17 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila17 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 18 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila18 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila18 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 19 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila19 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila19 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 20 - Solo aparece si tecnologiasAprendidasFila6 tiene contenido */}
                                                                    { props.tecnologiasAprendidasFila20 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.tecnologiasAprendidasFila20 }
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

                                                                    {/* Fila 7 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila7 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila7 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 8 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila8 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila8 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 9 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila9 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila9 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 10 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila10 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila10 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 11 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila11 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila11 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 12 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila12 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila12 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 13 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila13 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila13 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 14 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila14 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila14 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 15 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila15 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila15 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 16 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila16 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila16 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 17 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila17 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila17 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 18 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila18 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila18 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 19 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila19 && (
                                                                        <div className='educacionDescripcion_parrafo'>
                                                                        { props.contenidoDelCursoFila19 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 20 - Solo aparece si contenidoDelCursoFila6 tiene contenido */}
                                                                    { props.contenidoDelCursoFila20 && (
                                                                        <div className='educacionDescripcion_parrafo'>
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
