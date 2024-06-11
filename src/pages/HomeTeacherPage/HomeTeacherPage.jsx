import React from 'react'
import { Box, Card, CardContent, Typography, Grid, Paper } from '@mui/material'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import SchoolIcon from '@mui/icons-material/School'

export default function HomeTeacherPage () {
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
                <SchoolIcon color='primary' sx={{ fontSize: 60 }} />
              </Grid>
              <Grid item>
                <Typography variant='h3' component='div' gutterBottom>
                  Bienvenido Profesor
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Esta es la página principal del profesor. Desde aquí, puedes gestionar tus grupos, invitar a tus alumnos, crear y gestionar prácticas, y revisar y calificar el trabajo de tus alumnos.
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
                      Gestionar Grupos
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Trabaja sobre tus grupos asignados, invita a tus alumnos y dales de baja.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Crear Equipos de Trabajo
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Forma equipos de trabajo entre tus alumnos.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Crear Prácticas
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Diseña prácticas con una rúbrica personalizada.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Gestionar Prácticas
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Edita y elimina prácticas, asigna prácticas en equipo o individualmente.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Revisar y Calificar
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Revisa y califica las prácticas de tus alumnos.
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
