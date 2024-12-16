import React, { useState } from "react";
import "./styles.css";

export const Contacto = () => {

    const phoneNumber = "34650347741";

    const message = "Hola Nilton me gustaría ponerme en contacto contigo";

    const email = "niltonenrique3000@hotmail.com"; // Texto que se copiará

    const [showTooltip, setShowTooltip] = useState(true); // Controla la visibilidad del tooltip

    const handleMouseDown = () => {
      setShowTooltip(true); // Muestra el tooltip mientras se presiona
    };


    // WHASAP
    const handleMouseUpWasap = (event) => {

        event.preventDefault();

        event.stopPropagation();

        // Abre WhatsApp después de que el tooltip desaparezca
        setTimeout(() => {
          const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
            message
          )}`;
          window.open(whatsappURL, "_blank");
        }, 200);

        setTimeout(() => setShowTooltip(false), 300); // Oculta el tooltip después de 500ms

    };


    // EMAIL
    const handleMouseUpEmail = (event) => {

        event.preventDefault();

        event.stopPropagation();

        if (navigator.clipboard) {
          navigator.clipboard.writeText(email).then(() => {
            alert("¡Correo copiado al portapapeles!");
          });
        } else {
          alert("Tu navegador no soporta la copia al portapapeles.");
        }

        setTimeout(() => setShowTooltip(false), 300); // Oculta el tooltip después de 500ms

    };


    // LINKEDIN
    const handleMouseUpLinkedin = (event) => {

        event.preventDefault();

        event.stopPropagation();
      
        setTimeout(() => {
          // Redirige al enlace de LinkedIn
          const linkedinURL = "https://www.linkedin.com/in/nilton-medina/";
          window.open(linkedinURL, "_blank");
        }, 200);
      
        setTimeout(() => setShowTooltip(false), 300); // Oculta el tooltip después de 300ms

    };


    const handleMouseEnter = () => {
      setShowTooltip(true); // Muestra el tooltip al pasar el ratón
    };

    const handleMouseLeave = () => {
      setShowTooltip(false); // Oculta el tooltip al salir con el ratón
    };



  return (
    <>


      <div className="Contacto-container">


            <div className="contacto-titulo">CONTACTO</div>


            <div className="contacto-parrafo-container">


                  {/* WhatsApp */}
                  <div  className="contacto-enlace-container contacto-enlace-container1"
                        data-tooltip={showTooltip ? "Enviame un Mensaje" : ""}
                        onMouseDown={handleMouseDown} // Detecta cuando el usuario presiona el botón
                        onMouseUp={handleMouseUpWasap} // Detecta cuando el usuario suelta el botón
                        onMouseEnter={handleMouseEnter} // Detecta cuando el ratón entra
                        onMouseLeave={handleMouseLeave} // Detecta cuando el ratón sale
                        onTouchStart={handleMouseDown} // Maneja dispositivos táctiles
                        onTouchEnd={handleMouseUpWasap} // Detecta cuando el usuario suelta el toque
                  >

                        <div className="contacto-icono contacto-telefono" />
                        <div className="contacto-enlace">650347741</div>

                  </div>


                  {/* Email */}
                  <div  className="contacto-enlace-container contacto-enlace-container2"
                        data-tooltip={showTooltip ? "Copiar correo" : ""}
                        onMouseDown={handleMouseDown} // Detecta cuando el usuario presiona el botón
                        onMouseUp={handleMouseUpEmail} // Detecta cuando el usuario suelta el botón
                        onMouseEnter={handleMouseEnter} // Detecta cuando el ratón entra
                        onMouseLeave={handleMouseLeave} // Detecta cuando el ratón sale
                        onTouchStart={handleMouseDown} // Maneja dispositivos táctiles
                        onTouchEnd={handleMouseUpEmail} // Detecta cuando el usuario suelta el toque
                  >

                        <div className="contacto-icono contacto-email" />
                        <div className="contacto-enlace contacto-email-lineaTexto">
                                <div>niltonenrique3000</div>
                                <div>@hotmail.com</div>
                        </div>

                  </div>


                  {/* LinkedIn */}
                  <div  className="contacto-enlace-container contacto-enlace-container1"
                        data-tooltip={showTooltip ? "Visita mi LinkedIn" : ""}
                        onMouseDown={handleMouseDown} // Detecta cuando el usuario presiona el botón
                        onMouseUp={handleMouseUpLinkedin} // Detecta cuando el usuario suelta el botón
                        onMouseEnter={handleMouseEnter} // Detecta cuando el ratón entra
                        onMouseLeave={handleMouseLeave} // Detecta cuando el ratón sale
                        onTouchStart={handleMouseDown} // Maneja dispositivos táctiles
                        onTouchEnd={handleMouseUpLinkedin} // Detecta cuando el usuario suelta el toque
                  >

                        <div className="contacto-icono contacto-linkedin" />
                        <div className="contacto-enlace">LinkedIn</div>

                  </div>


            </div>


      </div>


    </>
  );
};