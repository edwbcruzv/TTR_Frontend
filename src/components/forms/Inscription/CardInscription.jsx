import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export default function CardInscription ({ inscription }) {
  const {
    grupo_nombre,
    profesor_nombre,
    calificacion,
    clave
  } = inscription

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='/images/fondo_card.jpg'
        title='green iguana'
      />
      <CardContent>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Typography gutterBottom variant='h5' component='div'>
              {grupo_nombre}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' color='text.secondary'>
              {clave}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body2' color='text.secondary'>
          Profesor: {profesor_nombre}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant='body2' color='text.secondary'>
          Calificacion:{calificacion}
        </Typography>
      </CardActions>
    </Card>
  )
}
