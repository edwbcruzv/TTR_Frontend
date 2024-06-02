import React, { useContext, useEffect } from 'react'
import CrudSolucionContext from '../../../../context/CrudSolucionContext'
import { Box, Grid, TextField } from '@mui/material'

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

  useEffect(() => {
    getSolucion(solutionId)
  }, [])

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

      <Grid item xs={10}><TextField fullWidth multiline rows={5} {...register('conclusion', { required: { value: true, message: 'Es requerido' } })} id='descripcion' label='Introduccion' type='text' variant='outlined' error={errors.descripcion} helperText={(errors.descripcion) && errors.descripcion.message} /></Grid>

    </Box>
  )
}
