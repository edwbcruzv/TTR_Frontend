import React, { useContext, useEffect } from 'react'
import CrudSolucionContext from '../../../../context/CrudSolucionContext'
import { Box, Grid, TextField, Button } from '@mui/material'
import Home from '../../../../components/Editor/Home'
import { DataConst } from '../../../../context/DataProvide'
import RubricView from './RubricView'

export default function SolutionForm ({ solutionId }) {
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

    openModalSolucionForm,
    handleOpenModalSolucionForm,
    handleCloseModalSolucionForm,

    openModalSolucionView,
    handleOpenModalSolucionView,
    handleCloseModalSolucionView,

    getAllSoluciones,
    getSolucion,
    getAllSolucionesByEquipoId,
    getAllSolucionesByEstudianteUsername,
    getAllSolucionesByProfesorUsernameAndGrupoIdByEquipos,
    getAllSolucionesByProfesorUsernameAndGrupoIdByIndividual,
    createSolucion,
    updateSolucion,
    deleteSolucion
  } = useContext(CrudSolucionContext)
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataConst)
  useEffect(() => {
    getSolucion(solutionId)
  }, [])

  function onSubmit (data) {
    data.strHtml = html
    data.strCss = css
    data.strJs = js
    // console.log(data)
    updateSolucion(data)
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
      />

      <Grid item>
        <Home />
      </Grid>

      <Grid item xs={10}><TextField fullWidth multiline rows={5} {...register('conclusion', { required: { value: true, message: 'Es requerido' } })} id='descripcion' label='Introduccion' type='text' variant='outlined' error={errors.descripcion} helperText={(errors.descripcion) && errors.descripcion.message} /></Grid>

      <Grid item xs={10}>
        {!loading && <RubricView rubricData={watch('rubricaCalificada')} />}
      </Grid>

      <Grid item xs={6}>
        <Button variant='text' color='primary' onClick={handleSubmit(onSubmit)}>
          Guardar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant='text' color='primary'>
          Salir sin guardar cambios
        </Button>
      </Grid>

    </Box>
  )
}
