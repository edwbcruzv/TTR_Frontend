import React, { useEffect, useState, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { TextField, Button, Box, Alert, AlertTitle, CircularProgress } from '@mui/material'
import { AuthContext } from '../../context/AuthContext'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../utils/environments'
import SessionContext from '../../context/SessionContext'

function FormRegister () {
  const [valueRbtn, setValueRbtn] = useState(null)
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
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

  const handleChangeRadioBtn = (event) => {
    setValueRbtn(event.target.value)
  }

  function onSubmit (data) {
    console.log(data)
    registerUser(data)
  }

  return (
    <Grid
      container
      spacing={2}
      direction='column'
      justifyContent='center'
      alignItems='center'
      wrap='wrap'
      sx={{ textAlign: 'center' }}
    >
      <Grid item xs={12}>
        <h2>Regístrate</h2>
        <FormControl>
          <h3>¿Qué perfil ocuparás en la aplicación?</h3>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            value={valueRbtn}
            onChange={handleChangeRadioBtn}
          >
            {isValidSession && rol === ROL_ADMIN && (
              <FormControlLabel
                {...register('rol')}
                value={ROL_ADMIN}
                control={<Radio />}
                label='Administrador'
              />
            )}
            {rol === ROL_TEACHER || (
              <FormControlLabel
                {...register('rol')}
                value={ROL_TEACHER}
                control={<Radio />}
                label='Profesor'
              />
            )}
            <FormControlLabel
              {...register('rol')}
              value={ROL_STUDENT}
              control={<Radio />}
              label='Estudiante'
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.paper'
        }}
      >

        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='center'
          wrap='wrap'
          sx={{ width: '100%' }}
        >
          <Grid item xs={12} sm={6}>
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
              placeholder='Nombre de usuario'
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('email', {
                required: { value: true, message: 'Es requerido' }
              })}
              id='email'
              label='Email'
              type='email'
              variant='outlined'
              error={errors.email}
              helperText={errors.email && errors.email.message}
              placeholder='Correo electrónico'
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              {...register('nombre', {
                required: { value: true, message: 'Es requerido' }
              })}
              id='nombre'
              label='Nombre'
              type='text'
              variant='outlined'
              error={errors.nombre}
              helperText={errors.nombre && errors.nombre.message}
              placeholder='Nombre'
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('apellidoPaterno', {
                required: { value: true, message: 'Es requerido' }
              })}
              id='apellidoPaterno'
              label='Apellido Paterno'
              type='text'
              variant='outlined'
              error={errors.apellidoPaterno}
              helperText={errors.apellidoPaterno && errors.apellidoPaterno.message}
              placeholder='Apellido Paterno'
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('apellidoMaterno', {
                required: { value: true, message: 'Es requerido' }
              })}
              id='apellidoMaterno'
              label='Apellido Materno'
              type='text'
              variant='outlined'
              error={errors.apellidoMaterno}
              helperText={errors.apellidoMaterno && errors.apellidoMaterno.message}
              placeholder='Apellido Materno'
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('password', {
                required: { value: true, message: 'Es requerido' },
                minLength: { value: 8, message: 'Debe tener al menos 8 caracteres' }
              })}
              id='password'
              label='Contraseña'
              type='password'
              variant='outlined'
              error={errors.password}
              helperText={errors.password && errors.password.message}
              placeholder='Contraseña'
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('confirm_password', {
                required: { value: true, message: 'Es requerido' },
                validate: (value) =>
                  value === watch('password') || 'Las contraseñas no coinciden'
              })}
              id='confirm_password'
              label='Confirmar Contraseña'
              type='password'
              variant='outlined'
              error={errors.confirm_password}
              helperText={errors.confirm_password && errors.confirm_password
                .message}
              placeholder='Confirmar Contraseña'
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>

          {valueRbtn === ROL_TEACHER && (
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('cedula')}
                id='cedula'
                label='Cédula'
                type='text'
                variant='outlined'
                className='TextField-data'
                placeholder='Cédula'
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
          )}

          {valueRbtn === ROL_STUDENT && (
            <Grid item xs={12} sm={6}>
              <TextField
                {...register('boleta')}
                id='boleta'
                label='Boleta'
                type='text'
                variant='outlined'
                className='TextField-data'
                placeholder='Boleta'
                fullWidth
                sx={{ mb: 2 }}
              />
            </Grid>
          )}

          {valueRbtn && (
            <Grid item xs={12} sm={12} sx={{ textAlign: 'center' }}>
              <Button
                variant='outlined'
                color='primary'
                type='submit'
                className='btn-register'
              >
                Crear
              </Button>
            </Grid>
          )}
        </Grid>

        {loading && (
          <Grid item xs={12} sm={12}>
            <CircularProgress color='inherit' />
          </Grid>
        )}

        {error && (
          <Grid item xs={12} sm={12}>
            <Alert severity='error'>
              <AlertTitle>Error</AlertTitle>
              Mensaje: <strong>{error.statusText}</strong>
            </Alert>
          </Grid>
        )}
      </Box>
    </Grid>
  )
}

export default FormRegister
