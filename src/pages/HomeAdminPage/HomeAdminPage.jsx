import React from 'react'
import { Box, Card, CardContent, Typography, Grid, Paper } from '@mui/material'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

export default function HomeAdminPage () {
  return (
    <MiniDrawerFrame>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
        sx={{ backgroundColor: '#f5f5f5', padding: 3 }}
      >
        <Card sx={{ maxWidth: 800, width: '100%', borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center'>
              <Grid item>
                <AdminPanelSettingsIcon color='primary' sx={{ fontSize: 60 }} />
              </Grid>
              <Grid item>
                <Typography variant='h3' component='div' gutterBottom>
                  Bienvenido Administrador
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Esta es la página principal del administrador. Desde aquí, puedes gestionar usuarios, revisar practicas y acceder a todas las funcionalidades administrativas.
                </Typography>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Typography variant='h5' component='div' gutterBottom>
                Funcionalidades disponibles:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Gestión de Usuarios
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Añadir, editar y eliminar cuentas de usuario.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Gestión de grupos
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Asignar grupos a los profesores, eliminarlos y administrar alos alumnos,
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Configuración del Sistema
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Ajusta la configuración global del sistema.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Soporte y Ayuda
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Accede a recursos de ayuda y soporte.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </MiniDrawerFrame>
  )
}
