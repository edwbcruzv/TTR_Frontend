import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { ROL_ADMIN, ROL_TEACHER } from '../../utils/jwt_data';
import { helperAXIOS } from '../../helpers/helperAXIOS';
import { useEffect } from 'react';
import FormUser from './FormUser';
import LabTabs from '../../components/Tabs/LabTabs'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { URI_BACKEND } from '../../utils/urls';

const initialForm = {
  "id":-1,
  "username": "",
  "email": "",
  "password": "",
  "nombre": "",
  "apellido_materno": "",
  "apellido_paterno": ""
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CrudUser = () => {
  const {token,rol} = useAuth()
  const [url, setUrl] = useState(null)
  // Guarda los datos que se nos regrese la petision
  const [Data, setData] = useState(null)
  // Guarda el status de la peticion
  const [IsPending, setIsPending] = useState(null)
  // Guarda el error si existe uno
  const [Error, setError] = useState(null)


  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const {get,post,put,patch,del} = helperAXIOS()
  const [dataToEdit, setDataToEdit] = useState(initialForm)

  async function viewDataEdit(id) {
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      const res = await get(URI_BACKEND(`${url}/${id}`),token)
      // console.log(URI_BACKEND(`${url}/${id}`),token)
      if (res.status === 200) {
        setDataToEdit(res.data)
        handleOpenModal()
      }else{
        console.log(res.error)
      }
    }
  }

  async function createData(data) {
    res = await post(URI_BACKEND(url),data,token)
    if (res.status === 200) {
      console.log(res)
    }else{
      console.log(res.error)
    }
  }

  async function updateData(data) {
    res = await patch(URI_BACKEND(url),data,token)
    // console.log(res)
    console.log(url,data,token)
    if (res.status === 200) {
      console.log(res)
    }else{
      console.log(res.error)
    }
  }

  async function deleteData(id) {
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      res = await del(URI_BACKEND(`${url}/${id}`),token)
      console.log(id)
      if (res.status === 200) {
      console.log(res)
      }else{
        console.log(res.error)
      }
    }
  }

  

return (
      <>
  
      <Button onClick={handleOpenModal}>Registrar Usuario</Button>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box sx={{ ...style, width: 1000 }}>
        
        <FormUser 
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          url={url}
          setUrl={setUrl}
          />
        </Box>

          </Modal>
      <LabTabs viewDataEdit={viewDataEdit} deleteData={deleteData} url={url} setUrl={setUrl} />
          </>
  )
};

CrudUser.propTypes = {}

export default CrudUser