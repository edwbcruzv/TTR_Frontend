import React, { useContext } from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import { useLocation } from 'react-router-dom'
import SessionContext from '../../context/SessionContext'
import { CrudSolucionProvider } from '../../context/CrudSolucionContext'
import TableSolutions from './Components/TableSolutions'
import { Divider, Typography } from '@mui/material'
import { ROL_TEACHER } from '../../utils/environments'

export default function SolutionsPage () {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const location = useLocation()
  const { equipo } = location.state || null
  const { id, nombre, estudiantesUsernames, solucionesIds, grupoId } = equipo

  return (

    <MiniDrawerFrame>

      <CrudSolucionProvider>
        <Divider style={{ margin: '16px 0' }}> <Typography variant='h5' color='gray'>Practicas en equipo</Typography> </Divider>
        {id && <> <TableSolutions equipoId={id} /> </>}

        {rol === ROL_TEACHER &&
          <>
            <Divider style={{ margin: '16px 0' }}> <Typography variant='h5' color='gray'>Practicas individuales de los integrantes</Typography> </Divider>

            <TableSolutions grupoId={grupoId} />
          </>}
      </CrudSolucionProvider>
    </MiniDrawerFrame>
  )
}
