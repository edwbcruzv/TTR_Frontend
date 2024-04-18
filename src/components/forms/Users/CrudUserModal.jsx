import React, { useState, useContext } from 'react'

import useAuth from '../../../hooks/useAuth'
import FormUser from './FormUser'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'

import CrudUserContext from '../../../context/CrudUserContext'

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
  pb: 3
}

const CrudUserModal = () => {
  const { error, loading, viewDataEdit, createData, dataToEdit, setDataToEdit, updateData, deleteData, openModalForm, handleOpenModal, handleCloseModal } = useContext(CrudUserContext)

  return (
    <>

      <Button onClick={handleOpenModal}>Registrar Usuario</Button>

      <Modal
        open={openModalForm}
        onClose={handleCloseModal}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 1000 }}>

          <FormUser />
        </Box>

      </Modal>
    </>
  )
}

export default CrudUserModal
