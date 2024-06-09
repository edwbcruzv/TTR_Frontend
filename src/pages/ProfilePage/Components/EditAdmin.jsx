import React, { useContext, useEffect } from 'react'
import { Button, Divider, Grid, TextField, CircularProgress, Box, Typography } from '@mui/material'
import CrudUsuarioContext from '../../../context/CrudUsuarioContext'

export default function EditAdmin ({ username, goBack }) {
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
  }, [])

  async function onSubmit (data) {
    await updateUsuario(data)
    goBack()
  }

  if (loading) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ mt: 4 }}
    >
      <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', maxWidth: 600 }}>
        <Typography variant='h5' gutterBottom>
          Editar Administrador
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('username', { required: 'Es requerido' })}
              id='username'
              label='Username'
              type='text'
              variant='outlined'
              fullWidth
              error={!!errors.username}
              helperText={errors.username?.message}

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('email', { required: 'Es requerido' })}
              id='email'
              label='Email'
              type='email'
              variant='outlined'
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...register('nombre', { required: 'Es requerido' })}
              id='nombre'
              label='Nombre'
              type='text'
              variant='outlined'
              fullWidth
              error={!!errors.nombre}
              helperText={errors.nombre?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('apellidoPaterno', { required: 'Es requerido' })}
              id='apellidoPaterno'
              label='Apellido Paterno'
              type='text'
              variant='outlined'
              fullWidth
              error={!!errors.apellidoPaterno}
              helperText={errors.apellidoPaterno?.message}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register('apellidoMaterno', { required: 'Es requerido' })}
              id='apellidoMaterno'
              label='Apellido Materno'
              type='text'
              variant='outlined'
              fullWidth
              error={!!errors.apellidoMaterno}
              helperText={errors.apellidoMaterno?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' color='primary' type='submit' fullWidth>
              Actualizar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
