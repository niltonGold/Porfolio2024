import React from 'react';
import './styles.css';
import { ImagenPerfil } from '../../headerComponents/imagenperfil';
import { HeaderBanner } from '../../headerComponents/headerBanner';


export const Header = () => {
  return (
        <>
          <div className='Header-container'>
            {/* <div className='headerBanner-imagen'/> */}
            <HeaderBanner/>
            <div className='headerImagen-enlaces-container'>
              <ImagenPerfil />
              {/* <HeaderEnlaces /> */}
            </div> 
          </div> 
        </>
  )
}
