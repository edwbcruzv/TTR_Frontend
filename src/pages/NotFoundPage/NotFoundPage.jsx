import React from 'react'
import { Button, Container, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function NotFoundPage () {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <Container sx={{ textAlign: 'center', mt: 5 }}>
      <Box sx={{ mb: 3 }}>
        <img
          src='https://www.ipn.mx/assets/files/main/img/Home/imgError404-02.gif'
          alt='404 Not Found'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
      <Typography variant='h1' sx={{ fontSize: '3rem', fontWeight: 'bold', mb: 2 }}>
        404 - Página no encontrada
      </Typography>
      <Typography variant='body1' sx={{ mb: 4 }}>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button
          variant='contained'
          color='primary'
          onClick={goBack}
          startIcon={<ArrowBackIcon />}
        >
          Regresar
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={goHome}
          startIcon={<HomeIcon />}
        >
          Ir al Inicio
        </Button>
      </Box>
    </Container>
  )
}
