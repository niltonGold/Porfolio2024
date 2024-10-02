import React from 'react';
import './styles.css';

export const Contacto = () => {

    const phoneNumber = "34650347741"; // Número de teléfono con el código del país (34 para España en este caso)
    const message = "Hola Nilton me gustaría ponerme en contacto contigo";
    const email = "niltonenrique3000@hotmail.com";

    const handleWhatsAppClick = () => {
        // Crear la URL con el número y el mensaje
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        // Redirigir a la URL de WhatsApp
        window.open(whatsappURL, "_blank");
    };

    const handleEmailClick = () => {
        navigator.clipboard.writeText(email);
        alert('Correo copiado al portapapeles');
    };

    const handleLinkedinClick = () => {
        const linkedinURL = "https://www.linkedin.com/in/nilton-medina/";
        window.open(linkedinURL, "_blank");
    };

  return (
        <>
            <div className='Contacto-container'>
                
                  <div className='contacto-titulo'>CONTACTO</div>
                  
                  <div className='contacto-parrafo-container'>
                      
                        {/* Contenedor de WhatsApp */}
                        <div className='contacto-icono-descripcion-container contacto-icono-descripcion-container-telefono' onClick={handleWhatsAppClick} >
                            <div className="contactoTooltip">Enviar Mensaje</div>
                            <div className='contacto-icono contacto-telefono' />
                            <div className='contacto-descripcion'>
                                650347741
                            </div>
                        </div>
                        
                        {/* --------------------------------------------------------------------------------  */}
                        
                        {/* Contenedor de correo */}
                        <div className='contacto-icono-descripcion-container contacto-icono-descripcion-container-mail' onClick={handleEmailClick}>
                            <div className="contactoTooltip">Click Para Copiar</div>
                            <div className='contacto-icono contacto-correo'/>
                            <div className='contacto-descripcion'>
                                <div>niltonenrique3000</div>
                                <div>@hotmail.com</div>
                            </div>
                        </div>
                                  
                        {/* --------------------------------------------------------------------------------  */}
                        
                        <div className='contacto-icono-descripcion-container contacto-icono-descripcion-container-linkedin' onClick={handleLinkedinClick}>
                            <div className="contactoTooltip">Abrir Linkedin</div>
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
