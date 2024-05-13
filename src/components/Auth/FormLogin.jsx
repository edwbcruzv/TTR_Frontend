import React, { useContext, useEffect } from 'react'
import {
  Alert,
  AlertTitle,
  CircularProgress,
  Grid,
  TextField
} from '@mui/material'

import "../../styles/forms.css"
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
    className='form-login'
  >
    <h2>Inicia sesión</h2>
    <div className="input-box">
      <input
        {...register("username", {
          required: { value: true, message: "Es requerido" },
        })}
        id="username"
        label="Username"
        type="text"
        error={errors.username}
        helperText={errors.username && errors.username.message}
        className="input-data"
        placeholder="Nombre de usuario"
      />
      <i class="fa-solid fa-user"></i>
    </div>
    <div className="input-box">
      <input
        {...register("password", {
          required: { value: true, message: "Es requerido" },
        })}
        id="password"
        label="Contraseña"
        type="password"
        error={errors.password}
        helperText={errors.password && errors.password.message}
        className="input-data"
        placeholder="Contraseña"
      />
      <i class="fa-solid fa-lock"></i>
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
