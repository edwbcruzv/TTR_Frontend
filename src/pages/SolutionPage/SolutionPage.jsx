import React, { useContext } from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import { useLocation } from 'react-router-dom'
import SessionContext from '../../context/SessionContext'
import { CrudSolucionProvider } from '../../context/CrudSolucionContext'
import TableSolutions from './Components/TableSolutions'
import { Divider } from '@mui/material'

export default function SolutionPage () {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const location = useLocation()
  const { teamId } = location.state || null

  return (

    <MiniDrawerFrame>
      <Divider style={{ margin: '16px 0' }} />
      <CrudSolucionProvider>
        {teamId && <> <TableSolutions equipoId={teamId} /> </>}

      </CrudSolucionProvider>
    </MiniDrawerFrame>
  )
}
