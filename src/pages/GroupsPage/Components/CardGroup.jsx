import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import copy from 'clipboard-copy'
import { useNavigate } from 'react-router-dom'
import ModalViewStudents from './ModalViewStudents'

export default function CardGroup ({ group }) {
  const {
    id,
    clave,
    nombre,
    codigo,
    profesorNombre
  } = group

  const navigate = useNavigate()
  const handleGroup = () => {
    navigate(`/teacher/group/${id}`, { replace: true }
    )
  }
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleCopyCode = () => {
    copy(codigo)
    window.alert(`Código "${codigo}" copiado al portapapeles`)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='/images/fondo_card.jpg'
        title='green iguana'
      />
      <ModalViewStudents group_id={id} open={open} setOpen={setOpen} />
      <CardContent>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Typography gutterBottom variant='h5' component='div'>
              {clave}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' color='text.secondary'>
              {codigo}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body2' color='text.secondary'>
          {nombre}:{profesorNombre}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={handleGroup}>Equipos</Button>
        <Button size='small' onClick={handleOpen}>Alumnos</Button>
        <Button size='small' onClick={handleCopyCode}>
          Copiar Código
        </Button>
      </CardActions>
    </Card>
  )
}
