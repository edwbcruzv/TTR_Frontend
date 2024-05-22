import { Box, Grid, TextField, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import CrudPracticaContext from '../../../context/CrudPracticaContext'
import EditorHTML from './EditorHTML'
import UploadMultimediaList from '../../../components/Multimedia/UploadMultimediaList'
import RubricForm from './RubricaForm'
import SessionContext from '../../../context/SessionContext'
import Swal from 'sweetalert2'
import '../../../styles/dashborad.css'

export default function FormPractice () {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

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
    data.usernameProfesor = usernameSession
    data.recursosMultimedia = uploadedFilesIds
    console.log(data)

    if (data.id === null) {
      createPractica(data)
    } else {
      // si no es nulo se editara un formulario ya existente
      updatePractica(data)
    }
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
          {/* <EditorHTML /> */}
        </Grid>
        <Grid item xs={10}><TextField fullWidth multiline rows={5} {...register('comentarios', { required: { value: true, message: 'Es requerido' } })} id='comentarios' label='Comentarios' type='text' variant='outlined' error={errors.comentarios} helperText={(errors.comentarios) && errors.comentarios.message} /></Grid>
        <Grid item xs={10}>
          <RubricForm />
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ mb: 2 }}>

            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmit(onSubmit)}
              sx={{ mt: 1, mr: 1 }}
            >Guardar
            </Button>

          </Box>
          <Box sx={{ mb: 2 }}>

            <Button
              variant='outlined' color='secondary'
            >Cancelar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
