import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import ListInscriptions from './ListInscriptions'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 5
}

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   bgcolor: '#1c2630',
//   border: '2px solid #000',

//   p: 4
// }

export default function ModalViewStudents ({ groupId, open, setOpen }) {
  const handleClose = () => setOpen(false)

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
          <ListInscriptions grupoId={groupId} handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  )
}
