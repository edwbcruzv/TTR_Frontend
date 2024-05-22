import { Button, Divider, Grid, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CrudUsuarioContext from '../../../context/CrudUsuarioContext'
import CrudProfesorContext from '../../../context/CrudProfesorContext'
import "../../../styles/forms.css"

export default function EditTeacher ({ username, goBack }) {
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

    getProfesor,
    getAllProfesores,
    updateProfesor,
    deleteProfesor
  } = useContext(CrudProfesorContext)

  useEffect(() => {
    getProfesor(username)
    console.log('Response: ', response)
  }, [])

  async function onSubmit (data) {
    // console.log(data)
    await updateProfesor(data)
    goBack()
  }
  return (
    <Grid
      container item
      spacing={0}
      direction='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      wrap='wrap'
    >

      <form component='form' onSubmit={handleSubmit(onSubmit)} className='form-reload'>
        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          alignContent='center'
          wrap='wrap'
        >

          <div item xs={12} sm={6} className='input-box'>
            <input
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
              disabled
            />
          </div>
          <div item xs={12} sm={6} className='input-box'>
            <input
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
              disabled
            />
          </div>
          <div item xs={12} sm={12} className='input-box'>
            <input
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
          </div>
          <div item xs={12} sm={6} className='input-box'>
            <input
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
          </div>
          <div item xs={12} sm={6} className='input-box'>
            <input
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
          </div>

          <div item xs={12} sm={6} className='input-box'>
            <input
              {...register('cedula')}
              id='cedula'
              label='Cedula'
              type='text'
              variant='outlined'
              className='input-data'
            />
          </div>

          <div item xs={12} sm={12} className='input-box'>
            <button variant='outlined' color='primary' type='submit' className='btn-reload'>
              Actualizar
            </button>

          </div>
        </Grid>

      </form>

    </Grid>
  )
}
