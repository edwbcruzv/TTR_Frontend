import React, { useContext, useEffect } from 'react'
import {
  Alert,
  AlertTitle,
  CircularProgress,
  Grid,
  TextField
} from '@mui/material'

import '../../../public/styles/forms.css'
import { AuthContext } from '../../context/AuthContext'

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
    console.log(data)
    login(data)
  }

  return (
    <form
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      className='form-login'
    >
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
      >

        <h2>Inicia sesión</h2>
        <Grid item xs={12} sm={12} className='input-box'>
          <TextField
            {...register('username', {
              required: { value: true, message: 'Es requerido' }
            })}
            id='username'
            label='Username'
            type='text'
            variant='outlined'
            error={errors.username}
            helperText={errors.username && errors.username.message}
            className='input-data'
          />
        </Grid>
        <Grid item xs={12} sm={12} className='input-box'>
          <TextField
            {...register('password', {
              required: { value: true, message: 'Es requerido' }
            })}
            id='password'
            label='Contraseña'
            type='password'
            variant='outlined'
            error={errors.password}
            helperText={errors.password && errors.password.message}
            className='input-data'
          />
        </Grid>
        <Grid item xs={12} sm={12}>

          <button
            variant='outlined'
            color='primary'
            type='submit'
            className='btn-login'
          >
            Acceder
          </button>
        </Grid>
        {loading && <Grid item xs={12} sm={12}> <CircularProgress color='inherit' /> </Grid>}
        <Grid item xs={12} sm={12}> <button className='btn-recover'>¿Haz olvidado tu contraseña?. Da clic aquí</button> </Grid>
        {error && (
          <Grid item xs={12} sm={12}>

            <Alert severity='error'>
              <AlertTitle>Error</AlertTitle>
              Mensaje: <strong>{error.statusText}</strong>
            </Alert>
          </Grid>
        )}
      </Grid>
    </form>
  )
}

export default FormLogin
