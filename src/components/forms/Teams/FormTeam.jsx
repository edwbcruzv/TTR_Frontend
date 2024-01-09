import React from 'react'
import { useContext } from 'react'
import CrudTeamContext from '../../../context/CrudTeamContext'
import { Box, Button, Grid, TextField } from '@mui/material'
import TransferListStudents from '../Students/TransferListStudents'


const FormTeam = () => {
  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,setValue,getValues,
    openModalForm,handleOpenModalForm,handleCloseModalForm,
    openModalView,handleOpenModalView,handleCloseModalView} =useContext(CrudTeamContext)



  function onSubmit(data){
    console.log(data)
    // console.log(errors)
    // id de un formulario es nulo: se crea un nuevo dato
    if(data.id===null){
      createData(data)
      console.log("se creo un dato")
    }else{
      // si no es nulo se editara un formulario ya existente 
      updateData(url,data)
      console.log("Actualizando")
    }
}

  return (
    <Grid
    container
    spacing={3}
    direction="column"
    justifyContent="center"
    alignItems="center"
    alignContent="center"
    wrap="wrap"
    sx={{margin : "10px"}}
    >

    <Grid item >

    
    <Box component='form' onSubmit={handleSubmit(onSubmit)} >
      <Grid container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-center"
      alignContent="center"
      wrap="wrap"
  
  
      >

      <Grid item xs={12} sm={6}><TextField {...register('nombre',{required:{value:true,message:"Es requerido"}}         )} id='nombre' label="Nombre del equipo" type='text' variant='outlined' error={errors.nombre} helperText={(errors.nombre)&&errors.nombre.message} /></Grid>
      {/* <Grid item xs={12} sm={6}><TextField {...register('profesor',{required:{value:true,message:"Es requerido"}}         )} id='profesor' label="Profesor" type='text' variant='outlined' error={errors.profesor} helperText={(errors.profesor)&&errors.profesor.message} /></Grid> */}
      <Grid item xs={12} sm={12}><TransferListStudents/></Grid>
      <Grid item xs={12} sm={12}>
      <Button variant="outlined" color="primary" type='submit'  >Crear</Button>
      </Grid>
      </Grid>
    </Box>
    </Grid>      
    </Grid>
  )
}

export default FormTeam