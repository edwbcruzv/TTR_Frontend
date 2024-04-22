import React from 'react'
import { CrudGrupoProvider } from '../../context/CrudGrupoContext'
import { Divider } from '@mui/material'

import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import CrudGroupModal from './Components/CrudGroupModal'
import TableGroups from './Components/TableGroups'

export default function GroupsPage () {
  return (
    <MiniDrawerFrame>
      <CrudGrupoProvider>

        <CrudGroupModal />
        <Divider />
        <TableGroups />

      </CrudGrupoProvider>
    </MiniDrawerFrame>
  )
}
