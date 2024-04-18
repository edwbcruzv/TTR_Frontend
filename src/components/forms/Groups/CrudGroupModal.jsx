import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import FormGroup from './FormGroup'
import { useContext } from 'react'
import CrudGrupoContext from '../../../context/CrudGrupoContext'
import useSession from '../../../hooks/useSession'
import { ROL_ADMIN } from '../../../utils/jwt_data'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}

export default function CrudGroupModal () {
  const { token, rol, usernameSession, nombre, isValid, deleteSession } = useSession()
  const {

    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm
  } = useContext(CrudGrupoContext)

  return (
    <>
      {rol === ROL_ADMIN && <Button onClick={handleOpenModalForm}>Nuevo Grupo</Button>}
      <Modal
        open={openModalForm}
        onClose={handleCloseModalForm}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style, width: 1000 }}>
          <FormGroup />
        </Box>
      </Modal>
    </>
  )
}
