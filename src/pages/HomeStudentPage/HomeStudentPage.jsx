import React from 'react'
import { Box, Card, CardContent, Typography, Grid, Paper } from '@mui/material'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import SchoolIcon from '@mui/icons-material/School'

export default function HomeStudentPage () {
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
                  Bienvenido Alumno
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  Esta es la página principal del alumno. Desde aquí, puedes ver los grupos a los que estás inscrito, los equipos a los que perteneces y responder a las prácticas asignadas, tanto en equipo como individuales.
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
                      Ver Grupos
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Consulta los grupos en los que estás inscrito.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Ver Equipos
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Revisa los equipos de trabajo a los que perteneces.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={2} sx={{ padding: 2 }}>
                    <Typography variant='h6' color='primary'>
                      Responder Prácticas
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Responde a las prácticas asignadas, tanto en equipo como individuales.
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
