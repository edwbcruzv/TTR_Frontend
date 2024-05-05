import { Button, Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//     textAlign: 'center'
//   },
//   heading: {
//     marginBottom: theme.spacing(2)
//   },
//   paragraph: {
//     marginBottom: theme.spacing(4)
//   }
// }))
export default function NotFoundPage () {
  // const classes = useStyles()
  const navigate = useNavigate()

  const goBack = () => {
    // Navega hacia atrás en la historia
    navigate(-1)
  }

  return (
    <Container>
      <Typography variant='h1'>
        404 - Página no encontrada
      </Typography>
      <Typography variant='body1'>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>
      <Button variant='contained' color='primary' onClick={goBack}>
        Regresar
      </Button>
    </Container>
  )
}
