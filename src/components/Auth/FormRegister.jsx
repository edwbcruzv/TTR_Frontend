import React, { useEffect, useState, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { TextField, Button, Box, Alert, AlertTitle, CircularProgress } from '@mui/material'
// import '../../styles/forms.css'
import { AuthContext } from '../../context/AuthContext'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../utils/environments'
import SessionContext from '../../context/SessionContext'
// import "../../styles/forms.css"

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
  const style_label = () => {

  }
  return (
    <Grid
      container
      spacing={1}
      direction='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      wrap='wrap'
    >
      <Grid item>
        <h2>Registrate</h2>
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
            {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
          </RadioGroup>
        </FormControl>

      </Grid>

      <form component='form' onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={1}
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          alignContent='center'
          wrap='wrap'
        >
          <h4>Llena todos los campos para poder registrarte</h4>
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

              placeholder='Correo electronico'
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
              helperText={
                errors.apellidoPaterno && errors.apellidoPaterno.message
              }

              placeholder='Apellido Paterno'
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
              helperText={
                errors.apellidoMaterno && errors.apellidoMaterno.message
              }

              placeholder='Apellido materno'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register('password', {
                required: { value: true, message: 'Es requerido' },
                minLength: {
                  value: 8,
                  message: 'Debe ser mayor de 8 caracteres'
                }
              })}
              id='password'
              label='Contraseña'
              type='password'
              variant='outlined'
              error={errors.password}
              helperText={errors.password && errors.password.message}

              placeholder='Contraseña'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register('confirm_password', {
                required: { value: true, message: 'Es requerido' },
                validate: (value) =>
                  value === watch('password') ||
                      'las contraseñas no son los mismos'
              })}
              id='confirm_password'
              label='Confirmar Contraseña'
              type='password'
              variant='outlined'
              error={errors.confirm_password}
              helperText={
                    errors.confirm_password && errors.confirm_password.message
                  }

              placeholder='Confirma contraseña'
            />
          </Grid>

          {valueRbtn === ROL_TEACHER && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('cedula')}
                  id='cedula'
                  label='Cedula'
                  type='text'
                  variant='outlined'
                  className='TextField-data'
                  placeholder='Cedula'
                />
              </Grid>

            </>
          )}

          {valueRbtn === ROL_STUDENT && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register('boleta')}
                  id='boleta'
                  label='Boleta'
                  type='text'
                  variant='outlined'
                  className='TextField-data'
                  placeholder='Boleta'
                />
              </Grid>

              {/* <Grid item><TextField {...register()} id='email' label="Email" type='text' variant='outlined' /></Grid> */}
            </>
          )}

          {valueRbtn && (
            <Grid item xs={12} sm={12} className='TextField-box'>
              <button variant='outlined' color='primary' type='submit' className='btn-register'>
                Crear
              </button>
            </Grid>
          )}
        </Grid>
        {loading && <Grid item xs={12} sm={12}> <CircularProgress color='inherit' /> </Grid>}

        {error && (
          <Grid item xs={12} sm={12}>
            <Alert severity='error'>
              <AlertTitle>Error</AlertTitle>
              Mensaje: <strong>{error.statusText}</strong>
            </Alert>
          </Grid>
        )}
      </form>
    </Grid>
  )
}

export default FormRegister
