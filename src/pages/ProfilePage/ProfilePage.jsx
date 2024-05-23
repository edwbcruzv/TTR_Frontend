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
import { useLocation, useNavigate } from 'react-router-dom'

export default function ProfilePage () {
  const navigate = useNavigate()
  const goBack = () => {
    // Navega hacia atrás en la historia
    navigate(-1)
  }
  const location = useLocation()
  const { usernameView, rolView } = location.state
  return (

    <Container>

      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
      >

        <AppBar position='static' color='primary'>
          <Toolbar>
            <IconButton edge='start' color='inherit' onClick={goBack}>

              <Button variant='contained' color='info' startIcon={<ArrowBackIcon />}>
                Regresar
              </Button>
            </IconButton>
            <Typography variant='h6' />
          </Toolbar>
        </AppBar>
        {
          rolView === ROL_ADMIN &&
            <CrudUsuarioProvider>
              <EditAdmin username={usernameView} goBack={goBack} />
            </CrudUsuarioProvider>
        }

        {
          rolView === ROL_STUDENT &&
            <CrudEstudianteProvider>
              <EditStudent username={usernameView} goBack={goBack} />
            </CrudEstudianteProvider>

        }

        {
          rolView === ROL_TEACHER &&
            <CrudProfesorProvider>
              <EditTeacher username={usernameView} goBack={goBack} />
            </CrudProfesorProvider>

        }

      </Grid>
    </Container>

  )
}
