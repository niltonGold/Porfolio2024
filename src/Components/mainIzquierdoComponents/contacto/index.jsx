import React from 'react';
import './styles.css';

export const Contacto = () => {
  return (
        <>
            <div className='Contacto-container'>
                
                  <div className='contacto-titulo'>CONTACTO</div>
                  
                  <div className='contacto-parrafo-container'>
                      
                        <div className='contacto-icono-descripcion-container'>
                            <div className='contacto-icono contacto-telefono'/>
                            <div className='contacto-descripcion'>
                                650347741
                            </div>
                        </div>
                        
                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='contacto-icono-descripcion-container'>
                            <div className='contacto-icono contacto-correo'/>
                            <div className='contacto-descripcion'>
                                <div>niltonenrique3000</div>
                                <div>@hotmail.com</div>
                            </div>
                        </div>
                                  
                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='contacto-icono-descripcion-container'>
                            <div className='contacto-icono contacto-linkedin'/>
                            <div className='contacto-descripcion'>
                                linkedin
                            </div>
                        </div>
                                  
                  </div>
            
            </div> 
        </>
  )
}
