import React, { useContext } from 'react'
import { Card, CardContent, Typography, Box, Button } from '@mui/material'
import CrudPracticaContext from '../../../context/CrudPracticaContext'
import SessionContext from '../../../context/SessionContext'
import { ROL_TEACHER } from '../../../utils/environments'

export default function CardPractice ({ practica }) {
  const { rol, usernameSession } = useContext(SessionContext)
  const {
    deletePractica,
    getPractica
  } = useContext(CrudPracticaContext)

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`
    }
    return text
  }

  return (
    <Card sx={{ width: '100%', height: 400, m: 2, borderRadius: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Typography variant='h5' component='div' gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          {practica.titulo || 'Título no disponible'}
        </Typography>
        <Typography variant='body1' color='text.secondary' sx={{ mb: 1.5 }}>
          Profesor: {practica.usernameProfesor || 'No especificado'}
        </Typography>
        <Typography variant='body2' component='p' sx={{ mb: 1.5 }}>
          Descripción: {truncateText(practica.descripcion || 'No disponible', 50)}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1.5 }}>
          Recursos Multimedia: {practica.recursosMultimedia && practica.recursosMultimedia.length > 0 ? practica.recursosMultimedia.length : 'No hay recursos multimedia'}
        </Typography>
        <Typography variant='body2' component='div' sx={{ mb: 1.5 }}>
          Comentarios: {truncateText(practica.comentarios || 'No hay comentarios', 50)}
        </Typography>
        {/* <Typography variant='body2' component='div' sx={{ mb: 1.5 }}>
          Rúbrica: {practica.rubrica || 'No hay rúbrica'}
        </Typography> */}
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>

        {rol === ROL_TEACHER && <Button variant='contained' color='warning' onClick={() => getPractica(practica.id)} sx={{ ml: 1 }}>Editar</Button>}
        <Box>
          <Button variant='contained' color='error' onClick={() => deletePractica(practica.id)} sx={{ ml: 1 }}>Eliminar</Button>
        </Box>
      </Box>
    </Card>
  )
}
