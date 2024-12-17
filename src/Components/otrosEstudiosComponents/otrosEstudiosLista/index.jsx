import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import './styles.css';


// Logotipos de las empresas
import urjc from '../../../images/otrosEstudios/logos/urjc_logo.png';
import udemy from '../../../images/otrosEstudios/logos/udemy.png';


import { OtrosEstudiosDescripcion } from '../otrosEstudiosDescripcion';

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
const otrosEstudios = [



  // UNIVERSIDAD REY JUAN CARLOS
  {
    iconoOtrosEstudios: urjc,
    tituloDelEstudio: 'INGENIERIA INFORMATICA',
    otrosEstudiosDescripcion: (
    
      <OtrosEstudiosDescripcion
      
        // Tecnologias aprendidas
        tecnologiasAprendidasfila1={`Java, GitHub, VHDL, Pascal, HTML, CSS, JavaScript`}
        tecnologiasAprendidasfila2={``}
        tecnologiasAprendidasfila3={``}
        tecnologiasAprendidasfila4={``}
        tecnologiasAprendidasfila5={``}
        tecnologiasAprendidasfila6={``}
        
        // Contenido del curso
        contenidoDelCursoFila1={`Programación orientada a objetos.`}
        contenidoDelCursoFila2={`Teoria de autómatas.`}
        contenidoDelCursoFila3={`Calculo.`}
        contenidoDelCursoFila4={``}
        contenidoDelCursoFila5={``}
        contenidoDelCursoFila6={``}

      />  
    
    ),
  },



  // UDEMY REACT: DE CER A EXPERTO (HOOKS Y MERN) 
  {
    iconoOtrosEstudios: udemy,
    tituloDelEstudio: 'REACT: DE 0 A EXPERTO ( HOOKS Y MERN )',
    otrosEstudiosDescripcion: (
      
      <OtrosEstudiosDescripcion
        
        // Tecnologias aprendidas
        tecnologiasAprendidasfila1={`ReactJS, HTML, CSS, JavaScript, Visual Studio Code, Git, 
                                     GitHub, Front-End, Back-End, API, Node.js, Express, API REST, 
                                     MERN Stack, Hooks de React, Desarrollo Web Redux.`}
        tecnologiasAprendidasfila2={``}
        tecnologiasAprendidasfila3={``}
        tecnologiasAprendidasfila4={``}
        tecnologiasAprendidasfila5={``}
        tecnologiasAprendidasfila6={``}
        
        // Contenido del curso
        contenidoDelCursoFila1={`Aprender React a profundidad.`}
        contenidoDelCursoFila2={`Realizar pruebas unitarias y de integración en todo tu código.`}
        contenidoDelCursoFila3={`MERN - Mongo Express React Node.`}
        contenidoDelCursoFila4={`Autenticación con Google y JWTs (JsonWebTokens).`}
        contenidoDelCursoFila5={`Hooks a profundidad.`}
        contenidoDelCursoFila6={`Crear aplicaciones reales.`}
        contenidoDelCursoFila7={`Redux, Context y otros manejadores de estado.`}
        
      />  

    ),
  },


];

export default function OtrosEstudiosListado() {
  const stepIconProps = { 
    color: 'rgb(55, 55, 65)' // Color para todos los estados del paso
  };

  return (
    <Box sx={{ maxWidth: '59rem', bgcolor: 'rgb(236, 233, 233)', paddingBottom: '1rem' }} >
         
          {/* posicion del circulo y la linea */}
          <Stepper activeStep={otrosEstudios.length} orientation="vertical" 
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
            
            {otrosEstudios.map( ( step, index ) => (
                  
              <Step key={step.tituloDelEstudio} expanded >

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
                                            <Box sx={{  backgroundImage: `url(${step.iconoOtrosEstudios})`,
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
                              
                                            {/* DESCRIPCION */}
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
                                                  
                                                  { step.tituloDelEstudio }
                                            
                                            </Box>
                            
                                  </Box>
                          
                        </StepLabel>
                        
                        <StepContent>
                  
                                {step.otrosEstudiosDescripcion}
                        
                        </StepContent>

                  </Step>
            
            ) )}
          </Stepper>
    </Box>
  );
}
