import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowCase from './RowCase';
import useAuth from '../../../hooks/useAuth';
import { Box, Button, LinearProgress } from '@mui/material';
import { useContext } from 'react';
import CrudCaseContext from '../../../context/CrudCaseContext';
import useAxios from '../../../hooks/useAxios';
import { URI_BACKEND } from '../../../utils/urls';
import { useEffect } from 'react';
import { useState } from 'react';

/*
function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
*/

export default function TableCases() {
  const {token,id} = useAuth()
  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,
    openModalForm,handleOpenModalForm,handleCloseModalForm,
    openModalView,handleOpenModalView,handleCloseModalView} = useContext(CrudCaseContext)
  const {Data,IsPending,Error}=useAxios(URI_BACKEND(`caso-estudio/getAllByProfesorId/${id}`),"GET",token)
  const [data, setData] = useState(null)

  useEffect(() => {
    console.log(Data,IsPending,Error)
    if (IsPending===false && Data) {
      const data_temp = Data.map((elem) => ({
        titulo:elem.titulo,
        introduccion:elem.introduccion,
        editar: <Button onClick={() => viewDataEdit(elem["id"])} color="info">Editar</Button>,
        eliminar: <Button onClick={() => deleteData(elem["id"])} color="error">Eliminar</Button>,
      }))
      setData(data_temp)
    }
    console.log(data)
  }, [Data,openModalForm,openModalForm])


  return (
    
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell align="right">Titulo</TableCell>
            <TableCell align="right">Introduccion</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {data && data.map((row,index) =>{ return <RowCase key={index} row={row} />})}
          
        </TableBody>   
      </Table>
      {IsPending&&<Box sx={{ width: '100%' }}><LinearProgress /></Box>}
    </TableContainer>
  );
}