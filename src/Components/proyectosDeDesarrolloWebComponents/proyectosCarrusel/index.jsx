import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import CardProyecto from '../cardProyecto';
import webresponsive from '../../../images/proyectos/webresponsibe.jpg';


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
        <SwiperSlide className='swiper-card'>

          <CardProyecto
            titulocard='hola'
            tecnologias='(React, html)'
            imagen={webresponsive}
            descripcion='hohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdf5656561561561561xxxyyyyyyyyhrshgsgffsfsfssssssssssss'
            repositorioGitHub='https://github.com/niltonGold/HTML-CSS-Proyect-WebResponsiveAnimada'
            enlaceWeb='https://www.ionos-status.es/'
          />
          
        </SwiperSlide>

        <SwiperSlide className='swiper-card'>
          <CardProyecto
                        titulocard='hola'
            tecnologias='(React, html)'
            imagen={webresponsive}
            descripcion='hohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdf5656561561561561'
            repositorioGitHub='https://github.com/niltonGold/HTML-CSS-Proyect-WebResponsiveAnimada'
            enlaceWeb='https://www.ionos-status.es/'
          />
        </SwiperSlide>

        <SwiperSlide className='swiper-card'>
          <CardProyecto
                        titulocard='hola'
            tecnologias='(React, html)'
            imagen={webresponsive}
            descripcion='hohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdfohfkosdjaofjsodajfojdf5656561561561561'
            repositorioGitHub='https://github.com/niltonGold/HTML-CSS-Proyect-WebResponsiveAnimada'
            enlaceWeb='https://www.ionos-status.es/'
          />
        </SwiperSlide>

        <SwiperSlide className='swiper-card'>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" />
        </SwiperSlide>

        <SwiperSlide  className='swiper-card'>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" />
        </SwiperSlide>

        <SwiperSlide className='swiper-card'>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" />
        </SwiperSlide>

        <SwiperSlide className='swiper-card'>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" />
        </SwiperSlide>

        <SwiperSlide className='swiper-card'>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" />
        </SwiperSlide>

        <SwiperSlide className='swiper-card'>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
