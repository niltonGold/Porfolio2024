import React from 'react';
import './styles.css';
import Box from '@mui/material/Box';

export const ExperienciaConcurso = ( props ) => {
  return (
      <>
      
        {/* CONTAINER PRINCIPAL */}
        <div className='Experienciaprofecional_principal_container'>

                    {/* Container1 de nombre de la empresa, tiempo que trabaje en la empresa y localizacion de la empresa */}
                    <div className='experienciaprofecional_datos_principales_de_la_empresa'>
                            
                                {/*  Sub-Container1 de nombre de la empresa, tiempo que trabaje en la empresa y localizacion de la empresa */}
                                <div className='experienciaprofecional_empresa_tiempo_calle_container'>
                                        

                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            <div className='experienciaprofecional_icono_dato_principal_container'>
                                                    <div className='experienciaprofecional_icono experienciaprofecional_empresa' />

                                                    <div className='experienciaprofecional_dato experienciaprofesional_fontweith1'>
                                                        <Box sx={{ fontFamily: 'Roboto', fontWeight: 900 }}> { props.empresa } </Box>
                                                    </div>
                                            </div>
                                        
                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            <div className='experienciaprofecional_icono_dato_principal_container'>
                                                    <div className='experienciaprofecional_icono experienciaprofecional_tiempo' />

                                                    <div className='experienciaprofecional_dato experienciaprofesional_fontweith2'>
                                                        <Box sx={{ fontFamily: 'Roboto', fontWeight: 500 }}> { props.tiempo } </Box>
                                                    </div>
                                            </div>
                                
                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            <div className='experienciaprofecional_icono_dato_principal_container'>
                                                    <div className='experienciaprofecional_icono experienciaprofecional_calle' />

                                                    <div className='experienciaprofecional_dato experienciaprofesional_fontweith3'>
                                                        <Box sx={{ fontFamily: 'Roboto', fontWeight: 300 }}> { props.calle } </Box>
                                                    </div>
                                            </div>
                                

                                </div>

                    </div>

                    {/* ----------------------------------------------------------------------------------------------- */}
        
                    {/* Container2 de Descripcion del puesto, Competencias potenciadas o desarrolladas, Logros, Lo que aprendí */}
                    <div className='experienciaprofecional_descripcion_del_trabajo_container'>
                        
                                {/* Sub-Container2 de Descripciones */}
                                <div className='experienciaprofecional_titulo_descripcion_container'>

                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                                        
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-descripcion' />
                                                                
                                                                    <div  className='experienciaprofecional_dato experienciaprofesional_descripcion_titulo_fontweith'>
                                                                        Descripcón del puesto:  
                                                                    </div>
                                                            
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-descripcion' />
                                                            
                                                        </div>
                                                        
                                
                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>
                                                            
                                                            {/* Fila 1 - Siempre tiene contenido */}
                                                            <div className='experienciaprofecional_parrafo'>
                                                                { props.descripcionFila1 }
                                                            </div>
                                                            
                                                            {/* Fila 2 - Solo aparece si descripcionFila2 tiene contenido */}
                                                            { props.descripcionFila2 && (
                                                                <div className='experienciaprofecional_parrafo'>
                                                                { props.descripcionFila2 }
                                                                </div>
                                                            )}

                                                            {/* Fila 3 - Solo aparece si descripcionFila3 tiene contenido */}
                                                            { props.descripcionFila3 && (
                                                                <div className='experienciaprofecional_parrafo'>
                                                                { props.descripcionFila3 }
                                                                </div>
                                                            )}
                        
                                                            {/* Fila 4 - Solo aparece si descripcionFila4 tiene contenido */}
                                                            { props.descripcionFila4 && (
                                                                <div className='experienciaprofecional_parrafo'>
                                                                { props.descripcionFila4 }
                                                                </div>
                                                            )}

                                                            {/* Fila 5 - Solo aparece si descripcionFila5 tiene contenido */}
                                                            { props.descripcionFila5 && (
                                                                <div className='experienciaprofecional_parrafo'>
                                                                { props.descripcionFila5 }
                                                                </div>
                                                            )}
                                                            
                                                            {/* Fila 6 - Solo aparece si descripcionFila6 tiene contenido */}
                                                            { props.descripcionFila6 && (
                                                                <div className='experienciaprofecional_parrafo'>
                                                                { props.descripcionFila6 }
                                                                </div>
                                                            )}
                                                            
                                                        </div>
                                                
                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                                
                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                                        
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-competencias' />
                                                                
                                                                    <div className='experienciaprofecional_dato experienciaprofesional_descripcion_titulo_fontweith experienciaprofesional_descripcion_competencias'>
                                                                        Competencias potenciadas o desarrolladas: 
                                                                    </div>
                                                                
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-competencias' />
                                                        
                                                        </div>
                                                        
                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>
                                                                
                                                                     {/* Fila 1 - Siempre tiene contenido */}
                                                                    <div className='experienciaprofecional_parrafo'>
                                                                        { props.competenciaFila1 }
                                                                    </div>

                                                                    {/* Fila 2 - Solo aparece si competenciaFila2 tiene contenido */}
                                                                    { props.competenciaFila2 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.competenciaFila2 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 3 - Solo aparece si competenciaFila3 tiene contenido */}
                                                                    { props.competenciaFila3 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.competenciaFila3 }
                                                                        </div>
                                                                    )}
                              
                                                                    {/* Fila 4 - Solo aparece si competenciaFila4 tiene contenido */}
                                                                    { props.competenciaFila4 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.competenciaFila4 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 5 - Solo aparece si competenciaFila5 tiene contenido */}
                                                                    { props.competenciaFila5 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.competenciaFila5 }
                                                                        </div>
                                                                    )}
                                                                    
                                                                    {/* Fila 6 - Solo aparece si competenciaFila6 tiene contenido */}
                                                                    { props.competenciaFila6 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.competenciaFila6 }
                                                                        </div>
                                                                    )}
                                                                    
                                                        </div>
                                                
                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                                
                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                                        
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-desafio' />
                                                                
                                                                    <div className='experienciaprofecional_dato experienciaprofesional_descripcion_titulo_fontweith'>
                                                                        En que consistía el desafío: 
                                                                    </div>
                                                                
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-desafio' />
                                                    
                                                        </div>
                                                        
                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>

                                                                     {/* Fila 1 - Siempre tiene contenido */}
                                                                    <div className='experienciaprofecional_parrafo'>
                                                                        { props.desfioFila1 }
                                                                    </div>

                                                                    {/* Fila 2 - Solo aparece si desfioFila2 tiene contenido */}
                                                                    { props.desfioFila2 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.desfioFila2 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 3 - Solo aparece si desfioFila3 tiene contenido */}
                                                                    { props.desfioFila3 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.desfioFila3 }
                                                                        </div>
                                                                    )}
                              
                                                                    {/* Fila 4 - Solo aparece si desfioFila4 tiene contenido */}
                                                                    { props.desfioFila4 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.desfioFila4 }
                                                                        </div>
                                                                    )}

                                                                    {/* Fila 5 - Solo aparece si desfioFila5 tiene contenido */}
                                                                    { props.desfioFila5 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.desfioFila5 }
                                                                        </div>
                                                                    )}
                                                                    
                                                                    {/* Fila 6 - Solo aparece si desfioFila6 tiene contenido */}
                                                                    { props.desfioFila6 && (
                                                                        <div className='experienciaprofecional_parrafo'>
                                                                        { props.desfioFila6 }
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
