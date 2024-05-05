import { Button, Divider, Grid, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CrudUsuarioContext from '../../../context/CrudUsuarioContext'

export default function EditAdmin ({ username }) {
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

    getUsuario,
    getAllUsuarios,
    updateUsuario,
    deleteUsuario
  } = useContext(CrudUsuarioContext)

  useEffect(() => {
    getUsuario(username)
    console.log('Response: ', response)
  }, [])

  function onSubmit (data) {
    // console.log(data)
    updateUsuario(data)
  }
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      wrap='wrap'
    >

      <form component='form' onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          alignContent='center'
          wrap='wrap'
        >

          <Grid item xs={12} sm={6} className='input-box'>
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
          <Grid item xs={12} sm={6} className='input-box'>
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
              className='input-data'
            />
          </Grid>
          <Grid item xs={12} sm={12} className='input-box'>
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
              className='input-data'
            />
          </Grid>
          <Grid item xs={12} sm={6} className='input-box'>
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
              className='input-data'
            />
          </Grid>
          <Grid item xs={12} sm={6} className='input-box'>
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
              className='input-data'
            />
          </Grid>

          <Grid item xs={12} sm={12} className='input-box'>
            <Button variant='outlined' color='primary' type='submit' className='btn-register'>
              Actualizar
            </Button>

          </Grid>
        </Grid>

      </form>

    </Grid>
  )
}
