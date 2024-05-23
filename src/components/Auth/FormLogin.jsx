import React, { useContext, useEffect } from 'react'
import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Grid,
  TextField
} from '@mui/material'

import '../../styles/forms.css'
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
    console.log('Responsennnnn: ', response)
  }, [response])

  function onSubmit (data) {
    console.log(data)
    login(data)
  }

  return (
    <form
      component='form'
      onSubmit={handleSubmit(onSubmit)}

    >
      <Grid
        container
        spacing={1}
        direction='column'
        justifyContent='center'
        alignItems='center'
        alignContent='center'
        wrap='wrap'
      >
        <h2>Inicia sesión</h2>
        <Grid>
          <TextField
            {...register('username', {
              required: { value: true, message: 'Es requerido' }
            })}
            id='username'
            label='Username'
            type='text'
            error={errors.username}
            helperText={errors.username && errors.username.message}

            placeholder='Nombre de usuario'
          />
          <i class='fa-solid fa-user' />
        </Grid>
        <Grid>
          <TextField
            {...register('password', {
              required: { value: true, message: 'Es requerido' }
            })}
            id='password'
            label='Contraseña'
            type='password'
            error={errors.password}
            helperText={errors.password && errors.password.message}

            placeholder='Contraseña'
          />
          <i class='fa-solid fa-lock' />
        </Grid>
        <Button
          variant='outlined'
          color='primary'
          type='submit'
        >
          Acceder
        </Button>
        {!loading || <CircularProgress color='inherit' />}
        <Button className='btn-recover'>¿Haz olvidado tu contraseña?. Da clic aquí</Button>
        {error && (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            Mensaje: <strong>{response.error}</strong>
          </Alert>
        )}

      </Grid>
    </form>
  )
}

export default FormLogin
