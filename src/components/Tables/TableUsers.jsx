import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';
import { URI_BACKEND } from '../../utils/urls';
import useAxios from '../../hooks/useAxios';
import Button from '@mui/material/Button'
import DialogConfirm from '../Dialogs/DialogConfirm';
import CrudUser from '../forms/CrudUser';

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const handleUpdate = (url,id,setOpenDialogUpdate) =>{
  console.log(URI_BACKEND(`${url}/${id}`))
  setOpenDialogUpdate(true)
}

const handleDelete = (url,id,token,setOpenDialogDelete) =>{
  // const {Data,IsPending,Error}=useAxios(URI_BACKEND(`${url}/${id}`),"DEL",token)
  console.log(URI_BACKEND(`${url}/${id}`))
  setOpenDialogDelete(true)
}

const RowTableItems = ({list_headers,elem_obj,index_obj}) =>{
  // console.log(list_headers,elem_obj,index_obj)
  return(
    <StyledTableRow key={index_obj}>
      {list_headers &&
        list_headers.map((elem_key,index) => <StyledTableCell key={index} align="right">{elem_obj[elem_key]}</StyledTableCell>)
      }
    </StyledTableRow>
  )
}



function TableUsers({url}) {
  const {token} = useAuth()
  const [openUpdate, setOpenUpdate] = React.useState(false)
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false)

  const {Data,IsPending,Error}=useAxios(URI_BACKEND(url),"GET",token)
  // console.log(Data,IsPending,Error)
  let list_headers = null
  let data = null
  if (IsPending===false && Data) {
    data = Data.map((elem) => ({
      ...elem,
      editar: <Button onClick={() => handleUpdate(url,elem["id"],token,setOpenUpdate)} color="info">Editar</Button>,
      eliminar: <Button onClick={() => handleDelete(url,elem["id"],token,setOpenDialogDelete)} color="error">Eliminar</Button>,
    }))
    // console.log(data)
    list_headers = Object.keys(data[0])
    list_headers.splice( list_headers.indexOf('password_hash'),1)
    // console.log(list_headers)
  }
  const handleClose = () => {
    setOpenUpdate(false);
  };
  
  return (
    <>
    <Modal
        open={openUpdate}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
        <CrudUser />
        </Box>
      </Modal>
    <DialogConfirm contentText={"¿Desea eliminar a esta persona?"} openDialog={openDialogDelete} setOpenDialog={setOpenDialogDelete}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {
              list_headers && list_headers.map((elem,index)=><StyledTableCell key={index} align="right">{elem}</StyledTableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {list_headers && data &&
            data.map((elem_obj,index_obj)=>RowTableItems({list_headers,elem_obj,index_obj}))
          }
          </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

TableUsers.propType = {
  url:PropTypes.string.isRequired
}

export default TableUsers