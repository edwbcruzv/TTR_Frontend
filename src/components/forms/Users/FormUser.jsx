import React from 'react'
import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../../utils/jwt_data';
import { useContext } from 'react';
import CrudUserContext from '../../../context/CrudUserContext';
import { TextField, Button, Box } from '@mui/material';
import useAuth from '../../../hooks/useAuth';




const style_inputs = {
    border: "thin solid #dedede",
    borderRadius: "0.25rem",
    padding: "0.75rem",
    marginBottom: "1rem",
    outlined: "none",
    display: "block",
    width: "100 %",
    fontSize: "1rem",
    lineHeight: 1,
    backgroundColor: "transparent",
    resize: "none",
  };
  
  const style_form = {
    marginBottom: "1rem",
  };
  
  const style_button = {
    border: "thin solid #444",
    borderRadius: "0.25rem",
    padding: "0.5rem 1rem",
    margin: "0 0.5rem 0 0",
    display: "inline - block",
    backgroundColor: " #eee",
    color: "#444",
    fontWeight: "bold",
    fontSize: "1rem",
    lineHeight: 1,
    textTransform: "none",
    textDecoration: "none",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
  };
  
  const style_errors = {
    fontWeight: "bold",
    color: "#dc3545",
  };
    

function FormUser() {
  const {token} = useAuth()
  const [url, setUrl] = useState(null)
  const {error,loading,viewDataEdit,createData,dataToEdit,setDataToEdit,updateData,deleteData,openModalForm,handleOpenModal,handleCloseModal} = useContext(CrudUserContext)
  const [valueRbtn, setValueRbtn] = useState(null);
  const {register,handleSubmit,formState: { errors }} = useForm()
  
  useEffect(() => {
    console.log(dataToEdit)
    switch (dataToEdit.rol) {
      case ROL_ADMIN:
        setUrl("usuario")
        setValueRbtn(ROL_ADMIN)
        break;
      case ROL_TEACHER:
        setUrl("profesor")
        setValueRbtn(ROL_TEACHER)
        break;
      case ROL_STUDENT:
        setUrl("estudiante")
        setValueRbtn(ROL_STUDENT)
        break;
      default:
        setUrl(null)
        break;
    }
  
    return () => {
      // handleReset()
    }
  }, [])
  


  const handleChangeRadioBtn = (event) => {
    setValueRbtn(event.target.value);
    switch (event.target.value) {
      case ROL_ADMIN:
          setUrl("usuario")
        break;
        case ROL_TEACHER:
          setUrl("profesor")
        break;
        case ROL_STUDENT:
          setUrl("estudiante")
        break;
      default:
        setUrl(null)
        break;
    }
  };
  
  console.log(url)

    function onSubmit(data){
        console.log(data)
        console.log(errors)
        // id de un formulario es nulo: se crea un nuevo dato
        // if(dataToEdit.id===null){
        //   console.log("se creo un dato")
        //   createData(url,dataToEdit)
        // }else{
        //   // si no es nulo se editara un formulario ya existente 
        //   console.log("Actualizando")
        //   updateData(url,dataToEdit)
        // }
    }

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <Grid item>
        {(!dataToEdit.id)?
      <FormControl >
          <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={valueRbtn}
          onChange={handleChangeRadioBtn }
          
          >
        <FormControlLabel {...register('rol')} value={ROL_ADMIN} control={<Radio />} label="Administrador" />
        <FormControlLabel {...register('rol')} value={ROL_TEACHER} control={<Radio />} label="Profesor" />
        <FormControlLabel {...register('rol')} value={ROL_STUDENT} control={<Radio />} label="Estudiante" />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
    :
     valueRbtn
      }
    </Grid>

    

      <Box component='form' onSubmit={handleSubmit(onSubmit)} >
      <Grid container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      alignContent="center"
      wrap="wrap">

      <Grid item><TextField {...register('username'        )} id='username'         label="Username" type='text' variant='outlined' /></Grid>
      <Grid item><TextField {...register('email'           )} id='email'            label="Email" type='email' variant='outlined' /></Grid>
      <Grid item><TextField {...register('nombre'          )} id='nombre'           label="Nombre" type='text' variant='outlined' /></Grid>
      <Grid item><TextField {...register('apellido_paterno')} id='apellido_paterno' label="Apellido Paterno" type='text' variant='outlined' /></Grid>
      <Grid item><TextField {...register('apellido_materno')} id='apellido_materno' label="Apellido Materno" type='text' variant='outlined' /></Grid>

      {(token!==null) && <>
      <Grid item><TextField {...register('password'       )} id='password'         label="Contraseña" type='password' variant='outlined' /></Grid>
      <Grid item><TextField {...register('confirm_password')} id='confirm_password'  label="Confirmar Contraseña" type='password' variant='outlined' /></Grid>
      </>}

      
      {valueRbtn === ROL_TEACHER && <>
      <Grid item><TextField {...register('cedula' )} id='cedula'           label="Cedula" type='text' variant='outlined' /></Grid>
      <Grid item><TextField {...register('escuela')} id='escuela'          label="Escuela" type='text' variant='outlined' /></Grid>
      </>}

    {valueRbtn === ROL_STUDENT && <>
      <Grid item><TextField {...register('boleta'      )} id='boleta'           label="Boleta" type='text' variant='outlined' /></Grid>
      <Grid item><TextField {...register('semestre'    )} id='semestre'         label="Semestre" type='text' variant='outlined' /></Grid>
      <Grid item><TextField {...register('codigo_grupo')} id='codigo_grupo'     label="Codigo del Grupo" type='text' variant='outlined' /></Grid>
      {/* <Grid item><TextField {...register()} id='email' label="Email" type='text' variant='outlined' /></Grid> */}
    </>}
    

      </Grid>
      {(valueRbtn) && 
      <Button variant="outlined" color="primary" type='submit'  >Crear</Button>
      }
      </Box>
      
    </Grid>
  );
}

export default FormUser