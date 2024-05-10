import React from 'react'
import { CrudGrupoProvider } from '../../context/CrudGrupoContext'
import { Divider } from '@mui/material'

import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import CrudGroupModal from './Components/CrudGroupModal'
import TableGroups from './Components/TableGroups'
import { CrudInscripcionProvider } from '../../context/CrudInscripcionContext'

export default function GroupsPage () {
  return (
    <MiniDrawerFrame>
      <CrudGrupoProvider>

        <CrudGroupModal />
        <Divider />
        <br />
        <CrudInscripcionProvider>
          <TableGroups />
        </CrudInscripcionProvider>
      </CrudGrupoProvider>
    </MiniDrawerFrame>
  )
}
