import React, { useContext, useEffect } from 'react'
import { Box, Grid, TextField, Button, Paper, Typography } from '@mui/material'
import Home from '../../../../components/Editor/Home'
import { DataConst } from '../../../../context/DataProvide'
import RubricView from './RubricView'
import CrudSolucionContext from '../../../../context/CrudSolucionContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

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
  const navigate = useNavigate()

  useEffect(() => {
    getSolucion(solutionId)
  }, [])

  function onSubmit (data) {
    data.strHtml = html
    data.strCss = css
    data.strJs = js
    updateSolucion(data).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Guardado',
        text: 'La solución ha sido guardada exitosamente'
      })
    })
  }

  const handleExitWithoutSaving = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No has guardado los cambios. ¿Quieres salir sin guardar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
    })
  }

  return (
    <Box sx={{ maxWidth: 'auto', padding: '30px' }}>
      <Home />

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            multiline
            rows={5}
            {...register('conclusion', { required: { value: true, message: 'Es requerido' } })}
            id='descripcion'
            label='Conclusion'
            type='text'
            variant='outlined'
            error={errors.conclusion}
            helperText={(errors.conclusion) && errors.conclusion.message}
          />
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Grid item xs={10}>
          {!loading && <RubricView rubricData={watch('rubricaCalificada')} />}
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button variant='text' color='primary' onClick={handleSubmit(onSubmit)}>
              Guardar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant='text' color='primary' onClick={handleExitWithoutSaving}>
              Salir sin guardar cambios
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
