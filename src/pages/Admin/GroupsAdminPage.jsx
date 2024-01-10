import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { CrudGroupProvider } from '../../context/CrudGroupContext'
import CrudGroupModal from '../../components/forms/Groups/CrudGroupModal'
import { Divider } from '@mui/material'
import TableGroups from '../../components/forms/Groups/TableGroups'

const GroupsAdminPage = () => {
  return (
    <MiniDrawerFrame>
      <CrudGroupProvider>
        <CrudGroupModal/>
        <Divider/>
      <TableGroups/>
      </CrudGroupProvider>
    </MiniDrawerFrame>
  )
}

export default GroupsAdminPage