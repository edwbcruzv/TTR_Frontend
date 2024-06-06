import React, { useContext, useEffect, useState } from 'react'
import CrudPracticaContext from '../../../../context/CrudPracticaContext'
import { Box, Grid, Typography, Paper, Stack } from '@mui/material'
import MultimediaComponent from '../../../../components/Multimedia/MultimediaComponent'

export default function PracticeView ({ practiceId }) {
  const {
    loading,
    response,
    responseAll,
    error,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalPracticaForm,
    handleOpenModalPracticaForm,
    handleCloseModalPracticaForm,

    openModalAsignarPractica,
    handleOpenModalAsignarPractica,
    handleCloseModalAsignarPractica,

    getAllPracticas,
    getPractica,
    viewPractica,
    getAllPracticasByProfesorUsername,
    createPractica,
    updatePractica,
    deletePractica,
    asignarPractica
  } = useContext(CrudPracticaContext)

  // const [uploadedFilesIds, setUploadedFilesIds] = useState(watch('recursosMultimedia'))
  useEffect(() => {
    viewPractica(practiceId)
  }, [practiceId])

  // useEffect(() => {
  //   return () => {
  //     setUploadedFilesIds([])
  //   }
  // }, [])

  return (
    <Box sx={{ maxWidth: 'auto', padding: '30px' }}>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        alignContent='stretch'
        wrap='wrap'
      >
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
            <Typography variant='h6' color='text.secondary'>
              Titulo:
            </Typography>
            <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              {watch('titulo') || 'Título no disponible'}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
            <Typography variant='h6' color='text.secondary'>
              Descripcion:
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              {watch('descripcion') || 'Descripción no disponible'}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
            <Typography variant='h6' color='text.secondary'>
              Recursos Multimedia:
            </Typography>
            {!loading && watch('recursosMultimedia').length > 0
              ? (

                <div>
                  <h3>Archivos Cargados</h3>
                  <ul>
                    {watch('recursosMultimedia').map((uploadedFileId, index) => (
                      <li
                        key={index}
                        style={{
                          width: 'auto',
                          marginBottom: '10px',
                          padding: '10px',
                          border: '1px solid #ccc',
                          borderRadius: '5px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Stack style={{ flex: 1 }}>
                          <MultimediaComponent file_id={uploadedFileId} width='70%' />
                        </Stack>

                      </li>
                    ))}
                  </ul>
                </div>

                )
              : (
                <Typography variant='body1' color='text.secondary'>
                  No hay recursos multimedia.
                </Typography>
                )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
            <Typography variant='h6' color='text.secondary'>
              Comentarios adicionales:
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              {watch('comentarios') || 'No hay comentarios'}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
