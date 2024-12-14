import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import './styles.css';
import { ExperienciaDescripcion } from '../experienciaDescripcion';
import { ExperienciaConcurso } from '../experienciaConcurso';

import Caldi from '../../../images/experienciaProfesional/empresasIconos/caldiIngenierosConsultoresSL.png';
import andalus from '../../../images/experienciaProfesional/empresasIconos/alAndaluzFeeling.jpeg';
import jobinplanet from '../../../images/experienciaProfesional/empresasIconos/jobinplanet.png';






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
    iconoEmpresa: Caldi,
    puestoExperiencia: 'Full Stack Developer',
    description: (

      <ExperienciaDescripcion
        empresa={'CALDI INGENIEROS CONSULTORES SL'}
        tiempo={'Abril 2024 - Julio 2024'}
        calle={'Calle Salónica 43, 28232, Las Rozas Madrid'}

        // Descripcion del puesto
        descripcionFila1={`Como desarrollador full stack, diseñé y desarrollé una landing page eficiente, escalable y orientada a resultados, 
                           mejorando la experiencia de usuario y el rendimiento del sitio. Además, optimicé la estructura de la web de la 
                           empresa, facilitando su modificación, personalización y adaptación a nuevas necesidades y objetivos.`}
        descripcionFila2={''}
        descripcionFila3={''}
        descripcionFila4={''}
        descripcionFila5={''}
        descripcionFila6={''}
        
        // Competencias potenciadas o desarrolladas
        competenciaFila1={`ReactJS, HTML y CSS: Amplié mis conocimientos en ReactJS, HTML y CSS para crear componentes reutilizables y 
                           diseñar interfaces atractivas.`}
        competenciaFila2={`Gestión de Proyectos en GitHub: Mejoré mis habilidades de gestión de proyectos y colaboración en GitHub.`}
        competenciaFila3={`Responsive Design: Desarrollé habilidades en diseño responsive para asegurar accesibilidad en múltiples dispositivos.`}
        competenciaFila4={`Publicación en Netlify: Adquirí experiencia en el despliegue y actualización de proyectos web.`}
        competenciaFila5={''}
        competenciaFila6={''}

        // Logros
        logrosFila1={`Diseñé y desarrollé una landing page dinámica para la empresa, implementando React y separando componentes,
                      lo que facilitó la realización de cambios y mejoró significativamente la eficiencia y escalabilidad del proyecto.`}
        logrosFila2={`Modernicé la página web principal de la empresa, migrándola completamente a React y estructurándola en 
                      componentes reutilizables, optimizando su mantenibilidad y adaptabilidad para futuros desarrollos.`}
        logrosFila3={``}
        logrosFila4={``}
        logrosFila5={``}
        logrosFila6={``}

        // Lo que aprendí
        aprendiFila1={`Responsive Design: Profundicé en diseño responsive para garantizar una experiencia consistente en todos los dispositivos.`}
        aprendiFila2={`Uso de Canvas: Aprendí a utilizar Canvas para crear gráficos y elementos interactivos.`}
        aprendiFila3={`Creación de Componentes en React: Me especialicé en la creación de componentes modulares y reutilizables.`}
        aprendiFila4={`Despliegue en Netlify: Mejoré en los procesos de despliegue utilizando Netlify.`}
        aprendiFila5={``}
        aprendiFila6={``}

      />  
    
    ),
  },



  // DESARROLLADOR Y CONSULTOR DE SAGE 200
  {
    iconoEmpresa: andalus,
    puestoExperiencia: 'Desarrollador y Consultor de Sage 200 ',
    description: (
      
      <ExperienciaDescripcion
        empresa={'AL-ANDALUS FEELING'}
        tiempo={'Julio 2023 - Octubre 2024'}
        calle={'Granada, Andalucía, España'}

        // Descripcion del puesto
        descripcionFila1={`Investigué las necesidades de usuarios y clientes para alinear las soluciones desarrolladas con sus requerimientos.`}
        descripcionFila2={`Mantuve servidores y corregí errores, asegurando la estabilidad y seguridad del sistema.`}
        descripcionFila3={`Creé y desarrollé un servicio web para conectar APIs externas de Shopify con Sage 200, facilitando la integración de datos.`}
        descripcionFila4={`Utilicé SQL y SQL Server Management Studio para gestionar y optimizar bases de datos.`}
        descripcionFila5={``}
        descripcionFila6={``}
        
        // Competencias potenciadas o desarrolladas
        competenciaFila1={`Análisis de Necesidades de Usuarios: Recopilación y análisis de datos para el desarrollo de productos.`}
        competenciaFila2={`Mantenimiento de Servidores: Administración y resolución de problemas en servidores.`}
        competenciaFila3={`Integración de APIs: Integración de servicios externos con enfoque en Sage 200.`}
        competenciaFila4={`Gestión de Bases de Datos con SQL: Uso de SQL y SQL Server Management Studio.`}
        competenciaFila5={``}
        competenciaFila6={``}

        // Logros
        logrosFila1={`Implementé un servicio web que integró APIs externas con Sage 200, mejorando la eficiencia operativa.`}
        logrosFila2={`Optimicé la experiencia del usuario adaptando soluciones a necesidades específicas.`}
        logrosFila3={``}
        logrosFila4={``}
        logrosFila5={``}
        logrosFila6={``}

        // Lo que aprendí
        aprendiFila1={`Investigación de Usuarios: Técnicas avanzadas para comprender las necesidades de los usuarios.`}
        aprendiFila2={`Desarrollo e Integración de APIs: Habilidades en servicios web y APIs con Sage 200.`}
        aprendiFila3={`SQL y SQL Server Management Studio: Gestión eficiente de bases de datos.`}
        aprendiFila4={``}
        aprendiFila5={``}
        aprendiFila6={``}

      />  

    ),
  },



  // HACKATON BARCELONA
  {
    iconoEmpresa: jobinplanet,
    puestoExperiencia: 'Programador full stack',
    description: (
      
      <ExperienciaConcurso
        empresa={'JOBINPLANET BY TALENT POINT HR'}
        tiempo={'Abril 2023'}
        calle={'Recinto Spotify Camp Nou'}

        // Descripcion de la experiencia
        descripcionFila1={`Participé en JOBarcelona, una hackathon que desafió a los participantes a resolver 
                           problemas complejos en un entorno de tiempo limitado. Trabajé en equipo para desarrollar 
                           soluciones innovadoras centradas en un proyecto full stack, compitiendo junto a 
                           otros desarrolladores talentosos especializados en desarrollo web full stack.`}
        descripcionFila2={``}
        descripcionFila3={``}
        descripcionFila4={``}
        descripcionFila5={``}
        descripcionFila6={``}
        
        // Competencias potenciadas o desarrolladas
        competenciaFila1={`Resolución de Problemas: Mejoré mis habilidades en el análisis y resolución de problemas 
                           complejos bajo presión.`}
        competenciaFila2={`Trabajo en Equipo: Colaboré eficazmente con otros desarrolladores para abordar desafíos 
                           técnicos y coordinar esfuerzos en el proyecto.`}
        competenciaFila3={`Manejo del Tiempo: Desarrollé estrategias efectivas para gestionar el tiempo y priorizar 
                           tareas en un entorno competitivo.`}
        competenciaFila4={`Conocimiento Técnico: Amplié mi dominio en HTML, CSS, JavaScript, Python, Git, GitHub, y 
                           APIs REST, aplicando conocimientos teóricos en situaciones prácticas.`}
        competenciaFila5={``}
        competenciaFila6={``}

        // En que consistia en el desafio
        desfioFila1={`El desafío consistía en desarrollar una plataforma web que permitiera visualizar las 
                      analíticas de los grandes equipos de fútbol femenino de Europa. Este proyecto se enmarcaba 
                      en el contexto del creciente interés y popularidad del fútbol femenino, un deporte que ha 
                      visto un crecimiento exponencial en los últimos años. La plataforma debía ofrecer datos y 
                      análisis sobre los equipos y ligas, permitiendo a los usuarios explorar estadísticas 
                      detalladas y comparar el rendimiento de los equipos. El objetivo era crear una herramienta
                      útil tanto para los aficionados como para los profesionales del deporte.`}
        desfioFila2={``}
        desfioFila3={``}
        desfioFila4={``}
        desfioFila5={``}
        desfioFila6={``}

      />

    ),
  },



  // HACKATON MADRID
  {
    iconoEmpresa: jobinplanet,
    puestoExperiencia: 'Programador full stack',
    description: (
        
      <ExperienciaConcurso
        empresa={'JOBINPLANET BY TALENT POINT HR'}
        tiempo={'Noviembre 2022'}
        calle={'WiZink Center Madrid'}

        // Descripcion de la experiencia
        descripcionFila1={`Participé en JOBMadrid, una hackathon que desafió a los participantes 
                           a resolver problemas complejos en un entorno de tiempo limitado. 
                           Trabajé en equipo para desarrollar soluciones innovadoras centradas 
                           en un proyecto full stack, compitiendo junto a otros desarrolladores 
                           talentosos especializados en desarrollo web full stack.`}
        descripcionFila2={``}
        descripcionFila3={``}
        descripcionFila4={``}
        descripcionFila5={``}
        descripcionFila6={``}
        
        // Competencias potenciadas o desarrolladas
        competenciaFila1={`Resolución de Problemas: Mejoré mis habilidades en el análisis y resolución de 
                           problemas complejos bajo presión.`}
        competenciaFila2={`Trabajo en Equipo: Colaboré eficazmente con otros desarrolladores para abordar 
                           desafíos técnicos y coordinar esfuerzos en el proyecto.`}
        competenciaFila3={`Manejo del Tiempo: Desarrollé estrategias efectivas para gestionar el tiempo y 
                           priorizar tareas en un entorno competitivo.`}
        competenciaFila4={`Conocimiento Técnico: Amplié mi dominio en HTML, CSS, JavaScript, Python, Git, GitHub, 
                           y APIs REST, aplicando conocimientos teóricos en situaciones prácticas.`}
        competenciaFila5={``}
        competenciaFila6={``}

         // En que consistia en el desafio
        desfioFila1={`El desafío consistía en desarrollar una plataforma para JOBMadrid Discographic, 
                           la promotora organizadora del concierto de la banda tributo Nuwe Music en el WiZink 
                           Center. La tarea principal era identificar qué canciones, artistas y géneros musicales 
                           deberían interpretarse para asegurar el éxito del concierto. Se debía considerar si el 
                           objetivo era un concierto enérgico, bailable o más tranquilo, utilizando una base de datos
                           de canciones populares en streaming. La plataforma debía evaluar la popularidad, el mood
                           y otros factores relevantes para ofrecer una experiencia de concierto óptima para el público.`}
        desfioFila2={``}
        desfioFila3={``}
        desfioFila4={``}
        desfioFila5={``}
        desfioFila6={``}
        
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
                  
              <Step key={step.puestoExperiencia} expanded>

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
