import React from 'react';
import './styles.css';

export const Perfil = () => {
  return (
        <>
            <div className='Perfil-container'>
                
                  <div className='perfil-titulo'>PERFIL</div>
                  
                  <div className='perfil-parrafo-container'>
                      
                        <div className='perfil-titulo-descripcion-parrafo-container'>
                            <div className='perfil-titulo-descripcion'>
                                👦¿QUIÉN SOY?👦
                            </div>
                            <div className='perfil-parrafo'>
                                Soy Nilton Medina Sayan, un Full Stack Web Developer con experiencia
                                en crear y optimizar aplicaciones web. La tecnología siempre ha sido
                                mi pasión. Disfruto resolviendo desafíos complejos y creando soluciones
                                efectivas.
                            </div>
                        </div>
                        
                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='perfil-titulo-descripcion-parrafo-container'>
                            <div className='perfil-titulo-descripcion'>
                                💡¿QUÉ ME DIFERENCIA DE LOS DEMÁS? 💡
                            </div>
                            <div className='perfil-parrafo'>
                                  Me especializo en HTML, CSS, JavaScript y React JS. Tengo facilidad
                                  para aprender nuevas tecnologías y organizar proyectos con atención
                                  al detalle. Mi enfoque es siempre mejorar la calidad del producto final.
                            </div>
                        </div>
                                  
                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='perfil-titulo-descripcion-parrafo-container'>
                            <div className='perfil-titulo-descripcion'>
                                ⚒¿QUÉ PUEDO APORTAR?⚒
                            </div>
                            <div className='perfil-parrafo'>
                                Me enfoco en la eficiencia y en poner al usuario en el
                                centro de cada decisión. No solo escribo código, comprendo los
                                problemas que resuelvo. Soy proactivo en la búsqueda de soluciones
                                innovadoras.
                            </div>
                        </div>
                                  
                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='perfil-titulo-descripcion-parrafo-container'>
                            <div className='perfil-titulo-descripcion'>
                                 🔎¿CUALES SON MIS INTERESES?🔍
                            </div>
                            <div className='perfil-parrafo'>
                                  Me interesa la inteligencia artificial y quiero crecer en una empresa
                                  que valore la innovación. También disfruto explorando nuevas
                                  herramientas y metodologías en desarrollo web.
                            </div>
                        </div>
            
                  </div>
            
            </div>
        </>
  )
}
