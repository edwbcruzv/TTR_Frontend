import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import useAxios from '../../../hooks/useAxios'
import { URI_BACKEND } from '../../../utils/environments'
import { useEffect, useState, useContext } from 'react'
import ListStudents from './ListStudents'
import SessionContext from '../../../context/SessionContext'
import CrudInscripcionContext from '../../../context/CrudInscripcionContext'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function ModalViewStudents ({ group_id, open, setOpen }) {
  const handleClose = () => setOpen(false)
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

  useEffect(() => {
    console.log('Response: ', response)
  }, [])

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {/* {!loading && <ListStudents students={inscripciones} />} */}
        </Box>
      </Modal>
    </div>
  )
}
