import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useAxios from '../../../hooks/useAxios';
import { URI_BACKEND } from '../../../utils/urls';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import ListStudents from './ListStudents';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function ModalViewStudents({group_id,open, setOpen}) {
  const handleClose = () => setOpen(false);
  const {token} = useAuth()
  const {Data,IsPending,Error}=useAxios(URI_BACKEND(`estudiante/getAllByGroupId/${group_id}/NotTeam`),"GET",token)
    const [students, setStudents] = useState(null)
    
  useEffect(() => {
    if (IsPending===false && Data){
      let list_aux = Data.map((elem)=>({nombre:`${elem.nombre} ${elem.apellido_paterno} ${elem.apellido_materno}`,id:elem.id}))
      console.log(list_aux)
      setStudents(list_aux)
    }
  }, [IsPending])

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {students && <ListStudents students={students} />}
        </Box>
      </Modal>
    </div>
  );
}