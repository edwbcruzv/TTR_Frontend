import React, { useContext, useEffect } from 'react'
import CrudPracticaContext from '../../../../context/CrudPracticaContext'
import { Box, Grid, Typography } from '@mui/material'

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

  useEffect(() => {
    viewPractica(practiceId)
  }, [practiceId])

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

        <Grid item xs={10}><Typography variant='h2' color='initial'>{watch('titulo')}</Typography></Grid>
        <Grid item xs={10}><Typography variant='h4' color='initial'>{watch('descripcion')}</Typography></Grid>
        <Grid item xs={10}>

          {/* <UploadMultimediaList name='recursosMultimedia' setValue={setValue} uploadedFilesIds={uploadedFilesIds} setUploadedFilesIds={setUploadedFilesIds} /> */}

        </Grid>
        <Grid item xs={10}><Typography variant='h6' color='initial'>{watch('comentarios')}</Typography></Grid>
        <Grid item xs={10}>
          {/* <RubricForm nameRubrica='rubrica' setValue={setValue} rubrica={watch('rubrica')} /> */}
        </Grid>

      </Grid>
    </Box>
  )
}
