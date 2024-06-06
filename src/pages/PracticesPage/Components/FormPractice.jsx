import { Box, Grid, TextField, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CrudPracticaContext from '../../../context/CrudPracticaContext'
import UploadMultimediaList from '../../../components/Multimedia/UploadMultimediaList'
import SessionContext from '../../../context/SessionContext'
import RubricForm from './RubricForm'

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

    createPractica,
    updatePractica
  } = useContext(CrudPracticaContext)

  const [uploadedFilesIds, setUploadedFilesIds] = useState(watch('recursosMultimedia') ? watch('recursosMultimedia') : [])

  function onSubmit (data) {
    data.usernameProfesor = usernameSession
    data.recursosMultimedia = uploadedFilesIds

    if (data.id === null) {
      createPractica(data)
    } else {
      updatePractica(data)
    }
  }

  useEffect(() => {
    return () => {
      setUploadedFilesIds([])
    }
  }, [])

  return (
    <Box sx={{ maxWidth: 'auto', padding: '30px' }}>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        alignItems='center'
        alignContent='stretch'
        wrap='wrap'
      >
        <Grid item xs={12}>
          <TextField
            fullWidth
            {...register('titulo', { required: { value: true, message: 'Es requerido' } })}
            id='titulo'
            label='Titulo'
            type='text'
            variant='outlined'
            error={errors.titulo}
            helperText={(errors.titulo) && errors.titulo.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            {...register('descripcion', { required: { value: true, message: 'Es requerido' } })}
            id='descripcion'
            label='Introduccion'
            type='text'
            variant='outlined'
            error={errors.descripcion}
            helperText={(errors.descripcion) && errors.descripcion.message}
          />
        </Grid>
        <Grid item xs={12}>
          <UploadMultimediaList
            name='recursosMultimedia'
            setValue={setValue}
            uploadedFilesIds={uploadedFilesIds}
            setUploadedFilesIds={setUploadedFilesIds}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            {...register('comentarios', { required: { value: true, message: 'Es requerido' } })}
            id='comentarios'
            label='Comentarios'
            type='text'
            variant='outlined'
            error={errors.comentarios}
            helperText={(errors.comentarios) && errors.comentarios.message}
          />
        </Grid>
        <Grid item xs={12}>
          <RubricForm nameRubrica='rubrica' setValue={setValue} rubrica={watch('rubrica')} />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit(onSubmit)}
            sx={{ mr: 1 }}
          >
            Guardar
          </Button>
          <Button
            variant='outlined'
            color='secondary'
          >
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
