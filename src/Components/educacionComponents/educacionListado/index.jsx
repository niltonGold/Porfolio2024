import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import './styles.css';
import { EducacionDescripcion } from '../educacionDescripcion';

// Logotipos de las centroEducativos
import neoland from '../../../images/educacion/academiasLogos/neoland.png';
import dabo from '../../../images/educacion/academiasLogos/dabo_logo.jpeg';
import ibm from '../../../images/educacion/academiasLogos/Ibm_logo.jpg';
import gradoSuperior from '../../../images/educacion/academiasLogos/rosa_chacel_logo.jpeg';
import tm from '../../../images/educacion/academiasLogos/tm_logo.jpeg';



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

// EDUCACIÓN LISTADO
const educaciones = [



    // NEOLAND
    {
        id: 1,
        iconoAcademia: neoland,
        centroEducativo: 'NEOLAND',
        centroEducativoDescripcion: (

        <EducacionDescripcion
            tituloDelCurso={'BootCamp - Full Stack Web Developer'}
            fechaDelCurso={'Septiembre 2021 - Enero 2022'}

            // Horas de clases impartidas
            horasDeClasesImpartidasFila1={`480 horas / 12 semanas`}
            
            // Tecnologías aprendidas
            tecnologiasAprendidasFila1={`ReactJS, HTML, CSS, JavaScript, Visual Studio Code, Git, GitHub, Front-End, Back-End, API, Node.js, Express, API REST.`}
            tecnologiasAprendidasFila2={``}
            tecnologiasAprendidasFila3={``}
            tecnologiasAprendidasFila4={``}
            tecnologiasAprendidasFila5={``}
            tecnologiasAprendidasFila6={``}

            // Contenido del curso
            contenidoDelCursoFila1={`Módulo 1 (Web Design): Introducción a Git, HTML, CSS, Sass, JavaScript`}
            contenidoDelCursoFila2={`Módulo 2 (Front-End): Peticiones HTTP, Introducción al desarrollo web con React JS, 
                                    Componentes y Hooks en React, Enrutamiento (Routing), Gestión de Estado (State Management), 
                                    Despliegue de Aplicaciones (Deploy)`}
            contenidoDelCursoFila3={`Módulo 3 (Back-End): Fundamentos de Node Core, Sistema de Archivos (File System), 
                                    Módulo HTTP, Almacenamiento con MongoDB, Creación de API REST, Web Scraping`}
            contenidoDelCursoFila4={``}
            contenidoDelCursoFila5={``}
            contenidoDelCursoFila6={``}
        />  
        
        ),
    },



    // DABO FORMACIÓN
    {
        id: 2,
        iconoAcademia: dabo,
        centroEducativo: 'DABO FORMACIÓN',
        centroEducativoDescripcion: (
        
        <EducacionDescripcion
            tituloDelCurso={'Sistemas Microinformáticos'}
            fechaDelCurso={'Abril 2024 - Noviembre 2024'}
            
            // Horas de clases impartidas
            horasDeClasesImpartidasFila1={`560h (535h online + 25h presencial)`}
            
            // Tecnologías aprendidas
            tecnologiasAprendidasFila1={`Sistemas operativos, entonces de windows, microsoft office, instalación de programas, backups del sistema, etc.`}
            tecnologiasAprendidasFila2={``}
            tecnologiasAprendidasFila3={``}
            tecnologiasAprendidasFila4={``}
            tecnologiasAprendidasFila5={``}
            tecnologiasAprendidasFila6={``}

            // Contenido del curso
            contenidoDelCursoFila1={`Instalación y configuración de sistemas operativos.`}
            contenidoDelCursoFila2={`Implantación de los elementos de la red.`}
            contenidoDelCursoFila3={`Instalación y configuración de aplicaciones informáticas.`}
            contenidoDelCursoFila4={`Aplicaciones microinformáticas.`}
            contenidoDelCursoFila5={``}
            contenidoDelCursoFila6={``}
            
        />  

        ),
    },



    // IBM SKILLSBUILD Y BEJOB SQL
    {
        id: 3,
        iconoAcademia: ibm,
        centroEducativo: 'IBM SKILLSBUILD Y BEJOB',
        centroEducativoDescripcion: (
        
        <EducacionDescripcion
            tituloDelCurso={'SQL IBM SkillsBuil - DataHack'}
            fechaDelCurso={'Mayo 2024 - Julio 2024'}
            
            // Horas de clases impartidas
            horasDeClasesImpartidasFila1={`40 Horas`}
            
            // Tecnologías aprendidas
            tecnologiasAprendidasFila1={`SQL, SQL Management Studio`}
            tecnologiasAprendidasFila2={``}
            tecnologiasAprendidasFila3={``}
            tecnologiasAprendidasFila4={``}
            tecnologiasAprendidasFila5={``}
            tecnologiasAprendidasFila6={``}

            // Contenido del curso
            contenidoDelCursoFila1={`Introducción e instalación de recursos SQL.`}
            contenidoDelCursoFila2={`Fundamento y estructura de BBDD.`}
            contenidoDelCursoFila3={`Relaciones y Restricciones entre tablas.`}
            contenidoDelCursoFila4={`Manipulación de registros DML cons insert y select y Funciones de agregado.`}
            contenidoDelCursoFila5={`Operadores lógicos y , Stored Procedures, Variables y Subconsultas.`}
            contenidoDelCursoFila6={`Estructuras de control y operadores Aritméticos y de Comparación.`}
            contenidoDelCursoFila7={`Herramientas extras y sentencias DDL.`}
            contenidoDelCursoFila8={`Funciones de conversión y texto y Transacciones.`}
            contenidoDelCursoFila9={`Joins y Unions.`}
            contenidoDelCursoFila10={`Funciones definidas por el usuario.`}
            contenidoDelCursoFila11={`Tablas temporales.`}
            contenidoDelCursoFila12={`Vistas.`}
            contenidoDelCursoFila13={`Triggers.`}
            contenidoDelCursoFila14={`Backup y Restored Database.`}
            contenidoDelCursoFila15={`Scheduled JOBS.`}
            
        />  

        ),
    },



    // IBM SKILLSBUILD Y BEJOB PYTHON
    {
        id: 4,
        iconoAcademia: ibm,
        centroEducativo: 'IBM SKILLSBUILD Y BEJOB',
        centroEducativoDescripcion: (
            
            <EducacionDescripcion
            tituloDelCurso={'PYTHON FULL STACK'}
            fechaDelCurso={'Abril 2024 - Mayo 2024'}
            
            // Horas de clases impartidas
            horasDeClasesImpartidasFila1={`20 horas`}
            
            // Tecnologías aprendidas
            tecnologiasAprendidasFila1={`Pyhton, Git, Github`}
            tecnologiasAprendidasFila2={``}
            tecnologiasAprendidasFila3={``}
            tecnologiasAprendidasFila4={``}
            tecnologiasAprendidasFila5={``}
            tecnologiasAprendidasFila6={``}

            // Contenido del curso
            contenidoDelCursoFila1={`Modulo 1: Fundamentos de internet.`}
            contenidoDelCursoFila2={`Modulo 2: Fundamentos de Programacion.`}
            contenidoDelCursoFila3={`Modulo 3: Fundamentos de Git GitHub.`}
            contenidoDelCursoFila4={`Modulo 4: Fundamentos de Desarrollo Web.`}
            contenidoDelCursoFila5={`Modulo 5: Conceptos Básicos de Python.`}
            contenidoDelCursoFila6={`Modulo 6: Programación en Python, Algoritmos.`}
            contenidoDelCursoFila7={`Modulo 7: Pruebas con Python.`}
            contenidoDelCursoFila8={`Modulo 8: Programación orientada a objetos de Python.`}
            
            />  

        ),
    },



    // CICLO FORMATIVO DE GRADO SUPERIOR
    {
        id: 5,
        iconoAcademia: gradoSuperior,
        centroEducativo: 'CICLO FORMATIVO DE GRADO SUPERIOR',
        centroEducativoDescripcion: (
        
        <EducacionDescripcion
            tituloDelCurso={'ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED'}
            fechaDelCurso={'Enero 2012 - Diciembre 2013'}
            
            // Horas de clases impartidas
            horasDeClasesImpartidasFila1={`2 años`}
            
            // Tecnologías aprendidas
            tecnologiasAprendidasFila1={`Java, GitHub, HTML, CSS, Java VHDL, máquinas virtuales, redes, gestión de programas, entre otros.`}
            tecnologiasAprendidasFila2={``}
            tecnologiasAprendidasFila3={``}
            tecnologiasAprendidasFila4={``}
            tecnologiasAprendidasFila5={``}
            tecnologiasAprendidasFila6={``}

            // Contenido del curso
            contenidoDelCursoFila1={`Sistemas Operativos: Instalación y configuración de sistemas como Windows y 
                                     Linux, Gestión de usuarios, permisos y seguridad.`}
            contenidoDelCursoFila2={`Servicios de Red: Instalación de servicios como DNS, DHCP, servidores web, y 
                                     correo electrónico, Gestión de servidores locales y en la nube.`}
            contenidoDelCursoFila3={`Seguridad Informática: Protección contra vulnerabilidades, Copias de seguridad 
                                     y recuperación de desastres.`}
            contenidoDelCursoFila4={`Bases de Datos: Creación y gestión de bases de datos, Consultas SQL básicas.`}
            contenidoDelCursoFila5={`Virtualización: Uso de máquinas virtuales y plataformas como VMware o Hyper-V`}
            contenidoDelCursoFila6={`Programación Básica: Automatización de tareas con scripts (Python, Bash).`}

            
        />  

        ),
    },


    // TM INSTITUTE OF TALENT MANAGEMENT
    {
        id: 6,
        iconoAcademia: tm,
        centroEducativo: 'TM INSTITUTE OF TALENT MANAGEMENT',
        centroEducativoDescripcion: (
        
        <EducacionDescripcion
            tituloDelCurso={'TÉCNICO EN SAGE 200'}
            fechaDelCurso={'Mayo 2023 - Agosto 2023'}
            
            // Horas de clases impartidas
            horasDeClasesImpartidasFila1={`2 años`}
            
            // Tecnologías aprendidas
            tecnologiasAprendidasFila1={`Sage 200, SQL, SQL Management Studio`}
            tecnologiasAprendidasFila2={``}
            tecnologiasAprendidasFila3={``}
            tecnologiasAprendidasFila4={``}
            tecnologiasAprendidasFila5={``}
            tecnologiasAprendidasFila6={``}

            // Contenido del curso
            contenidoDelCursoFila1={`Módulo 1 (Gestión de Tarifas en Sage): Manejo y personalización de tarifas en Sage 200.`}
            contenidoDelCursoFila2={`Módulo 2 (Creación de Ofertas en Sage): Desarrollo y gestión de ofertas comerciales.`}
            contenidoDelCursoFila3={`Módulo 3 (Consultoría Funcional en Finanzas y Gestión): Enfoque en módulos de Finanzas y Gestión.`}
            contenidoDelCursoFila4={`Módulo 4 (Desarrollo Básico en Sage): Personalización y extensión de funcionalidades.`}
            contenidoDelCursoFila5={`Módulo 5 (Demos Comerciales y Funcionales): Preparación y presentación de demostraciones de Sage 200.`}
            contenidoDelCursoFila6={`Módulo 6: (Estrategias de Marketing): Promoción de productos y servicios relacionados con Sage 200.`}
            contenidoDelCursoFila7={`Módulo 7: (Habilidades para Consultoría): Competencias básicas y avanzadas para profesionales de consultoría.`}
            
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
                  
              <Step key={step.id} expanded >

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
                  
                                {step.centroEducativoDescripcion}
                        
                        </StepContent>

                  </Step>
            
            ) )}
          </Stepper>
    </Box>
  );
}
