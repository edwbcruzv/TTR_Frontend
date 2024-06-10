import React, { useContext } from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import TableSolutions from '../SolutionsPage/Components/TableSolutions'
import { Divider, Typography } from '@mui/material'
import { CrudSolucionProvider } from '../../context/CrudSolucionContext'
import SessionContext from '../../context/SessionContext'

export default function IndividualsPage () {
  const { token, rol, usernameSession } = useContext(SessionContext)
  return (
    <MiniDrawerFrame>

      <CrudSolucionProvider>

        <Divider style={{ margin: '16px 0' }}> <Typography variant='h5' color='gray'>Tus practicas individuales</Typography> </Divider>
        <TableSolutions estudianteUsername={usernameSession} />
      </CrudSolucionProvider>
    </MiniDrawerFrame>
  )
}
