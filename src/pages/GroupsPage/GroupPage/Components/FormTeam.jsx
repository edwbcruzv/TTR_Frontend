import React, { useContext, useEffect } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import CrudEquipoContext from '../../../../context/CrudEquipoContext'
import TransferListStudents from './TransferListStudents'

const FormTeam = ({ grupoId }) => {
  const {
    response,
    error,
    loading,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm,

    left,
    setLeft,
    right,
    setRight,

    getEquipo,
    getAllEquipoByGrupoId,
    setRightEstudiantesNotTeamByGroupId,
    createEquipo,
    updateEquipo,
    deleteEquipo
  } = useContext(CrudEquipoContext)

  useEffect(() => {
    setRightEstudiantesNotTeamByGroupId(grupoId)
    // console.log('formTeam')
  }, [])

  async function onSubmit (data) {
    const estudiantesUsernames = left.map((elem) => elem.username)
    data.estudiantesUsernames = estudiantesUsernames
    data.grupoId = grupoId

    // id de un formulario es nulo: se crea un nuevo dato
    if (data.id === null) {
      createEquipo(data)
      console.log('create')
    } else {
      // si no es nulo se editara un formulario ya existente
      updateEquipo(data)
      console.log('update')
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
            {/* <Grid item xs={4}><SelectionMultiCases cases_list={cases} /> </Grid> */}
            {/* </Grid> */}
            <Grid item xs={12} sm={12}><TransferListStudents left={left} setLeft={setLeft} right={right} setRight={setRight} /></Grid>
            <Grid item xs={12} sm={12}>
              {left.length > 6
                ? 'El equipo no puede ser mayor a 6 estudiantes'
                : <Button variant='outlined' color='primary' type='submit'>Guardar</Button>}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FormTeam
