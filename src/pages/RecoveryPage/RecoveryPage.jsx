import React, { useContext, useState } from 'react'
import { AppBar, Toolbar, Typography, Container, TextField, Button } from '@mui/material'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthContext'

const RecoveryPage = () => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [showEmailForm, setShowEmailForm] = useState(true)
  const [showCodeForm, setShowCodeForm] = useState(false)

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

    login,
    registerUser,
    recoveryByEmail
  } = useContext(AuthContext)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el código de recuperación al correo electrónico
    // Simulamos el envío del código con un setTimeout
    setTimeout(() => {
      setShowEmailForm(false)
      setShowCodeForm(true)
      Swal.fire({
        icon: 'success',
        title: 'Código enviado',
        text: 'Se ha enviado un código de recuperación a tu correo electrónico.'
      })
    }, 2000)
  }

  const handleCodeSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para validar el código de recuperación ingresado por el usuario
    // Simulamos la validación del código
    if (code === '123456') {
      // Aquí iría la lógica de redireccionamiento
      // Simulamos el redireccionamiento con un alert
      alert('Código válido. Redireccionando...')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Código incorrecto',
        text: 'El código de recuperación ingresado es incorrecto. Por favor, inténtalo nuevamente.'
      })
    }
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Recuperación de Contraseña</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm' style={{ marginTop: '2rem' }}>
        {showEmailForm && (
          <form onSubmit={handleEmailSubmit}>
            <Typography variant='h6' gutterBottom>
              Ingresa tu correo electrónico para recibir un código de recuperación
            </Typography>
            <TextField
              type='email'
              label='Correo Electrónico'
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: '1rem' }}
            />
            <Button variant='contained' color='primary' type='submit'>
              Enviar Código a Correo
            </Button>
          </form>
        )}
        {showCodeForm && (
          <form onSubmit={handleCodeSubmit}>
            <Typography variant='h6' gutterBottom>
              Ingresa el código de recuperación enviado a tu correo electrónico
            </Typography>
            <TextField
              type='text'
              label='Código de Recuperación'
              fullWidth
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ marginBottom: '1rem' }}
            />
            <Button variant='contained' color='primary' type='submit'>
              Validar Código
            </Button>
          </form>
        )}
      </Container>
    </div>
  )
}

export default RecoveryPage
