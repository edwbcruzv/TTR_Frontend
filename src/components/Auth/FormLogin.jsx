import React, { useContext, useEffect } from 'react'
import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  Box
} from '@mui/material'
import { AuthContext } from '../../context/AuthContext'
import '../../styles/forms.css'

const FormLogin = () => {
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

  useEffect(() => {
    console.log('Response: ', response)
  }, [response])

  function onSubmit (data) {
    // console.log(data)
    login(data)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: 500,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.paper'
        }}
      >
        <Typography variant='h5' component='h2' gutterBottom>
          Inicia sesión
        </Typography>
        <Grid container spacing={2} direction='column'>
          <Grid item>
            <TextField
              {...register('username', {
                required: { value: true, message: 'Es requerido' }
              })}
              id='username'
              label='Nombre de usuario'
              type='text'
              fullWidth
              error={!!errors.username}
              helperText={errors.username && errors.username.message}
            />
          </Grid>
          <Grid item>
            <TextField
              {...register('password', {
                required: { value: true, message: 'Es requerido' }
              })}
              id='password'
              label='Contraseña'
              type='password'
              fullWidth
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
            />
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
            >
              Acceder
            </Button>
          </Grid>
          {loading && (
            <Grid item>
              <CircularProgress color='inherit' />
            </Grid>
          )}
          <Grid item>
            <Button
              className='btn-recover'
              onClick={() => recoveryByEmail()}
              fullWidth
            >
              ¿Haz olvidado tu contraseña?. Da clic aquí
            </Button>
          </Grid>
          {error && (
            <Grid item>
              <Alert severity='error'>
                <AlertTitle>Error</AlertTitle>
                Mensaje: <strong>{error.statusText}</strong>
              </Alert>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default FormLogin
