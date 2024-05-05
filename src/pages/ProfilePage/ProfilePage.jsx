import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Button from '@mui/material/Button'
import { Container, Grid } from '@mui/material'
import EditAdmin from './Components/EditAdmin'
import { CrudUsuarioProvider } from '../../context/CrudUsuarioContext'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../utils/environments'
import { CrudEstudianteProvider } from '../../context/CrudEstudianteContext'
import { CrudProfesorProvider } from '../../context/CrudProfesorContext'
import EditStudent from './Components/EditStudent'
import EditTeacher from './Components/EditTeacher'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage ({ username, rol }) {
  rol = ROL_TEACHER

  const navigate = useNavigate()

  const goBack = () => {
    // Navega hacia atrás en la historia
    navigate(-1)
  }
  return (

    <Container>

      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
      >

        <AppBar position='static' color='primary'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <Button
                color='secondary'
                startIcon={<ArrowBackIcon />}
                onClick={goBack}
              >
                Regresar
              </Button>
            </IconButton>
            <Typography variant='h6' />
          </Toolbar>
        </AppBar>
        {
          rol === ROL_ADMIN &&
            <CrudUsuarioProvider>
              <EditAdmin username='edwin' />
            </CrudUsuarioProvider>
        }

        {
          rol === ROL_STUDENT &&
            <CrudEstudianteProvider>
              <EditStudent username='edwin' />
            </CrudEstudianteProvider>

        }

        {
          rol === ROL_TEACHER &&
            <CrudProfesorProvider>
              <EditTeacher username='edwin_teacher' />
            </CrudProfesorProvider>

        }

      </Grid>
    </Container>

  )
}
