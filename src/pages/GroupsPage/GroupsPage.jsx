import React from 'react'
import { CrudGrupoProvider } from '../../context/CrudGrupoContext'
import { Divider } from '@mui/material'
import CrudGroupModal from '../../components/Forms/Groups/CrudGroupModal'
import TableGroups from '../../components/Forms/Groups/TableGroups'

export default function GroupsPage () {
  return (
    <>
      <CrudGrupoProvider>

        <CrudGroupModal />
        <Divider />
        <TableGroups />

      </CrudGrupoProvider>
    </>
  )
}
