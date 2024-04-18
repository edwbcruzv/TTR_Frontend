import React, { useEffect, useState, useContext } from 'react'

import { useForm } from 'react-hook-form'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../../utils/jwt_data'

import CrudUserContext from '../../../context/CrudUserContext'
import { TextField, Button, Box, Alert, AlertTitle } from '@mui/material'
import useAuth from '../../../hooks/useAuth'

function FormUser () {
  const { token } = useAuth()
  const [url, setUrl] = useState(null)
  const {
    response, error, loading,
    viewDataEdit, createData, dataToEdit, setDataToEdit, updateData, deleteData,
    openModalForm, handleOpenModal, handleCloseModal
  } = useContext(CrudUserContext)
  const [valueRbtn, setValueRbtn] = useState(null)
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: dataToEdit })

  useEffect(() => {
    console.log(dataToEdit)
    switch (dataToEdit.rol) {
      case ROL_ADMIN:
        setUrl('usuario')
        setValueRbtn(ROL_ADMIN)
        break
      case ROL_TEACHER:
        setUrl('profesor')
        setValueRbtn(ROL_TEACHER)
        break
      case ROL_STUDENT:
        setUrl('estudiante')
        setValueRbtn(ROL_STUDENT)
        break
      default:
        setUrl(null)
        break
    }

    return () => {
      // handleReset()
    }
  }, [])

  const handleChangeRadioBtn = (event) => {
    setValueRbtn(event.target.value)
    switch (event.target.value) {
      case ROL_ADMIN:
        setUrl('usuario')
        break
      case ROL_TEACHER:
        setUrl('profesor')
        break
      case ROL_STUDENT:
        setUrl('estudiante')
        break
      default:
        setUrl(null)
        break
    }
  }

  console.log(url)

  function onSubmit (data) {
    console.log(data)
    // console.log(errors)
    // id de un formulario es nulo: se crea un nuevo dato
    if (data.id === null) {
      console.log('se creo un dato')
      createData(data)
    } else {
      // si no es nulo se editara un formulario ya existente
      console.log('Actualizando')
      updateData(url, data)
    }
  }

  return (
    <Grid
      container
      spacing={2}
      direction='column'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      wrap='wrap'
    >
      <Grid item>
        {(!dataToEdit.id)
          ? <FormControl>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
              value={valueRbtn}
              onChange={handleChangeRadioBtn}
            >
              {!(token === null) && <FormControlLabel {...register('rol')} value={ROL_ADMIN} control={<Radio />} label='Administrador' />}
              <FormControlLabel {...register('rol')} value={ROL_TEACHER} control={<Radio />} label='Profesor' />
              <FormControlLabel {...register('rol')} value={ROL_STUDENT} control={<Radio />} label='Estudiante' />
              {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
            </RadioGroup>
          </FormControl>
          : valueRbtn}
      </Grid>

      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          alignContent='center'
          wrap='wrap'
        >

          <Grid item xs={12} sm={6}><TextField {...register('username', { required: { value: true, message: 'Es requerido' } })} id='username' label='Username' type='text' variant='outlined' error={errors.username} helperText={(errors.username) && errors.username.message} /></Grid>
          <Grid item xs={12} sm={6}><TextField {...register('email', { required: { value: true, message: 'Es requerido' } })} id='email' label='Email' type='email' variant='outlined' error={errors.email} helperText={(errors.email) && errors.email.message} /></Grid>
          <Grid item xs={12} sm={6}><TextField {...register('nombre', { required: { value: true, message: 'Es requerido' } })} id='nombre' label='Nombre' type='text' variant='outlined' error={errors.nombre} helperText={(errors.nombre) && errors.nombre.message} /></Grid>
          <Grid item xs={12} sm={6}><TextField {...register('apellido_paterno', { required: { value: true, message: 'Es requerido' } })} id='apellido_paterno' label='Apellido Paterno' type='text' variant='outlined' error={errors.apellido_paterno} helperText={(errors.apellido_paterno) && errors.apellido_paterno.message} /></Grid>
          <Grid item xs={12} sm={6}><TextField {...register('apellido_materno', { required: { value: true, message: 'Es requerido' } })} id='apellido_materno' label='Apellido Materno' type='text' variant='outlined' error={errors.apellido_materno} helperText={(errors.apellido_materno) && errors.apellido_materno.message} /></Grid>

          {(token === null) && <>
            <Grid item xs={12} sm={6}><TextField
              {...register('password', {
                required: { value: true, message: 'Es requerido' },
                minLength: { value: 8, message: 'Debe ser mayor de 8 caracteres' }
              })} id='password' label='Contraseña' type='password' variant='outlined' error={errors.password} helperText={(errors.password) && errors.password.message}
                                      />
            </Grid>
            <Grid item xs={12} sm={6}><TextField
              {...register('confirm_password', {
                required: { value: true, message: 'Es requerido' },
                validate: value => value === watch('password') || 'las contraseñas no son los mismos'
              }
              )} id='confirm_password' label='Confirmar Contraseña' type='password' variant='outlined' error={errors.confirm_password} helperText={(errors.confirm_password) && errors.confirm_password.message}
                                      />
            </Grid>
          </>}

          {valueRbtn === ROL_TEACHER && <>
            <Grid item xs={12} sm={6}><TextField {...register('cedula')} id='cedula' label='Cedula' type='text' variant='outlined' /></Grid>
            <Grid item xs={12} sm={6}><TextField {...register('escuela')} id='escuela' label='Escuela' type='text' variant='outlined' /></Grid>
          </>}

          {valueRbtn === ROL_STUDENT && <>
            <Grid item xs={12} sm={6}><TextField {...register('boleta')} id='boleta' label='Boleta' type='text' variant='outlined' /></Grid>
            <Grid item xs={12} sm={6}><TextField {...register('semestre')} id='semestre' label='Semestre' type='text' variant='outlined' /></Grid>

            {/* <Grid item><TextField {...register()} id='email' label="Email" type='text' variant='outlined' /></Grid> */}
          </>}

        </Grid>
        {(valueRbtn) &&
          <Button variant='outlined' color='primary' type='submit'>Hecho</Button>}

        {!error && response && <Alert severity='success'>
          <AlertTitle>Success</AlertTitle>
          <strong>Usuario creado correctamente</strong>
        </Alert>}

        {error && !response && <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          Error <strong>error</strong>
                               </Alert>}
      </Box>

    </Grid>
  )
}

export default FormUser
