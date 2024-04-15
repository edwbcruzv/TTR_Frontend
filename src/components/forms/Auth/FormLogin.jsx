import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../../utils/jwt_data'
import {
  Alert,
  AlertTitle,
  CircularProgress,
  TextField
} from '@mui/material'

import '../../../../public/styles/forms.css'
import { AuthContext } from '../../../context/AuthContext'

const FormLogin = () => {
  const {
    token,
    setToken,
    rol,
    setRol,
    id,
    setId,
    nombre,
    setNombre,
    isValid,
    setIsValid,

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

    login
  } = useContext(AuthContext)

  const navigate = useNavigate()
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
      <h2>Inicia sesión</h2>
      <div className='input-box'>
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
      </div>
      <div className='input-box'>
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
      </div>
      <button
        variant='outlined'
        color='primary'
        type='submit'
        className='btn-login'
      >
        Acceder
      </button>
      {!loading || <CircularProgress color='inherit' />}
      <button className='btn-recover'>¿Haz olvidado tu contraseña?. Da clic aquí</button>
      {error && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          Mensaje: <strong>{response.error}</strong>
        </Alert>
      )}
    </form>
  )
}

export default FormLogin
