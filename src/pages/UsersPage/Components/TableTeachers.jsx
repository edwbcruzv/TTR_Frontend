/* eslint-disable camelcase */
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Button, LinearProgress, Table, TableBody, TableHead } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import CrudProfesorContext from '../../../context/CrudProfesorContext'
import { useNavigate } from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const RowTableItems = (headersListData, elem, index) => {
  // console.log(headersListData, elem)
  return (
    <StyledTableRow key={index}>
      {headersListData.map((elem_key, index) => <StyledTableCell key={index} align='center'>{elem[elem_key]}</StyledTableCell>)}
    </StyledTableRow>
  )
}

function TableTeachers () {
  const [openDialogDelete, setOpenDialogDelete] = useState(false)

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

    getProfesor,
    getAllProfesores,
    updateProfesor,
    deleteProfesor
  } = useContext(CrudProfesorContext)
  const headersListData = ['username', 'rol', 'email', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'cedula', 'editar', 'eliminar']
  const headersListView = ['Username', 'Rol', 'Correo electronico', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Cedula', 'Editar', 'Eliminar']
  const [dataList, setDataList] = useState(null)
  const navigate = useNavigate()
  const handleProfile = (username, rol) => {
    // Navegar a la página de destino con argumentos
    navigate('/profile', { state: { usernameView: username, rolView: rol } })
  }

  useEffect(() => {
    const fetchProfesores = async () => {
      await getAllProfesores()
    }

    fetchProfesores()
  }, [])

  useEffect(() => {
    if (response) {
      const data = response.map((elem) => {
        const { passwordHash, ...rest } = elem
        return {
          ...rest,
          editar: <Button onClick={() => handleProfile(elem.username, elem.rol)} color='info'>Editar</Button>,
          eliminar: <Button onClick={() => deleteProfesor(elem.username)} color='error'>Eliminar</Button>
        }
      })
      setDataList(data)
    }
  }, [response, deleteProfesor])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {
              headersListView.map((elem, index) => <StyledTableCell key={index} align='center'>{elem}</StyledTableCell>)
            }
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList &&
            dataList.map((elem, index) => RowTableItems(headersListData, elem, index))}
          </TableBody>
        </Table>
        {loading && <Box sx={{ width: '100%' }}><LinearProgress /></Box>}
      </TableContainer>
    </>
  )
}

export default TableTeachers
