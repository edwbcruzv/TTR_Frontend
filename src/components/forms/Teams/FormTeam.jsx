import React, { useContext, useEffect, useState } from 'react'

import CrudTeamContext from '../../../context/CrudTeamContext'
import { Box, Button, Grid, TextField } from '@mui/material'
import TransferListStudents from '../Students/TransferListStudents'
import useAuth from '../../../hooks/useAuth'
import { URI_BACKEND } from '../../../utils/urls'
import useAxios from '../../../hooks/useAxios'

import SelectionMultiCases from '../Cases/SelectionMultiCases'
import { helperAXIOS } from '../../../helpers/helperAXIOS'

const FormTeam = ({ group_id }) => {
  const { token, id } = useAuth()
  const {
    response, error, loading,
    renderizar, setRenderizar,
    viewDataEdit, createData,
    updateData, deleteData,
    register, handleSubmit, watch, errors, setValue, getValues,
    openModalForm, handleOpenModalForm, handleCloseModalForm,
    openModalView, handleOpenModalView, handleCloseModalView,
    left, setLeft,
    right, setRight
  } = useContext(CrudTeamContext)
  const { get, post, put, patch, del } = helperAXIOS()
  const [cases, setCases] = useState([])
  const { Data, IsPending, Error } = useAxios(URI_BACKEND(`estudiante/getAllByGroupId/${group_id}/NotTeam`), 'GET', token)

  useEffect(() => {
    async function f1 () {
      const res3 = await get(URI_BACKEND(`caso-estudio/getAllByProfesorId/${id}`), token)
      const list_aux3 = res3.data.map((elem) => ({ name: elem.titulo, id: elem.id }))
      console.log(list_aux3)
      setCases(list_aux3 || [])
    }
    if (IsPending === false && Data) {
      setValue('grupo_id', group_id)
      const list_aux = Data.map((elem) => ({ nombre: `${elem.nombre} ${elem.apellido_paterno} ${elem.apellido_materno}`, id: elem.id }))
      // console.log(list_aux)
      f1()
      setRight(list_aux)
    }
  }, [IsPending])

  async function onSubmit (data) {
    const estudiantes_ids = left.map((elem) => elem.id)
    setValue('estudiantes_ids', estudiantes_ids)
    data.estudiantes_ids = estudiantes_ids
    console.log(data)
    // console.log(errors)
    // id de un formulario es nulo: se crea un nuevo dato
    if (data.id === null) {
      await createData(data)
      console.log('se creo un dato')
    } else {
      // si no es nulo se editara un formulario ya existente
      await updateData(data)
      console.log('Actualizando')
    }
  }

  return (
    <Grid
      container
      spacing={3}
      direction='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      wrap='wrap'
      sx={{ margin: '10px' }}
    >

      <Grid item>

        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={2}
            direction='row'
            justifyContent='center'
            alignItems='flex-center'
            alignContent='center'
            wrap='wrap'
          >
            {/* <Grid spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-center"
      alignContent="center"
      wrap="wrap"
      > */}

            <Grid item xs={8}><TextField {...register('nombre', { required: { value: true, message: 'Es requerido' } })} id='nombre' label='Nombre del equipo' type='text' variant='outlined' error={errors.nombre} helperText={(errors.nombre) && errors.nombre.message} /></Grid>
            <Grid item xs={4}><SelectionMultiCases cases_list={cases} /> </Grid>
            {/* </Grid> */}
            <Grid item xs={12} sm={12}><TransferListStudents left={left} setLeft={setLeft} right={right} setRight={setRight} /></Grid>
            <Grid item xs={12} sm={12}>
              {left.length > 6
                ? 'El equipo no puede ser mayor a 6 estudiantes'
                : <Button variant='outlined' color='primary' type='submit'>Crear</Button>}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FormTeam
