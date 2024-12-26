import React from 'react';
import './styles.css';





export const Perfil = () => {
  return (
        <>
            <div className='Perfil-container'>
                
                  <div className='perfil-titulo'>PERFIL</div>
                  
                  <div className='perfil-parrafo-container'>
                      
                        <div className='perfil-titulo-descripcion-parrafo-container'>
                            <div className='perfil-icono-titulo-descripcion-icono-container'>
                                <div className='perfil-titulo-icono'>👦</div>
                                <div className='perfil-titulo-descripcion'> ¿QUIÉN SOY? </div>
                                <div className='perfil-titulo-icono'>👦</div>
                            </div>
                            <div className='perfil-parrafo'>
                                Soy Nilton Medina Sayan, Full Stack Web Developer especializado en HTML, 
                                CSS, JavaScript y React JS. Apasionado por la tecnología, disfruto 
                                resolviendo desafíos y creando soluciones de calidad con atención al 
                                detalle.
                            </div>
                        </div>

                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='perfil-titulo-descripcion-parrafo-container'>
                            <div className='perfil-icono-titulo-descripcion-icono-container'>
                                <div className='perfil-titulo-icono-quePuedoAportar perfil-titulo-icono'>⚒</div>
                                <div className='perfil-titulo-descripcion perfil-titulo-descripcion-quePuedoAportar'>¿QUÉ PUEDO APORTAR?</div>
                                <div className='perfil-titulo-icono-quePuedoAportar perfil-titulo-icono'>⚒</div>
                            </div>
                            <div className='perfil-parrafo'>
                                Me enfoco en la eficiencia y en el usuario como prioridad. 
                                Combino aprendizaje rápido y organización para ofrecer soluciones 
                                innovadoras que generan impacto.
                            </div>
                        </div>
                                  
                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='perfil-titulo-descripcion-parrafo-container'>
                            <div className='perfil-icono-titulo-descripcion-icono-container'>
                                <div className='perfil-titulo-icono'>🔎</div>
                                <div className='perfil-titulo-descripcion perfil-titulo-descripcion-cualesSonMisIntereses'>¿CUALES SON MIS INTERESES?</div>
                                <div className='perfil-titulo-icono'>🔍</div>
                            </div>
                            <div className='perfil-parrafo'>
                                Me interesa la inteligencia artificial y el desarrollo web. 
                                Busco crecer en una empresa que valore la innovación y explorar 
                                nuevas herramientas y metodologías.
                            </div>
                        </div>
            
                  </div>
            
            </div>
        </>
  )
}
