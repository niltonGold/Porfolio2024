import React from 'react';
import './styles.css';
import CurriculumVitaeDocument from '../../../documents/Curriculum-vitae-2024_v5.pdf';

export const CurriculumVitae = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = CurriculumVitaeDocument; // La ruta al archivo que quieres descargar
        link.setAttribute('download', 'CurriculumVitae.pdf'); // El nombre con el que quieres que se descargue el archivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
        <>
                      
                <button className='curriculumVitae-btn' onClick={handleDownload}>
                    <div className='curriculum_vitae_frase'>
                        <div>CURRICULUM</div>
                        <div>VITAE</div>
                    </div>
                    <div className='curriculumVitae-descarga-icono'/>
                </button>
            
        </>
  )
}

