import React from 'react';
import './styles.css';

export const ExperienciaConcurso = ( props ) => {
  return (
      <>
      
        <div className='Experienciaprofecional_principal_container'>

            <div className='experienciaprofecional_datos_principales_de_la_empresa'>
                
                <div className='experienciaprofecional_vacio' />
                    
                <div className='experienciaprofecional_empresa_tiempo_calle_container'>
                        
                        <div className='experienciaprofecional_icono_dato_principal_container'>
                                <div className='experienciaprofecional_icono experienciaprofecional_empresa' />

                                <div className='experienciaprofecional_dato experienciaprofecional_titulo_datos_principales_size experienciaprofesional_fontweith1'>
                                    { props.empresa }
                                </div>
                        </div>
                    
                        <div className='experienciaprofecional_icono_dato_principal_container'>
                                <div className='experienciaprofecional_icono experienciaprofecional_tiempo' />

                                <div className='experienciaprofecional_dato experienciaprofecional_titulo_datos_principales_size experienciaprofesional_fontweith2'>
                                    { props.tiempo }
                                </div>
                        </div>
            
                        <div className='experienciaprofecional_icono_dato_principal_container'>
                                <div className='experienciaprofecional_icono experienciaprofecional_calle' />

                                <div className='experienciaprofecional_dato experienciaprofecional_titulo_datos_principales_size experienciaprofesional_fontweith3'>
                                    { props.calle }
                                </div>
                        </div>
                
                </div>

            </div>

              {/* ----------------------------------------------------------------------------------------------- */}
        
            <div className='experienciaprofecional_vacio_descripcion_del_trabajo_container'>
                
                <div>
                    <div className='experienciaprofecional_vacio' />
                </div>
                
                <div>
                    <div className='experienciaprofecional_vacio' />
                </div>
                
                <div className='experienciaprofecional_titulo_descripcion_container'>

                        

                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                
                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                            <div>
                                                <div className='experienciaprofecional_icono experienciaprofecional-icono-descripcion' />
                                            </div>
                                            <div  className='experienciaprofecional_descripcion_titulo experienciaprofesional_descripcion_titulo_fontweith experienciaprofesional_descripcion_competencias'>
                                                Descripcón del puesto:  
                                            </div>
                                            <div>
                                                <div className='experienciaprofecional_icono experienciaprofecional-icono-descripcion' />
                                            </div>
                                        </div>
                                        
                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>
                                            <div >
                                                <div className='experienciaprofecional_vacio' />
                                            </div>
                                            <div className='experienciaprofecional_parrafo experienciaprofecional_parrafo_font'>
                                                { props.descripcion }
                                            </div>
                                        </div>
                                
                            </div>
                            
                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                
                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                        <div>
                                            <div className='experienciaprofecional_icono experienciaprofecional-icono-competencias' />
                                        </div>
                                        <div className='experienciaprofecional_descripcion_titulo experienciaprofesional_descripcion_titulo_fontweith experienciaprofesional_descripcion_competencias'>
                                            Competencias potenciadas o desarrolladas: 
                                        </div>
                                        <div>
                                            <div className='experienciaprofecional_icono experienciaprofecional-icono-competencias' />
                                        </div>
                                        </div>
                                        
                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>
                                            <div>
                                                <div className='experienciaprofecional_vacio' />
                                            </div>
                                            <div className='experienciaprofecional_parrafo experienciaprofecional_parrafo_font'>
                                            { props.competencia }
                                            </div>
                                        </div>
                                
                            </div>
                            
                            <div className='experienciaprofecional_titulo_descripcion_fila_container'>
                                
                                        <div className='experienciaprofecional_icono_titulo_descripcion_icono_container'>
                                        <div>
                                            <div className='experienciaprofecional_icono experienciaprofecional-icono-desafio' />
                                        </div>
                                        <div className='experienciaprofecional_descripcion_titulo experienciaprofesional_descripcion_titulo_fontweith'>
                                            En que consistía el desafío: 
                                        </div>
                                        <div>
                                            <div className='experienciaprofecional_icono experienciaprofecional-icono-desafio' />
                                        </div>
                                        </div>
                                        
                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>
                                            <div>
                                                <div className='experienciaprofecional_vacio' />
                                            </div>
                                            <div className='experienciaprofecional_parrafo experienciaprofecional_parrafo_font'>
                                                { props.desafio }
                                            </div>
                                        </div>
                                
                            </div>
                        
                            

                
                </div>

            </div>

        
        </div>
      
      
      </>
  )
}
