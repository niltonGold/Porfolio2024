import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

import './styles.css';
import { ExperienciaDescripcion } from '../experienciaDescripcion';
import { ExperienciaConcurso } from '../experienciaConcurso';

import neoland from '../../../images/experienciaProfesional/empresasIconos/jobinplanet.jpg'
import caldi from '../../../images/experienciaProfesional/empresasIconos/jobinplanet.jpg'
import andaluz from '../../../images/experienciaProfesional/empresasIconos/jobinplanet.jpg'



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
const experiencias = [



  // FULL STACK WEB DEVELOPER(ESCUELA LULLABY)
  {
    iconoEmpresa: neoland,
    puestoExperiencia: 'SELECT CAMPAING SETTINGS',
    description: (

      <ExperienciaDescripcion
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
    iconoEmpresa: neoland,
    puestoExperiencia: 'Create an ad group',
    description: (
      
      <ExperienciaDescripcion
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



  // HACKATON BARCELONA
  {
    iconoEmpresa: caldi,
    puestoExperiencia: 'Create an ad',
    description: (
      
      <ExperienciaConcurso
        empresa={'prueba'}
        tiempo={'a'}
        calle={'a'}

        descripcion={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        competencia={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        desafio={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
      />

    ),
  },



  // HACKATON MADRID
  {
    iconoEmpresa: caldi,
    lapuestoExperienciabel: 'Create xxxxxxxxx',
    description: (
        
      <ExperienciaConcurso
        empresa={'prueba'}
        tiempo={'dd'}
        calle={'ff'}

        descripcion={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        competencia={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        desafio={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
      />

    ),
  },
];

export default function ExperienciaListado() {
  const stepIconProps = { 
    color: 'rgb(55, 55, 65)' // Color para todos los estados del paso
  };

  return (
    <Box sx={{ maxWidth: '59rem', bgcolor: 'rgb(236, 233, 233)', paddingBottom: '1rem' }} >
          
          {/* posicion del circulo y la linea */}
          <Stepper activeStep={experiencias.length} orientation="vertical" 
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
            
            {experiencias.map( ( step, index ) => (
                  
              <Step key={step.puestoExperiencia} expanded >

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
                                                      gap: '0.3rem',
                                                  },
                                                  '@media (min-width: 481px) and (max-width: 767px)': {
                                                      gap: '0.5rem',
                                                  },
                                                  '@media (min-width: 768px) and (max-width: 1024px)': {
                                                      gap: '0.5rem',
                                                  },
                                                  '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                      gap: '0.5rem',
                                                  },
                                                  '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                      gap: '1rem',
                                                  },
                                                  '@media (min-width: 1441px)': {
                                                      gap: '0.5rem',
                                                  }, }}>
                            

                                            {/* ICONO */}
                                            <Box sx={{  backgroundImage: `url(${step.iconoEmpresa})`,
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
                                                  
                                                  { step.puestoExperiencia }
                                            
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
