import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import TableGroups from '../../components/forms/Groups/TableGroups'
import { CrudGroupProvider } from '../../context/CrudGroupContext'
import { Divider } from '@mui/material'
import CrudGroupModal from '../../components/forms/Groups/CrudGroupModal'

const GroupsTeacherPage = () => {
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

export default GroupsTeacherPage