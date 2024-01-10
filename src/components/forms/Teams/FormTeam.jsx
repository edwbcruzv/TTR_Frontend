import React from 'react'
import { useContext } from 'react'
import CrudTeamContext from '../../../context/CrudTeamContext'
import { Box, Button, Grid, TextField } from '@mui/material'
import TransferListStudents from '../Students/TransferListStudents'
import useAuth from '../../../hooks/useAuth'
import { URI_BACKEND } from '../../../utils/urls'
import useAxios from '../../../hooks/useAxios'
import { useEffect } from 'react'

const lista1=[
  {nombre:"nombre1",id:1},
  {nombre:"nombre2",id:2},
  {nombre:"nombre3",id:3},
  {nombre:"nombre4",id:4},
  {nombre:"nombre5",id:5},
]

const lista2=[
  {nombre:"nombre10",id:10},
  {nombre:"nombre20",id:20},
  {nombre:"nombre30",id:30},
  {nombre:"nombre40",id:40},
  {nombre:"nombre50",id:50},
]



const FormTeam = () => {
  const {token} = useAuth()
  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,setValue,getValues,
    openModalForm,handleOpenModalForm,handleCloseModalForm,
    openModalView,handleOpenModalView,handleCloseModalView} =useContext(CrudTeamContext)
    const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);
  const {Data,IsPending,Error}=useAxios(URI_BACKEND("estudiante/getAll"),"GET",token)
    
  

  useEffect(() => {
    if (IsPending===false && Data){
      let list_aux = Data.map((elem)=>({nombre:`${elem.nombre} ${elem.apellido_paterno} ${elem.apellido_materno}`,id:elem.id}))
      console.log(list_aux)
      setRight(list_aux)
    }
  }, [IsPending])
  

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
      <Grid item xs={12} sm={12}><TransferListStudents  left={left} setLeft={setLeft} right={right} setRight={setRight} /></Grid>
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