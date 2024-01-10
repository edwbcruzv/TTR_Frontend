import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormGroup from './FormGroup';
import { useContext } from 'react';
import CrudGroupContext from '../../../context/CrudGroupContext';

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
  pb: 3,
};

export default function CrudGroupModal() {
  const {response,error,loading,viewDataEdit,createData,dataToEdit,setDataToEdit,updateData,deleteData,openModalForm,handleOpenModal,handleCloseModal} = useContext(CrudGroupContext)
  
  return (
    <div>
      <Button onClick={handleOpenModal}>Nuevo Grupo</Button>
      <Modal
        open={openModalForm}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <FormGroup/>
        </Box>
      </Modal>
    </div>
  );
}

