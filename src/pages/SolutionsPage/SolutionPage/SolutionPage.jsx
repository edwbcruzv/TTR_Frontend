import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CrudSolucionProvider } from '../../../context/CrudSolucionContext'
import SolutionForm from './Components/SolutionForm'
import { CrudPracticaProvider } from '../../../context/CrudPracticaContext'
import PracticeView from './Components/PracticeView'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DataProvide from '../../../context/DataProvide'
import Swal from 'sweetalert2'

export default function SolutionPage () {
  const location = useLocation()
  const { solutionId, practiceId } = location.state || {}

  const navigate = useNavigate()

  const handleGoBack = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No has guardado los cambios. ¿Quieres salir sin guardar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-2)
      }
    })
  }

  return (
    <>
      <AppBar position='sticky' color='primary'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='go back'
            onClick={handleGoBack}
            edge='start'
            sx={{ marginRight: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <CrudPracticaProvider>

        <PracticeView practiceId={practiceId} />

      </CrudPracticaProvider>
      <DataProvide>
        <CrudSolucionProvider>

          <SolutionForm solutionId={solutionId} />

        </CrudSolucionProvider>
      </DataProvide>
    </>
  )
}
