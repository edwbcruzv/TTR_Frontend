import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import FilesUpload from './FilesUpload';
import { useContext } from 'react';
import CrudCaseContext from '../../../context/CrudCaseContext';
import { Grid, Paper, Typography } from '@mui/material';

const quillStyle = {
  width: '700px',
  height: '400px',
  marginBottom: '80px'
}

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image'],
    ['blockquote', 'code-block'],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video',
  'color', 'background'
];

const placeholder = 'Escribe algo...';

const theme = 'snow';


const FormCaseStepView = ({name,label}) => {

  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,setValue,getValues,
    openModalForm,handleOpenModal,handleCloseModal} = useContext(CrudCaseContext)

  return (
    
    <Grid container
    spacing={2}
    direction="row"
    justifyContent="flex-start"
    alignItems="flex-start"
    alignContent="stretch"
    wrap="wrap">
    {getValues()[name] !== undefined &&
            <>
      <Grid item xs={8}>
        <Paper elevation={3}>
          <Typography variant="h5" gutterBottom>
            {label}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: watch(name) }} />
      </Paper>
      </Grid>
      <Grid item xs={4}>
      <FilesUpload/>
      </Grid>
    </>
    }
    <Grid item xs={8}> 
    <Paper elevation={3}>
    {name==="inicio"&&
    <>
      <Grid item xs={12}><Typography variant="h4" color="initial">{watch('titulo')}</Typography></Grid>
      <Grid item xs={12}><Typography variant="h6" color="initial">{watch('introduccion')}</Typography></Grid>
      
    </>
      }
    {name==="final"&&<>
      <Grid item xs={12}><Typography variant="h6" color="initial">{watch('conclusion')}</Typography></Grid>
      <Grid item xs={12}><Typography variant="h6" color="initial">{watch('comentarios')}</Typography></Grid>
    </>}
    </Paper>
    </Grid>
    </Grid>
  )
}

export default FormCaseStepView