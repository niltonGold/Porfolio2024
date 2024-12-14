import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import CardProyecto from '../cardProyecto';

import escuela from '../../../images/proyectos/EscuelaLullabyFront.jpg';
import landingpage from '../../../images/proyectos/LandingPageFront.jpg';


export default function ProyectosCarrusel() {

  const [rotateValue, setRotateValue] = useState(80);

  useEffect(() => {
    const updateRotateValue = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setRotateValue(50);  // Ejemplo para pantallas pequeñas
      } else if (width >= 481 && width <= 767) {
        setRotateValue(60);  // Ejemplo para pantallas medianas
      } else if (width >= 768 && width <= 1024) {
        setRotateValue(90);  // Ejemplo para pantallas grandes
      } else if (width >= 1025 && width <= 1280) {
        setRotateValue(90);  // Ejemplo para pantallas más grandes
      } else if (width >= 1281 && width <= 1440) {
        setRotateValue(50);  // Ejemplo para pantallas extra grandes
      } else if (width >= 1441) {
        setRotateValue(60);  // Ejemplo para pantallas muy grandes
      }
    };

    window.addEventListener('resize', updateRotateValue);
    updateRotateValue(); // Llama a la función para establecer el valor inicial

    return () => {
      window.removeEventListener('resize', updateRotateValue);
    };
  }, []);




  
  return (
    <>
      <Swiper
        key={rotateValue}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: rotateValue,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true, 
        }}
        navigation={true} 
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >


          {/* Escuela lullaby */}
          <SwiperSlide className='swiper-card'>

              <CardProyecto
                titulocard='ESCUELA LULLABY'
                tecnologias='(React, Html, Css, JavaScript)'
                imagen={escuela}
                descripcion='Página web desarrollada en React, con navegación dinámica, formulario funcional mediante EmailJS 
                             y diseño responsivo adaptable a cualquier pantalla. Incluye posicionamiento preciso de imágenes 
                             con CSS para una experiencia optimizada.'
                repositorioGitHub='https://github.com/niltonGold/React-Escuelaullaby.git'
                enlaceWeb='https://escuelalullaby.netlify.app/inicioPage'
              />
            
          </SwiperSlide>

                {/* ------------------------------------------------------------------------------------------ */}

          {/* LandingPage */}
          <SwiperSlide className='swiper-card'>

              <CardProyecto
                titulocard='ESCUELA LULLABY'
                tecnologias='(React, Html, Css, JavaScript)'
                imagen={landingpage}
                descripcion='Landing page desarrollada con React, que incluye tarjetas reutilizables para mostrar información 
                             de forma dinámica. Integra EmailJS para correos y enlaces de WhatsApp para enviar mensajes directamente. 
                             Totalmente optimizada y funcional.'
                repositorioGitHub='https://github.com/niltonGold/REACT-LandingPage.git'
                enlaceWeb='https://landingpage100.netlify.app/'
              />
            
          </SwiperSlide>


      </Swiper>
    </>
  );
}
