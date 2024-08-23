import React from 'react';
import './styles.css';
import { ImagenPerfil } from '../../headerComponents/imagenperfil';
import { HeaderEnlaces } from '../../headerComponents/headerEnlaces';


export const Header = () => {
  return (
        <>
          <div className='Header-container'>
            <div className='headerBanner-imagen'/>
            <div className='headerImagen-enlaces-container'>
              <ImagenPerfil />
              <HeaderEnlaces />
            </div> 
          </div> 
        </>
  )
}
