import React from 'react';
import './styles.css';

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
                                                        { props.empresa }
                                                    </div>
                                            </div>
                                        
                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            <div className='experienciaprofecional_icono_dato_principal_container'>
                                                    <div className='experienciaprofecional_icono experienciaprofecional_tiempo' />

                                                    <div className='experienciaprofecional_dato experienciaprofesional_fontweith2'>
                                                        { props.tiempo }
                                                    </div>
                                            </div>
                                
                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            <div className='experienciaprofecional_icono_dato_principal_container'>
                                                    <div className='experienciaprofecional_icono experienciaprofecional_calle' />

                                                    <div className='experienciaprofecional_dato experienciaprofesional_fontweith3'>
                                                        { props.calle }
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

                                                            <div className='experienciaprofecional_parrafo experienciaprofecional_parrafo_font'>
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
                                                        
                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='experienciaprofecional_icono_descripcion_parrafo_container'>
                                                                
                                                                    <div className='experienciaprofecional_parrafo experienciaprofecional_parrafo_font'>
                                                                        { props.competencia }
                                                                    </div>
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
