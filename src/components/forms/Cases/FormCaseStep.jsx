import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import FilesUpload from './FilesUpload';

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

function quitarAcentos(cadena) {
  return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const FormCaseStep = ({label,value, setValue}) => {
  let cadenaSinAcentos = quitarAcentos(label)
  // console.log(value[cadenaSinAcentos])
  return (
    <>
  <ReactQuill
    value={value[cadenaSinAcentos]}
    onChange={(e)=> setValue({...value,[cadenaSinAcentos]:e})}
    modules={modules}
    formats={formats}
    placeholder={placeholder}
    theme={theme}
    style={quillStyle}
    />
    <FilesUpload/>
    </>
  )
}

FormCaseStep.propTypes = {}

export default FormCaseStep