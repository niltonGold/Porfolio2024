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
  const [showTooltip, setShowTooltip] = useState(true); // Controla la visibilidad del tooltip

  const handleMouseDown = () => {
    setShowTooltip(true); // Muestra el tooltip mientras se presiona
  };

  const handleMouseUp = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setTimeout(() => setShowTooltip(false), 500); // Oculta el tooltip después de 500ms

    // Abre WhatsApp después de que el tooltip desaparezca
    setTimeout(() => {
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    }, 500);
  };

  return (
    <div className="Contacto-container">
      <div className="contacto-titulo">CONTACTO</div>
      <div className="contacto-parrafo-container">
        <div
          className="contacto-enlace-container"
          data-tooltip={showTooltip ? "Haz clic para copiar" : ""}
          onMouseDown={handleMouseDown} // Detecta cuando el usuario presiona el botón
          onMouseUp={handleMouseUp} // Detecta cuando el usuario suelta el botón
          onTouchStart={handleMouseDown} // Maneja dispositivos táctiles
          onTouchEnd={handleMouseUp} // Detecta cuando el usuario suelta el toque
        >
          <div className="contacto-icono contacto-telefono" />
          <div className="contacto-enlace">650347741</div>
        </div>
      </div>
    </div>
  );
};