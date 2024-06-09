import React from 'react'
import { Container, Typography, Grid, Box, Button } from '@mui/material'
import girl from '../../images/codigo.jpg'

const Fondoinicio = () => {
  return (
    <section style={{ position: 'relative' }}>
      <img src={girl} alt='Estudiante' style={{ width: '100%', height: 'auto' }} />
      <Container>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        >
          <Grid item xs={12} md={6}>
            <Box textAlign='center' color='white'>
              <Typography variant='h2' gutterBottom>
                School Coder
              </Typography>
              <Typography variant='h4' gutterBottom>
                Ejecución de código HTML en tiempo real
              </Typography>
              <Typography variant='subtitle1' gutterBottom>
                Herramienta didáctica de apoyo para la evaluación de prácticas hechas en HTML y CSS
              </Typography>
              <Typography variant='body1' gutterBottom>
                Presentamos "School Coder" – la aplicación ideal para que los estudiantes se sumerjan en el mundo de HTML y CSS directamente desde el aula. School
                Coder es una plataforma innovadora diseñada para facilitar el aprendizaje práctico y ejercicios de codificación en un entorno educativo.
              </Typography>
              <Button variant='contained' color='primary' size='large' style={{ marginTop: '1.5rem' }}>
                Comenzar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Fondoinicio
