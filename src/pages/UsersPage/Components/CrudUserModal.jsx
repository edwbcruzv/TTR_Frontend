import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { AuthContext } from '../../../context/AuthContext'
import FormRegister from '../../../components/Auth/FormRegister'

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
  const {
    response,
    error,
    loading,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm,

    login,
    registerUser,
    recoveryByEmail
  } = useContext(AuthContext)

  return (
    <>

      <Button onClick={handleOpenModalForm}>Agregar nuevo usuario</Button>

      <Modal
        open={openModalForm}
        onClose={handleCloseModalForm}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 1000 }}>
          <FormRegister />
        </Box>

      </Modal>
    </>
  )
}

export default CrudUserModal
