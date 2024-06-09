import React from 'react'
import { Typography, Container, Grid, Box } from '@mui/material'
import teams from '../../images/codigohtml.jpg'

const Caso = () => {
  return (

    <section style={{ position: 'relative' }}>
      <img src={teams} alt='Estudiante' style={{ width: '100%', height: 'auto' }} />
      <Container>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
        >
          <Grid item xs={12} sm={6}>
            <Box textAlign='center' color='white'>
              <Typography variant='h4'>Pero ... ¿Cómo ayuda School Coder?</Typography>
              <Typography variant='body1'>
                Los profesores pueden integrar School Coder en su plan de estudios
                con facilidad, aprovechando sus capacidades interactivas para
                mejorar las lecciones de codificación y asignar ejercicios
                atractivos. Al incorporar School Coder en las actividades en el
                aula, los educadores pueden potenciar a los estudiantes para que
                desarrollen habilidades esenciales de alfabetización digital y
                codificación.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Caso
