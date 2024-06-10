import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { ROL_STUDENT, ROL_TEACHER } from '../../../utils/environments'
import SessionContext from '../../../context/SessionContext'

export default function CardSolution ({ solucion }) {
  const { token, rol, usernameSession } = React.useContext(SessionContext)
  const navigate = useNavigate()
  const {
    id,
    practicaId,
    practicaTitulo,
    practicaDescripcion,
    estudianteNombre,
    equipoNombre,
    fechaUltimaEdicion,
    fechaLimiteEntrega,
    calificacion
  } = solucion

  const handleView = () => {
    if (rol === ROL_TEACHER) {
      navigate('/teacher/solution', { state: { solutionId: id, practiceId: practicaId } })
    } else if (rol === ROL_STUDENT) {
      navigate('/student/solution', { state: { solutionId: id, practiceId: practicaId } })
    }
  }

  const getStatusChip = () => {
    if (calificacion === 0) {
      return <Chip label='No Calificado' color='error' />
    }
    return <Chip label='Calificado' color='primary' />
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`
    }
    return text
  }

  return (
    <Card sx={{ maxWidth: 345, m: 2, borderRadius: 2 }}>
      <CardContent>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item xs={8}>
            <Typography gutterBottom variant='h6' component='div' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              {practicaTitulo}
            </Typography>
          </Grid>
          <Grid item xs={4} container justifyContent='flex-end'>
            {getStatusChip()}
          </Grid>
        </Grid>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1.5 }}>
          {truncateText(practicaDescripcion, 100)}
        </Typography>
        {estudianteNombre && (
          <Typography variant='body2' color='text.secondary'>
            Estudiante: {estudianteNombre}
          </Typography>
        )}
        {equipoNombre && (
          <Typography variant='body2' color='text.secondary'>
            Equipo: {equipoNombre}
          </Typography>
        )}
        <Typography variant='body2' color='text.secondary'>
          Última Edición: {format(new Date(fechaUltimaEdicion), 'yyyy-MM-dd HH:mm')}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Fecha Límite: {format(new Date(fechaLimiteEntrega), 'yyyy-MM-dd HH:mm')}
        </Typography>
        {calificacion !== 0 && (
          <Typography variant='body2' color='text.secondary'>
            Calificación: {calificacion}
          </Typography>
        )}
      </CardContent>
      <CardActions>

        {rol === ROL_STUDENT &&
          <Tooltip title='Ver Detalles'>
            <Button onClick={handleView} size='small' variant='contained' color='primary'>
              Resolver
            </Button>
          </Tooltip>}

        {rol === ROL_TEACHER &&
          <Tooltip title='Calificar'>
            <Button onClick={handleView} size='small' variant='outlined' color='secondary'>
              Ver/Calificar
            </Button>
          </Tooltip>}
      </CardActions>
    </Card>
  )
}
