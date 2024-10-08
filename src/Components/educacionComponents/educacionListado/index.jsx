import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
// import puesto from '../../../images/experienciaProfesional/puesto.png';
import './styles.css';
import { EducacionDescripcion } from '../educacionDescripcion';

// Logotipos de las centroEducativos
import neoland from '../../../images/educacion/laptop.png'
import caldi from '../../../images/educacion/libro.png'
import andaluz from '../../../images/educacion/neoland.png'

function StepIcon(props) {
  const { active, completed, className, color } = props;

  return (
    <div className={className}>
          <div className='circulo' style={{    
            borderRadius: '50%', 
            border: `1px solid ${color}`, 
            backgroundColor: completed ? color : (active ? color : 'transparent')
          }} />
    </div>
  );
}

// Experiencias Listado
const educaciones = [



  // FULL STACK WEB DEVELOPER(ESCUELA LULLABY)
  {
    iconoAcademia: neoland,
    centroEducativo: 'SELECT CAMPAING SETTINGS',
    horasDeClasesImpartidasDeEducacion: (

      <EducacionDescripcion
        centroEducativo={'pruebaedua'}
        fechaDelCurso={'pruebaedu2'}
        // calle={'pruebaedu3'}

        horasDeClasesImpartidasFila1={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        
        tecnologiasAprendidasFila1={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        tecnologiasAprendidasFila2={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        tecnologiasAprendidasFila3={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        tecnologiasAprendidasFila4={''}
        tecnologiasAprendidasFila5={''}
        tecnologiasAprendidasFila6={''}

        contenidoDelCursoFila1={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        contenidoDelCursoFila2={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        contenidoDelCursoFila3={''}
        contenidoDelCursoFila4={''}
        contenidoDelCursoFila5={''}
        contenidoDelCursoFila6={''}
      />  
    
    ),
  },



  // DESARROLLADOR Y CONSULTOR SAGE 200
  {
    iconoAcademia: caldi,
    centroEducativo: 'Create an ad group',
    horasDeClasesImpartidasDeEducacion: (
      
      <EducacionDescripcion
        centroEducativo={'prueba'}
        fechaDelCurso={'vv'}
        // calle={'v'}

        horasDeClasesImpartidasFila1={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        
        tecnologiasAprendidasFila1={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        tecnologiasAprendidasFila2={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        tecnologiasAprendidasFila3={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        tecnologiasAprendidasFila4={''}
        tecnologiasAprendidasFila5={''}
        tecnologiasAprendidasFila6={''}

        contenidoDelCursoFila1={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        contenidoDelCursoFila2={'Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para'}
        contenidoDelCursoFila3={''}
        contenidoDelCursoFila4={''}
        contenidoDelCursoFila5={''}
        contenidoDelCursoFila6={''}
        
      />  

    ),
  },


];

export default function EducacionListado() {
  const stepIconProps = { 
    color: 'rgb(55, 55, 65)' // Color para todos los estados del paso
  };

  return (
    <Box sx={{ maxWidth: '59rem', bgcolor: 'rgb(236, 233, 233)', paddingBottom: '1rem' }} >
          
          {/* posicion del circulo y la linea */}
          <Stepper activeStep={educaciones.length} orientation="vertical" 
                    sx={{ '@media (max-width: 480px)': {
                              pl: '0rem'
                          },
                          '@media (min-width: 481px) and (max-width: 767px)': {
                              pl: '0rem'
                          },
                          '@media (min-width: 768px) and (max-width: 1024px)': {
                              pl: '0.2rem'
                          },
                          '@media (min-width: 1025px) and (max-width: 1280px)': {
                              pl: '0.3rem'
                          },
                          '@media (min-width: 1281px) and (max-width: 1440px)': {
                              pl: '0.4rem'
                          },
                          '@media (min-width: 1441px)': {
                              pl: '0.3rem'
                          }, }}>
            
            {educaciones.map( ( step, index ) => (
                  
              <Step key={step.centroEducativo} expanded >

                        {/* posicion del circulo */}
                        <StepLabel StepIconComponent={( props ) => <StepIcon {...props} {...stepIconProps} />} 
                                    sx={{ '@media (max-width: 480px)': {
                                          ml: '0.5rem',
                                      },
                                      '@media (min-width: 481px) and (max-width: 767px)': {
                                          ml: '0.4rem',
                                      },
                                      '@media (min-width: 768px) and (max-width: 1024px)': {
                                          ml: '0.3rem',
                                      },
                                      '@media (min-width: 1025px) and (max-width: 1280px)': {
                                          ml: '0.2rem',
                                      },
                                      '@media (min-width: 1281px) and (max-width: 1440px)': {
                                          ml: '0.1rem',
                                      },
                                      '@media (min-width: 1441px)': {
                                          ml: '0.1rem',
                                      }, }} >
                            
                                  <Box sx={{ display: 'flex', 
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            alignSelf: 'center',
                                            // backgroundColor: 'yellow',
                                         
                                                  '@media (max-width: 480px)': {
                                                      gap: '0.2rem',
                                                  },
                                                  '@media (min-width: 481px) and (max-width: 767px)': {
                                                      gap: '0.2rem',
                                                  },
                                                  '@media (min-width: 768px) and (max-width: 1024px)': {
                                                      gap: '0.2rem',
                                                  },
                                                  '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                      gap: '0.2rem',
                                                  },
                                                  '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                      gap: '0.2rem',
                                                  },
                                                  '@media (min-width: 1441px)': {
                                                      gap: '0.2rem',
                                                  }, }}>
                            

                                            {/* ICONO */}
                                            <Box sx={{  backgroundImage: `url(${step.iconoAcademia})`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                        backgroundSize: '100% 100%',
                                                        '@media (max-width: 480px)': {
                                                            width: '1rem',
                                                            height: '1rem',
                                                        },
                                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                                            width: '1.2rem',
                                                            height: '1.2rem',
                                                        },
                                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                                            width: '1.5rem',
                                                            height: '1.5rem',
                                                        },
                                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                            width: '1.6rem',
                                                            height: '1.6rem',
                                                        },
                                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                            width: '1.8rem',
                                                            height: '1.8rem',
                                                        },
                                                        '@media (min-width: 1441px)': {
                                                            width: '2rem',
                                                            height: '2rem',
                                                            // backgroundColor: 'green',
                                                        }, }} />
                              
                                            {/* horasDeClasesImpartidas */}
                                            <Box sx={{  display: 'flex', alignItems: 'center', alignSelf: 'center', fontFamily: 'Roboto', fontWeight: 900,      
                                                        
                                                        '@media (max-width: 480px)': {
                                                            fontSize: '8px',
                                                        },
                                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                                            fontSize: '11px',
                                                        },
                                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                                            fontSize: '14px',
                                                        },
                                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                            fontSize: '15px',
                                                        },
                                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                            fontSize: '18px',
                                                        },
                                                        '@media (min-width: 1441px)': {
                                                            fontSize: '21px',
                                                        }, }}>
                                                  
                                                  { step.centroEducativo }
                                            
                                            </Box>
                            
                                  </Box>
                          
                        </StepLabel>
                        
                        <StepContent>
                  
                                {step.horasDeClasesImpartidasDeEducacion}
                        
                        </StepContent>

                  </Step>
            
            ) )}
          </Stepper>
    </Box>
  );
}
