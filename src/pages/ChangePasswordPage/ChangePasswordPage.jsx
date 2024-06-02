import { AppBar, Button, Container, Divider, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function ChangePasswordPage () {
  return (
    <Container>

      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='center'
      >

        <AppBar position='static' color='primary'>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <Button
                color='secondary'
                startIcon={<ArrowBackIcon />}
              >
                Regresar
              </Button>
            </IconButton>
            <Typography variant='h6' />
          </Toolbar>
        </AppBar>
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

              <Divider style={{ margin: '16px 0' }} />
              <Grid item xs={12} sm={6} className='input-box'>
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
                  className='input-data'
                />
              </Grid>

              <Grid item xs={12} sm={6} className='input-box'>
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

      </Grid>
    </Container>
  )
}
