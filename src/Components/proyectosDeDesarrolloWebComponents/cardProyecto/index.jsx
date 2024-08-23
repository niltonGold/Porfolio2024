import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';



export default function CardProyecto( props ) {


return (
      

    <Card sx={{
        background: 'linear-gradient(135deg, #f0f0f0, #c7c7c7, #a3a3a3, #c7c7c7, #f0f0f0)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid rgb(55, 55, 65)',
        '@media (min-width: 350px) and (max-width: 480px)': {
            width: '9rem', 
        },
        '@media (min-width: 481px) and (max-width: 767px)': {
            width: '10rem', 
            height: '20rem'
        },
        '@media (min-width: 768px) and (max-width: 1024px)': {
            width: '17rem',
        },
        '@media (min-width: 1025px) and (max-width: 1280px)': {
            width: '17rem',
        },
        '@media (min-width: 1281px) and (max-width: 1440px)': {
            width: '17rem',
        },
        '@media (min-width: 1441px)': {
            width: '19rem',
        },
    }}>  



        {/* CARD HEADER, parte 1 de la card TITULO*/}
        <Box sx={{ width: '90%', textAlign: 'center', paddingTop: '5px', paddingBottom: '5px' }}>

                    <Typography 
                        sx={{
                            width: '100%', 
                            fontWeight: 'bold',
                
                            '@media (max-width: 480px)': {
                                fontSize: '14px',
                            },
                            '@media (min-width: 481px) and (max-width: 767px)': {
                                fontSize: '10px',
                            },
                            '@media (min-width: 768px) and (max-width: 1024px)': {
                                fontSize: '14px',
                            },
                            '@media (min-width: 1025px) and (max-width: 1280px)': {
                                fontSize: '15px',
                            },
                            '@media (min-width: 1281px) and (max-width: 1440px)': {
                                fontSize: '16px',
                            },
                            '@media (min-width: 1441px)': {
                                fontSize: '17px',
                            },
                        }}
                    >

                            {props.titulocard}

                    </Typography>

                    {/* ------------------------------------------------------------------------- */}

                    <Typography sx={{
                        width: '100%',

                        '@media (max-width: 480px)': {
                            fontSize: '14px',
                        },
                        '@media (min-width: 481px) and (max-width: 767px)': {
                            fontSize: '11px',
                        },
                        '@media (min-width: 768px) and (max-width: 1024px)': {
                            fontSize: '12px',
                        },
                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                            fontSize: '13px',
                        },
                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                            fontSize: '14px',
                        },
                        '@media (min-width: 1441px)': {
                            fontSize: '15px',
                        },
                    }}>

                            {props.tecnologias}
                        
                    </Typography>
            
        </Box>
                                 
        {/* ------------------------------------------------------------------------- */}

        {/* CARD CENTER, parte 2 de la card IMAGEN*/}
        <CardMedia
            component="img"
            width="auto" 
            image={props.imagen}
            alt="No disponible"
            sx={{
                objectFit: 'cover',
                width: '17rem',
                height: '14rem',
                border: '2px solid #000',
                borderRadius: '8px',
            }}
        />

        {/* ------------------------------------------------------------------------- */}
        
        {/* CARD HEADER, parte 3 de la card TEXTO*/}
        <CardContent sx={{
            width: '95%',
            // backgroundColor: 'green',
            paddingTop: '0.5rem'
        }}>
            
                    <Typography sx={{
                            fontWeight: 900,
                        
                            '@media (max-width: 480px)': {
                                fontSize: '14px',
                            },
                            '@media (min-width: 481px) and (max-width: 767px)': {
                                fontSize: '9px',
                            },
                            '@media (min-width: 768px) and (max-width: 1024px)': {
                                fontSize: '14px',
                            },
                            '@media (min-width: 1025px) and (max-width: 1280px)': {
                                fontSize: '15px',
                            },
                            '@media (min-width: 1281px) and (max-width: 1440px)': {
                                fontSize: '16px',
                            },
                            '@media (min-width: 1441px)': {
                                fontSize: '17px',
                            }   }}>

                            Descripción :

                    </Typography>
                                
                    {/* ------------------------------------------------------------------------- */}
            
                    <Typography
                        sx={{
                            textAlign: 'justify',
                            fontWeight: 500,
                            // backgroundColor: 'yellow',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 5, // Limita el número de líneas visibles
                            textOverflow: 'ellipsis',
                            wordWrap: 'break-word',
                            whiteSpace: 'normal',
                            '@media (max-width: 480px)': {
                            fontSize: '14px',
                            },
                            '@media (min-width: 481px) and (max-width: 767px)': {
                            fontSize: '8px',
                            },
                            '@media (min-width: 768px) and (max-width: 1024px)': {
                            fontSize: '12px',
                            },
                            '@media (min-width: 1025px) and (max-width: 1280px)': {
                            fontSize: '13px',
                            },
                            '@media (min-width: 1281px) and (max-width: 1440px)': {
                            fontSize: '14px',
                            },
                            '@media (min-width: 1441px)': {
                            fontSize: '15px',
                            },
                    }}  >
                        
                        {props.descripcion}

                    </Typography>
            
                    {/* ------------------------------------------------------------------------- */}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center'}}>
                    

                            <Button
                                component={Link}
                                href={props.repositorioGitHub}
                                target="_blank"
                                sx={{ 
                                        textTransform: 'none', 
                                        color: 'inherit',
                                        backgroundColor: 'transparent',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                        textDecoration: 'underline',
                                        color: 'blue',
                                        '&:hover': { 
                                            backgroundColor: '#ADD8E6',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                                            },
                                        '@media (max-width: 480px)': {
                                            
                                        },
                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                            fontSize: '10px',
                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            fontSize: '11px',
                                        },
                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                            fontSize: '12px',
                                        },
                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                            fontSize: '13px', 
                                        },
                                        '@media (min-width: 1441px)': {
                                            fontSize: '14px',
                                        }  
                                }}
                            >

                    
                                        
                                    <GitHubIcon sx={{
                                        fontSize: '22px', color: 'inherit',
                                        '@media (max-width: 480px)': {
                                                        
                                        },
                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                            fontSize: '18px',
                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            fontSize: '20px',
                                        },
                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                            fontSize: '22px',
                                        },
                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                            fontSize: '24px',
                                        },
                                        '@media (min-width: 1441px)': {
                                            fontSize: '26px',
                                        } 
                                    }} />
                            
                                    Repositorio
                            
                            </Button>
                        
                            <Button
                                    component={Link}
                                    href={props.repositorioGitHub}
                                    target="_blank"
                                    sx={{ 
                                            textTransform: 'none', 
                                            color: 'inherit',
                                            backgroundColor: 'transparent',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignContent: 'center',
                                            textDecoration: 'underline',
                                            color: 'blue',
                                            '&:hover': { 
                                                backgroundColor: '#ADD8E6',
                                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                                                },
                                            '@media (max-width: 480px)': {
                                                
                                            },
                                            '@media (min-width: 481px) and (max-width: 767px)': {
                                               fontSize: '10px',
                                            },
                                            '@media (min-width: 768px) and (max-width: 1024px)': {
                                                fontSize: '11px',
                                            },
                                            '@media (min-width: 1025px) and (max-width: 1280px)': {
                                                fontSize: '12px',
                                            },
                                            '@media (min-width: 1281px) and (max-width: 1440px)': {
                                                fontSize: '13px',
                                            },
                                            '@media (min-width: 1441px)': {
                                                fontSize: '14px',
                                            } 
                                    }}
                            >
                                
                                    <TravelExploreIcon sx={{
                                        fontSize: '22px', color: 'inherit',
                                         '@media (max-width: 480px)': {
                                                
                                        },
                                        '@media (min-width: 481px) and (max-width: 767px)': {
                                            fontSize: '18px',
                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            fontSize: '20px',
                                        },
                                        '@media (min-width: 1025px) and (max-width: 1280px)': {
                                            fontSize: '22px',
                                        },
                                        '@media (min-width: 1281px) and (max-width: 1440px)': {
                                            fontSize: '24px',
                                        },
                                        '@media (min-width: 1441px)': {
                                            fontSize: '26px',
                                        } 
                                        
                                    }} />
                                    
                                    PaginaWeb
                                
                            </Button>
                    
                    </Box>
            
        </CardContent>
          
    </Card>
  );
}
