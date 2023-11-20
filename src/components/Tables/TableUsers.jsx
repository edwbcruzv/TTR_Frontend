import PropTypes from 'prop-types'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../hooks/useAuth';
import { URI_BACKEND } from '../../utils/urls';
import useAxios from '../../hooks/useAxios';
import Button from '@mui/material/Button'

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


const RowTableItems = ({list_headers,elem_obj,index_obj}) =>{
  // console.log(list_headers,elem_obj,index_obj)
  return(
    <StyledTableRow key={index_obj}>
      {list_headers &&
        list_headers.map((elem_key,index) => <StyledTableCell key={index} align="right">{elem_obj[elem_key]}</StyledTableCell>)
      }
      <StyledTableCell align="right"><Button color="info"> Editar </Button></StyledTableCell>
      <StyledTableCell align="right"><Button color="error"> Eliminar </Button></StyledTableCell>
    </StyledTableRow>
  )
}



export default function TableUsers({url}) {
  const {token} = useAuth()
  const {Data,IsPending,Error}=useAxios(URI_BACKEND("usuario"),"GET",token)
  console.log(Data,IsPending,Error)
  let list_headers =null
  if (IsPending===false && Data) {
    list_headers = Object.keys(Data[0])
    list_headers.splice( list_headers.indexOf('password_hash'),1)
    list_headers.push("Editar")
    list_headers.push("Eliminar")
    console.log(list_headers)
  }

  const {rol} = useAuth();
  return (
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
          {list_headers && Data &&
            Data.map((elem_obj,index_obj)=>RowTableItems({list_headers,elem_obj,index_obj}))
          }
          </TableBody>
      </Table>
    </TableContainer>
  );
}

TableUsers.propType = {
  url:PropTypes.string.isRequired
}