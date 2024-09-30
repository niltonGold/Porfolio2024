import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
// import puesto from '../../../images/experienciaProfesional/puesto.png';
import './styles.css';


// Logotipos de las empresas
import neoland from '../../../images/educacion/laptop.png'
import caldi from '../../../images/educacion/libro.png'
import andaluz from '../../../images/educacion/neoland.png'
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



  // FULL STACK WEB DEVELOPER(ESCUELA LULLABY)
  {
    iconoOtrosEstudios: neoland,
    tituloDelEstudio: 'SELECT CAMPAING SETTINGS',
    description: (
    
      <OtrosEstudiosDescripcion
        empresa={'prueba1prueba1prueba1'}
        tiempo={'prueba1prueba1prueba1'}
        calle={'prueba1prueba1prueba1'}

        descripcion={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        competencia={'sdfsdfsadsdfs dfsadfssdfsdfsadfssdfsdfsa dfssdfsdfsadf ssdfsdfsadfs'}
        logros={'sdfsdfs adfsdfsdfs dfsadfssdfsdfsa dfssdfsdfsadfs sdfsdfsadfssd fsdfsadfs'}
        aprendi={'sdfsdfsad fssdfsdfsadfss dfsdfsadfssdfsdfsadfssdfs dfsadfssdfs dfsadfs'}
      />  
    
    ),
  },



  // DESARROLLADOR Y CONSULTOR SAGE 200
  {
    iconoOtrosEstudios: caldi,
    tituloDelEstudio: 'Create an ad group',
    description: (
      
      <OtrosEstudiosDescripcion
        empresa={'prueba'}
        tiempo={'vv'}
        calle={'v'}

        descripcion={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        competencia={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        logros={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        aprendi={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
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
                  
                                {step.description}
                        
                        </StepContent>

                  </Step>
            
            ) )}
          </Stepper>
    </Box>
  );
}
