import React, { useContext } from 'react'
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
import useAuth from '../../../hooks/useAuth'

const FormLogin = () => {
  const {
    isValid,
    setIsValid
  } = useAuth()
  const {

    response,
    error,
    loading,

    register,
    handleSubmit,
    errors,

    login
    // registerUser,
    // recoveryByEmail
  } = useContext(AuthContext)
  const navigate = useNavigate()

  function onSubmit (data) {
    console.log(data)
    login(data)
    if (response.status === 200) {
      console.log(response)

      const [header, payload, signature] = response.data.jwt.split('.')
      const payloadJson = JSON.parse(atob(payload))

      // switch (payloadJson.rol) {
      //   case ROL_ADMIN:
      //     navigate('/admin')
      //     break
      //   case ROL_TEACHER:
      //     navigate('/teacher')
      //     break
      //   case ROL_STUDENT:
      //     navigate('/student')
      //     break
      //   default:
      //     console.log('sin Rol')
      //     break
      // }
      console.log('Cambiando a Dashboard.', payloadJson.rol)
    } else {
      console.log(error)
    }
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
          Mensaje: <strong>{res.error}</strong>
        </Alert>
      )}
    </form>
  )
}

export default FormLogin
