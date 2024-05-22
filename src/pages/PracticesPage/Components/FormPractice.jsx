import { Box, Grid, TextField, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import CrudPracticaContext from '../../../context/CrudPracticaContext'
import EditorHTML from './EditorHTML'
import UploadMultimediaList from '../../../components/Multimedia/UploadMultimediaList'
import "../../../styles/dashborad.css"

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

  const [uploadedFilesIds, setUploadedFilesIds] = useState(watch('recursosMultimedia') ? watch('recursosMultimedia') : [])

  function onSubmit (data) {
    console.log(data)
    // console.log(errors)
    // id de un formulario es nulo: se crea un nuevo dato
    // if (data.id === null) {
    //   createData(data)
    //   console.log('se creo un dato')
    // } else {
    //   // si no es nulo se editara un formulario ya existente
    //   updateData(data)
    //   console.log('Actualizando')
    // }
  }
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

        <Grid item xs={10}><TextField fullWidth {...register('titulo', { required: { value: true, message: 'Es requerido' } })} id='titulo' label='Titulo' type='text' variant='outlined' error={errors.titulo} helperText={(errors.titulo) && errors.titulo.message} /></Grid>
        <Grid item xs={10}><TextField fullWidth multiline rows={5} {...register('descripcion', { required: { value: true, message: 'Es requerido' } })} id='descripcion' label='Introduccion' type='text' variant='outlined' error={errors.descripcion} helperText={(errors.descripcion) && errors.descripcion.message} /></Grid>
        <Grid item xs={10}>

          <UploadMultimediaList name='recursosMultimedia' setValue={setValue} uploadedFilesIds={uploadedFilesIds} setUploadedFilesIds={setUploadedFilesIds} />
        </Grid>
        <Grid item xs={10}><TextField fullWidth multiline rows={5} {...register('comentarios', { required: { value: true, message: 'Es requerido' } })} id='comentarios' label='Comentarios' type='text' variant='outlined' error={errors.comentarios} helperText={(errors.comentarios) && errors.comentarios.message} /></Grid>
        <Grid item xs={5}>
          <Box sx={{ mb: 2 }}>

            <button
              variant='contained'
              color='primary'
              onClick={handleSubmit(onSubmit)}
              sx={{ mt: 1, mr: 1 }}
              className='btn-form-practica'
            >Guardar
            </button>

          </Box>
          <Box sx={{ mb: 2 }}>

            <button
              variant='outlined' color='secondary'
              className='btn-form-practica'
            >Cancelar
            </button>
          </Box>
        </Grid>
      </Grid>
      <EditorHTML/>
    </Box>
  )
}
