import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material'
import fondoimg from '../../images/profesor.jpg'

const MetodoCasos = () => {
  return (
    <section style={{ position: 'relative' }}>
      <img src={fondoimg} alt='idea' style={{ width: '100%', height: 'auto' }} />
      <Container>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        >
          <Grid item xs={12} md={6}>
            <Box textAlign='center' color='black'>
              <Typography variant='h4'>
                ¿Cómo funciona School Coder?
              </Typography>
              <Typography variant='body1' gutterBottom>
                School Coder funciona como un potente compilador de HTML y CSS, ofreciendo a los estudiantes un ambiente perfecto para escribir, experimentar y mejorar
                su código en tiempo real. Ya sea que los estudiantes estén explorando el desarrollo web por primera vez o perfeccionando sus habilidades para proyectos
                más avanzados, School Coder proporciona una interfaz intuitiva adaptada a sus necesidades educativas.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default MetodoCasos
