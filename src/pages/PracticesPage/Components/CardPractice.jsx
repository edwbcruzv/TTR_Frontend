import React from 'react'
import { Card, CardContent, Typography, Grid, List, ListItem, Box, Button } from '@mui/material'

export default function CardPractice ({ practica }) {
  return (
    <Card sx={{ width: 350, height: 400 }}>
      <CardContent>
        <Typography variant='h5' component='div' gutterBottom>
          {practica.titulo || 'Título no disponible'}
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Profesor: {practica.usernameProfesor || 'No especificado'}
        </Typography>
        <Typography variant='body2' component='p' sx={{ marginTop: 2 }}>
          Descripción: {practica.descripcion || 'No disponible'}
        </Typography>
        <Typography variant='body2' component='div' sx={{ marginTop: 2 }}>
          Recursos Multimedia:
        </Typography>
        {practica.recursosMultimedia && practica.recursosMultimedia.length > 0
          ? (
            <Typography variant='body2' component='div' sx={{ marginTop: 2 }}>
              practica.recursosMultimedia.length
            </Typography>
            )
          : (
            <Typography variant='body2' color='text.secondary'>
              No hay recursos multimedia.
            </Typography>
            )}
        <Typography variant='body2' component='div' sx={{ marginTop: 2 }}>
          Comentarios: {practica.comentarios || 'No hay comentarios'}
        </Typography>
        <Typography variant='body2' component='div' sx={{ marginTop: 2 }}>
          Rúbrica: {practica.rubrica || 'No disponible'}
        </Typography>

        <Box sx={{ marginTop: 2 }}>
          <Button variant='contained' color='primary' sx={{ marginRight: 1 }}>Rúbrica</Button>
          <Button variant='contained' color='secondary'>Asignaciones</Button>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Button variant='contained' color='success' sx={{ marginRight: 1 }}>Ver</Button>
          <Button variant='contained' color='error'>Eliminar</Button>
          <Button variant='contained' color='warning' sx={{ marginLeft: 1 }}>Editar</Button>
        </Box>
      </CardContent>
    </Card>
  )
}
