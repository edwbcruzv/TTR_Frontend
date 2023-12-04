import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import TableGroups from '../../components/forms/Groups/TableGroups'
import { CrudGroupProvider } from '../../context/CrudGroupContext'

const GroupsTeacherPage = () => {
  return (
    <MiniDrawerFrame>
      <CrudGroupProvider>
      <TableGroups/>
      </CrudGroupProvider>
    </MiniDrawerFrame>
  )
}

export default GroupsTeacherPage