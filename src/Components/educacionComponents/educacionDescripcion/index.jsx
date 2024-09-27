import React from 'react';
import './styles.css';

export const EducacionDescripcion = ( props ) => {
  return (
      <>
        {/* CONTAINER PRINCIPAL */}
        <div className='EducacionDescripcion_principal_container'>

                    {/* Container1 de nombre de la empresa, tiempo que trabaje en la empresa y localizacion de la empresa */}
                    <div className='educacionDescripcion_datos_principales_de_la_empresa'>
                            
                                {/*  Sub-Container1 de nombre de la empresa, tiempo que trabaje en la empresa y localizacion de la empresa */}
                                <div className='educacionDescripcion_empresa_tiempo_calle_container'>
                                        

                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            <div className='educacionDescripcion_icono_dato_principal_container'>
                                                    
                                                    <div className='educacionDescripcion_icono educacionDescripcion_empresa' />

                                                    <div className='educacionDescripcion_dato educacionDescripcion_fontweith1'>
                                                        { props.empresa }
                                                    </div>
                                            </div>
                                        
                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            <div className='educacionDescripcion_icono_dato_principal_container'>
                                                    <div className='educacionDescripcion_icono educacionDescripcion_tiempo' />

                                                    <div className='educacionDescripcion_dato educacionDescripcion_fontweith2'>
                                                        { props.tiempo }
                                                    </div>
                                            </div>
                                
                                            {/*  SubSub-Container1 icono empresa, tiempo, localizacion + dato de cada icono */}
                                            {/* <div className='educacionDescripcion_icono_dato_principal_container'>
                                                    <div className='educacionDescripcion_icono educacionDescripcion_calle' />

                                                    <div className='educacionDescripcion_dato educacionDescripcion_fontweith3'>
                                                        { props.calle }
                                                    </div>
                                            </div> */}
                                

                                </div>

                    </div>

                    {/* ----------------------------------------------------------------------------------------------- */}
                
                    {/* Container2 de Descripcion del puesto, Competencias potenciadas o desarrolladas, Logros, Lo que aprendí */}
                    <div className='educacionDescripcion_descripcion_del_trabajo_container'>
                        
                                {/* Sub-Container2 de Descripciones */}
                                <div className='educacionDescripcion_titulo_descripcion_container'>

                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='educacionDescripcion_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='educacionDescripcion_icono_titulo_descripcion_icono_container'>
                                                            
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-descripcion' />
                                                                
                                                                    <div  className='educacionDescripcion_dato educacionDescripcion_descripcion_titulo_fontweith'>
                                                                        Horas de Clases Impartidas:  
                                                                    </div>
                                                                
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-descripcion' />
                                                            
                                                        </div>
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='educacionDescripcion_icono_descripcion_parrafo_container'>

                                                                    <div className='educacionDescripcion_parrafo'>
                                                                        { props.descripcion }
                                                                    </div>

                                                        </div>
                                                

                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='educacionDescripcion_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='educacionDescripcion_icono_titulo_descripcion_icono_container'>
                                                            
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-competencias' />
                                                                    
                                                                    <div className='educacionDescripcion_dato educacionDescripcion_descripcion_titulo_fontweith'>
                                                                        Tecnologías Aprendidas: 
                                                                    </div>
                                                                    
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-competencias' />
                                                            
                                                        </div>
                                                        

                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='educacionDescripcion_icono_descripcion_parrafo_container'>

                                                                    <div className='educacionDescripcion_parrafo'>
                                                                        { props.competencia }
                                                                    </div>

                                                        </div>
                                                

                                            </div>
                                            
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            <div className='educacionDescripcion_titulo_descripcion_fila_container'>
                                                

                                                        {/* SubSubSub-Container2 de icono titulo icono */}
                                                        <div className='educacionDescripcion_icono_titulo_descripcion_icono_container'>
                                                              
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-logros' />
                                                                    
                                                                    <div className='educacionDescripcion_dato educacionDescripcion_descripcion_titulo_fontweith'>
                                                                        Contenido del Curso: 
                                                                    </div>
                                                                    
                                                                    <div className='educacionDescripcion_icono educacionDescripcion-icono-logros' />
                                                        
                                                        </div>


                                                        {/* SubSubSub-Container2 del parrafo de las descripciones */}
                                                        <div className='educacionDescripcion_icono_descripcion_parrafo_container'>

                                                                    <div className='educacionDescripcion_parrafo'>
                                                                        { props.logros }
                                                                    </div>

                                                        </div>
                                                
                                            </div>
                                        
                                            {/* SubSub-Container2 de icono titulo y descripcion */}
                                            {/* <div className='educacionDescripcion_titulo_descripcion_fila_container'>
                                                

                                                        SubSubSub-Container2 de icono titulo icono
                                                        <div className='educacionDescripcion_icono_titulo_descripcion_icono_container'>
                                                            
                                                                    <div className='educacionDescripcion_icono educacionDescripcion_aprendi' />
                                                                    
                                                                    <div className='educacionDescripcion_dato educacionDescripcion_descripcion_titulo_fontweith'>
                                                                        Lo que aprendí: 
                                                                    </div>
                                                                    
                                                                    <div className='educacionDescripcion_icono educacionDescripcion_aprendi' />
                                                            
                                                        </div>
                                                        

                                                        SubSubSub-Container2 del parrafo de las descripciones
                                                        <div className='educacionDescripcion_icono_descripcion_parrafo_container'>

                                                                    <div className='educacionDescripcion_parrafo'>
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
