import { Box, Grid, TextField } from '@mui/material'
import React, { useContext } from 'react'
import CrudPracticaContext from '../../../context/CrudPracticaContext'

export default function FormPractice () {
  const {
    loading,

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

    openModalPracticaView,
    handleOpenModalPracticaView,
    handleCloseModalPracticaView,

    getAllPracticas,
    getPractica,
    getAllPracticasByProfesorUsername,
    createPractica,
    updatePractica,
    deletePractica
  } = useContext(CrudPracticaContext)

  return (
    <Box sx={{ maxWidth: 'auto', padding: '30px' }}>
      <Grid item xs={12}><TextField fullWidth {...register('titulo', { required: { value: true, message: 'Es requerido' } })} id='titulo' label='Titulo' type='text' variant='outlined' error={errors.titulo} helperText={(errors.titulo) && errors.titulo.message} /></Grid>
      <Grid item xs={12}><TextField fullWidth multiline rows={5} {...register('descripcion', { required: { value: true, message: 'Es requerido' } })} id='descripcion' label='Introduccion' type='text' variant='outlined' error={errors.descripcion} helperText={(errors.descripcion) && errors.descripcion.message} /></Grid>

      <Grid item xs={10}><TextField fullWidth multiline rows={5} {...register('comentarios', { required: { value: true, message: 'Es requerido' } })} id='comentarios' label='Comentarios' type='text' variant='outlined' error={errors.comentarios} helperText={(errors.comentarios) && errors.comentarios.message} /></Grid>

    </Box>
  )
}
