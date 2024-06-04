import React, { useContext } from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import { CrudPracticaProvider } from '../../context/CrudPracticaContext'
import { Divider } from '@mui/material'
import FullScreenCreatePractice from './Components/FullScreenCreatePractice'
import TablePractices from './Components/TablePractices'

import { ROL_STUDENT, ROL_TEACHER } from '../../utils/environments'
import SessionContext from '../../context/SessionContext'
import { CrudSolucionProvider } from '../../context/CrudSolucionContext'
import TableSolutions from '../SolutionsPage/Components/TableSolutions'

export default function PracticesPage () {
  const { token, rol, usernameSession, nombre, email, isValid, deleteSession } = useContext(SessionContext)
  return (
    <MiniDrawerFrame>
      <CrudSolucionProvider>

        <CrudPracticaProvider>
          {rol === ROL_TEACHER && <FullScreenCreatePractice />}

          <Divider style={{ margin: '16px 0' }} />
          {rol === ROL_TEACHER && <TablePractices />}

          {rol === ROL_STUDENT && <TableSolutions />}

        </CrudPracticaProvider>
      </CrudSolucionProvider>
    </MiniDrawerFrame>
  )
}
