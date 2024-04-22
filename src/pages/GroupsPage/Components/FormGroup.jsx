import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import useAxios from '../../../hooks/useAxios'
import { URI_BACKEND } from '../../../utils/environments'
import CrudGrupoContext from '../../../context/CrudGrupoContext'
import SessionContext from '../../../context/SessionContext'

export default function FormGroup () {
  const { token, rol, usernameSession, nombre, email, isValid, deleteSession } = useContext(SessionContext)
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

    getGrupo,
    getAllGruposByProfesorUsername,
    createGrupo,
    updateGrupo,
    deleteGrupo
  } = useContext(CrudGrupoContext)
  const [profesores, setProfesores] = useState([])
  function onSubmit (data) {
    console.log(data)
    createGrupo(data)
  }
  const { Data, IsPending, Error } = useAxios(URI_BACKEND('profesor/getAll'), 'GET', token)

  useEffect(() => {
    let listAux = []
    console.log(Error)
    if (IsPending === false && Data && !Error.error) {
      console.log(Data)
      listAux = Data.map(item => ({
        label: `${item.nombre} ${item.apellido_paterno} ${item.apellido_materno}`,
        profesor_username: item.username
      }))
      // console.log(listAux)
      setProfesores(listAux)
    }
  }, [Data, IsPending])

  return (
    <Grid
      container
      spacing={3}
      direction='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      wrap='wrap'
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

            <Grid item xs={12} sm={6}><TextField {...register('clave', { required: { value: true, message: 'Es requerido' } })} id='clave' label='Nombre del grupo' type='text' variant='outlined' error={errors.clave} helperText={(errors.clave) && errors.clave.message} /></Grid>
            <Grid item xs={12} sm={6}><TextField {...register('nombre', { required: { value: true, message: 'Es requerido' } })} id='nombre' label='Nombre de la materia' type='text' variant='outlined' error={errors.nombre} helperText={(errors.nombre) && errors.nombre.message} /></Grid>
            {/* <Grid item xs={12} sm={6}><TextField {...register('profesor',{required:{value:true,message:"Es requerido"}}         )} id='profesor' label="Profesor" type='text' variant='outlined' error={errors.profesor} helperText={(errors.profesor)&&errors.profesor.message} /></Grid> */}
            <Grid item xs={12} sm={12}>

              <Autocomplete
                onChange={(e, value) => setValue('profesorUsername', value.profesor_username)}
                disablePortal
                id='combo-box-profesor'
                options={profesores}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} {...register('profesor', { required: { value: true, message: 'Es requerido' } })} label='Profesor' variant='outlined' error={errors.profesor} helperText={(errors.profesor) && errors.profesor.message} />}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button variant='outlined' color='primary' type='submit'>Crear</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
