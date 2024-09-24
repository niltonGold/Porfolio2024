import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import puesto from '../../../images/experienciaProfesional/puesto.png';
import './styles.css';
import { ExperienciaDescripcion } from '../experienciaDescripcion';
import { ExperienciaConcurso } from '../experienciaConcurso';


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
    puestoExperiencia: 'Select campaign settings',
    description: (

      <ExperienciaDescripcion
        empresa={'prueba'}
        tiempo={'prueba'}
        calle={'prueba'}

        descripcion={'-Como desarrollador full stack, creé una landing page eficiente y escalable, y optimicé la web de la empresa para facilitar su modificación y adaptación a nuevas necesidades.'}
        competencia={'sdfsdfsadsdfsdfsadfssdfsdfsadfssdfsdfsadfssdfsdfsadfssdfsdfsadfs'}
        logros={'sdfsdfsadfsdfsdfsdfsadfssdfsdfsadfssdfsdfsadfssdfsdfsadfssdfsdfsadfs'}
        aprendi={'sdfsdfsadfssdfsdfsadfssdfsdfsadfssdfsdfsadfssdfsdfsadfssdfsdfsadfs'}
      />  
    
    ),
  },



  // DESARROLLADOR Y CONSULTOR SAGE 200
  {
    label: 'Create an ad group',
    description: (
      
      <ExperienciaDescripcion
        empresa={'prueba'}
        tiempo={''}
        calle={''}

        descripcion={''}
        competencia={''}
        logros={''}
        aprendi={''}
      />  

    ),
  },



  // HACKATON BARCELONA
  {
    label: 'Create an ad',
    description: (
      
      <ExperienciaConcurso
        empresa={'prueba'}
        tiempo={''}
        calle={''}

        descripcion={''}
        competencia={''}
        desafio={''}
      />

    ),
  },



  // HACKATON MADRID
  {
    label: 'Create xxxxxxxxx',
    description: (
        
      <ExperienciaConcurso
        empresa={'prueba'}
        tiempo={''}
        calle={''}

        descripcion={''}
        competencia={''}
        desafio={''}
      />

    ),
  },
];

export default function ExperienciaListado() {
  const stepIconProps = { 
    color: 'rgb(55, 55, 65)' // Color para todos los estados del paso
  };

  return (
    <Box sx={{ maxWidth: '59rem', bgcolor: 'rgb(236, 233, 233)', p: 0.5 }}>
          
          <Stepper activeStep={experiencias.length} orientation="vertical">
            
            {experiencias.map( ( step, index ) => (
                  
                  <Step key={step.puestoExperiencia} expanded>
                    
                        <StepLabel StepIconComponent={( props ) => <StepIcon {...props} {...stepIconProps} />}>
                              
                              <Typography sx={{ fontSize: '20px' }}>
                            
                                  <Box sx={{ display: 'flex', flexDirection: 'row',
                                                    '@media (max-width: 480px)': {
                                                        gap: '0.5rem',
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
                                                        gap: '1rem',
                                                    }, }}>
                            
                                        <Box sx={{  backgroundImage: `url(${puesto})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'center',
                                                    backgroundSize: '100% 100%',
                                                    '@media (max-width: 480px)': {
                                                        width: '1rem',
                                                        height: '1rem',
                                                    },
                                                    '@media (min-width: 481px) and (max-width: 767px)': {
                                                        width: '1.4rem',
                                                        height: '1.4rem',
                                                    },
                                                    '@media (min-width: 768px) and (max-width: 1024px)': {
                                                        width: '1.6rem',
                                                        height: '1.6rem',
                                                    },
                                                    '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                        width: '1.7rem',
                                                        height: '1.7rem',
                                                    },
                                                    '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                        width: '1.8rem',
                                                        height: '1.8rem',
                                                    },
                                                    '@media (min-width: 1441px)': {
                                                        width: '2rem',
                                                        height: '2rem',
                                                    },
                                        }} />
                              
                                        <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'center',         
                                                  fontWeight: 900,
                                                  '@media (max-width: 480px)': {
                                                      fontSize: '8px',
                                                  },
                                                  '@media (min-width: 481px) and (max-width: 767px)': {
                                                      fontSize: '12px',
                                                  },
                                                  '@media (min-width: 768px) and (max-width: 1024px)': {
                                                      fontSize: '15px',
                                                  },
                                                  '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                      fontSize: '16px',
                                                  },
                                                  '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                      fontSize: '20px',
                                                  },
                                                  '@media (min-width: 1441px)': {
                                                      fontSize: '22px',
                                                  }
                                        }}>
                                              
                                              { step.puestoExperiencia }
                                        
                                        </Box>
                            
                                  </Box>
                            
                              </Typography>
                          
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
