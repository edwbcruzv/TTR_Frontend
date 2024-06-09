import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Snackbar from '@mui/material/Snackbar'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useNavigate } from 'react-router-dom'
import { CrudInscripcionProvider } from '../../../context/CrudInscripcionContext'
import ModalViewStudents from './ModalViewStudents'
import { ROL_ADMIN, ROL_TEACHER } from '../../../utils/environments'
import SessionContext from '../../../context/SessionContext'
import copy from 'clipboard-copy'
import CrudGrupoContext from '../../../context/CrudGrupoContext'

export default function CardGroup ({ group }) {
  const {
    response,
    error,
    loading,
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,
    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm,
    getAllGrupos,
    getGrupo,
    getAllGruposByProfesorUsername,
    createGrupo,
    updateGrupo,
    deleteGrupo
  } = React.useContext(CrudGrupoContext)
  const { rol } = React.useContext(SessionContext)
  const {
    id,
    clave,
    nombre,
    codigo,
    profesorNombre,
    equiposIds,
    estudiantesUsernames
  } = group

  const navigate = useNavigate()

  const handleGroup = () => {
    const route = rol === ROL_TEACHER ? '/teacher/group' : '/admin/group'
    navigate(route, { state: { groupId: id, groupLabel: clave + ' - ' + nombre } })
  }

  const [open, setOpen] = React.useState(false)
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)

  const handleOpen = () => setOpen(true)
  const handleCloseSnackbar = () => setSnackbarOpen(false)

  const handleCopyCode = () => {
    copy(codigo)
    setSnackbarOpen(true)
  }

  // Obtener el número de equipos y estudiantes
  const numEquipos = equiposIds ? equiposIds.length : 0
  const numEstudiantes = estudiantesUsernames ? estudiantesUsernames.length : 0

  return (
    <Card sx={{ maxWidth: 350, m: 2, borderRadius: 2 }}>
      <CrudInscripcionProvider>
        <ModalViewStudents groupId={id} open={open} setOpen={setOpen} />
      </CrudInscripcionProvider>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography gutterBottom variant='h5' component='div' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              {clave}
            </Typography>
            <Typography variant='h6' color='text.primary'>
              {nombre}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent='flex-end'>
            <Tooltip title='Copiar Código'>
              <IconButton size='small' onClick={handleCopyCode} aria-label='copy code'>
                <ContentCopyIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' color='text.secondary'>
              Código: {codigo}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Profesor: {profesorNombre}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Equipos: {numEquipos}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Estudiantes: {numEstudiantes}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container spacing={2}>
          {rol === ROL_TEACHER && (
            <Grid item xs={12} sm={12}>
              <Button onClick={handleGroup} variant='contained' color='primary'>
                Administrar
              </Button>
            </Grid>
          )}
          <Grid item xs={12} sm={12}>
            <Button onClick={handleOpen} variant='outlined' color='secondary'>
              Alumnos Inscritos
            </Button>
          </Grid>
          {rol === ROL_ADMIN && (
            <Grid item xs={12} sm={12}>
              <Button onClick={() => deleteGrupo(id)} variant='contained' color='warning'>
                Eliminar
              </Button>
            </Grid>
          )}
        </Grid>
      </CardActions>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`Código "${codigo}" copiado al portapapeles`}
      />
    </Card>
  )
}
