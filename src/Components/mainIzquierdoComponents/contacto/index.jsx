// import React, { useState } from 'react';
// import './styles.css';

// export const Contacto = () => {
//     const [tooltipVisible, setTooltipVisible] = useState(true); 
//     const phoneNumber = "34650347741"; 
//     const message = "Hola Nilton me gustaría ponerme en contacto contigo";
//     const email = "niltonenrique3000@hotmail.com";

//     const handleClick = () => {
//         setTooltipVisible(false);
//         setTimeout(() => setTooltipVisible(true), 100); 

//         const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
//         window.open(whatsappURL, "_blank");
//     };

//     const handleWhatsAppClick = () => {
//         const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
//         window.open(whatsappURL, "_blank");
//     };

//     const handleEmailClick = () => {
//         navigator.clipboard.writeText(email);
//         alert('Correo copiado al portapapeles');
//     };

//     const handleLinkedinClick = () => {
//         const linkedinURL = "https://www.linkedin.com/in/nilton-medina/";
//         window.open(linkedinURL, "_blank");
//     };

//     return (
//         <>
//             <div className='Contacto-container'>
//                 <div className='contacto-titulo'>CONTACTO</div>
//                 <div className='contacto-parrafo-container'>
//                     <div 
//                         className='contacto-enlace-container' 
//                         data-tooltip={tooltipVisible ? "Haz clic para copiar" : ""}
//                         onClick={handleClick}
//                         onTouchStart={(e) => e.preventDefault()}
//                     >
//                         <div className='contacto-icono contacto-telefono' />
//                         <div className='contacto-enlace'>650347741</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };


import React, { useState } from "react";
import "./styles.css";

export const Contacto = () => {
  const phoneNumber = "34650347741";
  const message = "Hola Nilton me gustaría ponerme en contacto contigo";
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = (event) => {
    event.preventDefault(); // Previene comportamientos predeterminados
    event.stopPropagation(); // Detiene la propagación del evento
    setShowTooltip(false); // Oculta el tooltip al hacer clic

    // Espera brevemente para permitir que el tooltip desaparezca antes de abrir WhatsApp
    setTimeout(() => {
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
      setShowTooltip(true); // Vuelve a habilitar el tooltip después
    }, 300); // Tiempo en ms para esperar antes de redirigir
  };

  return (
    <div className="Contacto-container">
      <div className="contacto-titulo">CONTACTO</div>
      <div className="contacto-parrafo-container">
        <div
          className="contacto-enlace-container"
          data-tooltip={showTooltip ? "Haz clic para copiar" : ""}
          onClick={handleClick}
          onTouchStart={(e) => e.preventDefault()} // Previene acciones no deseadas en pantallas táctiles
        >
          <div className="contacto-icono contacto-telefono" />
          <div className="contacto-enlace">650347741</div>
        </div>
      </div>
    </div>
  );
};