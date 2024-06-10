import React from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import { Divider } from '@mui/material'
import TableTeamsStudent from './Components/TableTeamsStudent'
import { CrudEquipoProvider } from '../../context/CrudEquipoContext'

export default function TeamsPage () {
  return (
    <MiniDrawerFrame>
      <Divider />
      <CrudEquipoProvider>

        <TableTeamsStudent />
      </CrudEquipoProvider>
    </MiniDrawerFrame>
  )
}
