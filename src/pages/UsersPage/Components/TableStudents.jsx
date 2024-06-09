/* eslint-disable camelcase */
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Button, LinearProgress, Table, TableBody, TableHead } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import CrudEstudianteContext from '../../../context/CrudEstudianteContext'
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

function TableStudents () {
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

    getEstudiante,
    getAllEstudiantes,
    updateEstudiante,
    deleteEstudiante
  } = useContext(CrudEstudianteContext)
  const headersListData = ['username', 'rol', 'email', 'nombre', 'apellidoPaterno', 'apellidoMaterno', 'fechaNacimiento', 'editar', 'eliminar']
  const headersListView = ['Username', 'Rol', 'Correo electronico', 'Nombre', 'Apellido Paterno', 'Apellido Materno', 'Fecha de nacimiento', 'Editar', 'Eliminar']
  const [dataList, setDataList] = useState(null)
  const navigate = useNavigate()
  const handleProfile = (username, rol) => {
    // Navegar a la página de destino con argumentos
    navigate('/profile', { state: { usernameView: username, rolView: rol } })
  }

  useEffect(() => {
    const asyncStudents = async () => {
      await getAllEstudiantes()
    }

    asyncStudents()
  }, [])

  useEffect(() => {
    if (response) {
      const data = response.map((elem) => {
        const { passwordHash, ...rest } = elem
        return {
          ...rest,
          editar: <Button onClick={() => handleProfile(elem.username, elem.rol)} color='info'>Editar</Button>,
          eliminar: <Button onClick={() => deleteEstudiante(elem.username)} color='error'>Eliminar</Button>
        }
      })
      setDataList(data)
    }
  }, [response, deleteEstudiante])

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

export default TableStudents
