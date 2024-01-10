import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import FilesUpload from './FilesUpload';
import { useContext } from 'react';
import CrudCaseContext from '../../../context/CrudCaseContext';
import { Grid, TextField } from '@mui/material';

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


const FormCaseStep = ({name,label}) => {

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
      <ReactQuill
      value={watch(name)}
      onChange={(e)=>setValue(name,e)}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      theme={theme}
      style={quillStyle}
      />
      </Grid>
      <Grid item xs={4}>
      <FilesUpload/>
      </Grid>
      </>
    }
    
    
    {name==="inicio"&&
    <>
      <Grid item xs={12}><TextField fullWidth {...register('titulo',{required:{value:true,message:"Es requerido"}}         )} id='titulo' label="Titulo" type='text' variant='outlined' error={errors.titulo} helperText={(errors.titulo)&&errors.titulo.message} /></Grid>
      <Grid item xs={12}><TextField fullWidth multiline rows={5} {...register('introduccion',{required:{value:true,message:"Es requerido"}}         )} id='introduccion' label="Introduccion" type='text' variant='outlined' error={errors.introduccion} helperText={(errors.introduccion)&&errors.introduccion.message} /></Grid>

    </>
      }
    {name==="final"&&<>
    <Grid item xs={12}><TextField fullWidth multiline rows={5} {...register('conclusion',{required:{value:true,message:"Es requerido"}}         )} id='conclusion' label="Conclusion" type='text' variant='outlined' error={errors.conclusion} helperText={(errors.conclusion)&&errors.conclusion.message} /></Grid>
    <Grid item xs={12}><TextField fullWidth multiline rows={5} {...register('comentarios',{required:{value:true,message:"Es requerido"}}         )} id='comentarios' label="Comentarios" type='text' variant='outlined' error={errors.comentarios} helperText={(errors.comentarios)&&errors.comentarios.message} /></Grid>
    </>}
    </Grid>
  )
}

FormCaseStep.propTypes = {}

export default FormCaseStep