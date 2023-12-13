import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import FilesUpload from './FilesUpload';
import { useContext } from 'react';
import CrudCaseContext from '../../../context/CrudCaseContext';

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
    register,handleSubmit,watch,errors,setValue,
    openModalForm,handleOpenModal,handleCloseModal} = useContext(CrudCaseContext)

  return (
    
    <>
    {watch(name)&&
      <>
      <ReactQuill
      value={watch(name)}
      onChange={(e)=>setValue(name,e)}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      theme={theme}
      style={quillStyle}
      />
      <FilesUpload/>
      </>
    }
    
    {name==="inicio"&&"inicio"}
    {name==="final"&&"final"}
    </>
  )
}

FormCaseStep.propTypes = {}

export default FormCaseStep