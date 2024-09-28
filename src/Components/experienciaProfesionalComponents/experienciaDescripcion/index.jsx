import React from 'react';
import './styles.css';
import Box from '@mui/material/Box';

export const ExperienciaDescripcion = ( props ) => {
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
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>

                                                                    <div className='experienciaprofecional_parrafo'>
                                                                        { props.descripcion }
                                                                    </div>

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
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>

                                                                    <div className='experienciaprofecional_parrafo'>
                                                                        { props.competencia }
                                                                    </div>

                                                        </div>
                                                

                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                                              
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-logros' />
                                                                    
                                                                    <div className='experienciaprofecional_dato experienciaprofesional_descripcion_titulo_fontweith'>
                                                                        Logros: 
                                                                    </div>
                                                                    
                                                                    <div className='experienciaprofecional_icono experienciaprofecional-icono-logros' />
                                                        
                                                        </div>


                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>

                                                                    <div className='experienciaprofecional_parrafo'>
                                                                        { props.logros }
                                                                    </div>

                                                        </div>
                                                
                                            </div>
                                        
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                                            
                                                                    <div className='experienciaprofecional_icono experienciaprofecional_aprendi' />
                                                                    
                                                                    <div className='experienciaprofecional_dato experienciaprofesional_descripcion_titulo_fontweith'>
                                                                        Lo que aprendí: 
                                                                    </div>
                                                                    
                                                                    <div className='experienciaprofecional_icono experienciaprofecional_aprendi' />
                                                            
                                                        </div>
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>

                                                                    <div className='experienciaprofecional_parrafo'>
                                                                        { props.aprendi }
                                                                    </div>

                                                        </div>
                                                

                                            </div>

                                
                                </div>

                    </div>

        
        </div>
      
      
      </>
  )
}
