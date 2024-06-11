import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function CardInscription ({ inscription }) {
  const {
    profesorNombre,
    grupoClave,
    grupoNombre,
    calificacion
  } = inscription

  const handleViewPractices = () => {
    // Lógica para manejar la acción de ver prácticas
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {grupoClave}: {grupoNombre}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='body1' color='text.secondary'>
              Grupo: {grupoNombre}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' color='text.secondary'>
              Profesor: {profesorNombre}
            </Typography>
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant='body2' color='text.secondary'>
              Calificación: {calificacion}
            </Typography>
          </Grid> */}
        </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size='small' onClick={handleViewPractices}>Ver Prácticas</Button>
      </CardActions> */}
    </Card>
  )
}
