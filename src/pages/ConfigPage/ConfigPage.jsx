import React from 'react'
import { Container, Typography, Box, Grid, TextField, Button, Paper, Divider } from '@mui/material'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'

export default function ConfigPage () {
  return (
    <MiniDrawerFrame>
      <Container>
        <Typography variant='h4' sx={{ mb: 4, mt: 2 }}>
          Configuraciones de la Cuenta
        </Typography>

        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 2 }}>
            Perfil
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Nombre' variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Apellido' variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Correo Electrónico' variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Teléfono' variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary'>
                Guardar Cambios
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 2 }}>
            Seguridad
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Contraseña Actual' type='password' variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Nueva Contraseña' type='password' variant='outlined' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Confirmar Nueva Contraseña' type='password' variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary'>
                Cambiar Contraseña
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 2 }}>
            Notificaciones
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label='Correo Electrónico para Notificaciones' variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary'>
                Guardar Cambios
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant='h6' sx={{ mb: 2 }}>
            Preferencias
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label='Idioma' variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary'>
                Guardar Cambios
              </Button>
            </Grid>
          </Grid>
        </Paper> */}
      </Container>
    </MiniDrawerFrame>
  )
}
