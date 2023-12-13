import React from 'react'
import { useContext } from 'react'
import { styled } from '@mui/material/styles';
import CrudGroupContext from '../../../context/CrudGroupContext'
import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import { useState } from 'react';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function FormGroup() {
  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,
    openModalForm,handleOpenModal,handleCloseModal} = useContext(CrudGroupContext)
  // const [dense, setDense] = useState(true);
  // const [secondary, setSecondary] = useState(false);

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

      

      <Grid item xs={12} sm={6}><TextField {...register('nombre_grupo',{required:{value:true,message:"Es requerido"}}         )} id='nombre_grupo' label="Nombre del grupo" type='text' variant='outlined' error={errors.nombre_grupo} helperText={(errors.nombre_grupo)&&errors.nombre_grupo.message} /></Grid>
      <Grid item xs={12} sm={6}><TextField {...register('nombre_materia',{required:{value:true,message:"Es requerido"}}         )} id='nombre_materia' label="Nombre de la materia" type='text' variant='outlined' error={errors.nombre_materia} helperText={(errors.nombre_materia)&&errors.nombre_materia.message} /></Grid>
      {/* <Grid item xs={12} sm={6}><TextField {...register('profesor',{required:{value:true,message:"Es requerido"}}         )} id='profesor' label="Profesor" type='text' variant='outlined' error={errors.profesor} helperText={(errors.profesor)&&errors.profesor.message} /></Grid> */}
      
      {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Equipos
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                    />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid> */}

        {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Inscripciones
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                    />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid> */}

      <Grid item xs={12} sm={12}>
      <Button variant="outlined" color="primary" type='submit'  >Crear</Button>
      </Grid>
      </Grid>
    </Box>
    </Grid>      
    </Grid>
  )
}
