import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'
import Tooltip from '@mui/material/Tooltip'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SessionContext from '../../../../context/SessionContext'
import CrudEquipoContext from '../../../../context/CrudEquipoContext'
import { ROL_STUDENT, ROL_TEACHER } from '../../../../utils/environments'

export default function CardTeam ({ team }) {
  const { rol } = useContext(SessionContext)
  const { id, nombre, estudiantesUsernames, solucionesIds, grupoId } = team

  const { getEquipo, deleteEquipo } = useContext(CrudEquipoContext)

  const navigate = useNavigate()
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [snackbarMessage, setSnackbarMessage] = React.useState('')

  const handleClick = () => {
    if (rol === ROL_TEACHER) {
      navigate('/teacher/solutions', { state: { equipo: team } })
    } else if (rol === ROL_STUDENT) {
      navigate('/student/solutions', { state: { equipo: team } })
    }
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  const handleEdit = () => {
    getEquipo(id)
    setSnackbarMessage('Equipo cargado para edición')
    setSnackbarOpen(true)
  }

  const handleDelete = () => {
    deleteEquipo(id, grupoId)
    setSnackbarMessage('Equipo eliminado')
    setSnackbarOpen(true)
  }

  return (
    <Card sx={{ maxWidth: 400, m: 2, borderRadius: 2 }}>
      <CardContent>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              {nombre}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body2' color='text.secondary'>
              {estudiantesUsernames.length} integrantes
            </Typography>
          </Grid>
        </Grid>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1.5 }}>
          {solucionesIds ? solucionesIds.length : 0} prácticas
        </Typography>
      </CardContent>
      <CardActions>

        {rol === ROL_TEACHER && <Button onClick={handleEdit} color='primary'>Editar Equipo</Button>}
        <Button onClick={handleClick} color='secondary'>Ver Prácticas</Button>
        {rol === ROL_TEACHER && <Button onClick={handleDelete} color='warning'>Eliminar Equipo</Button>}
      </CardActions>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Card>
  )
}
