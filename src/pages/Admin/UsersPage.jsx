import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import Typography from '@mui/material/Typography'
import { CrudUserProvider } from '../../context/CrudUserContext'
import LabTabs from '../../components/forms/Users/LabTabs'
import { Divider } from '@mui/material'
import CrudUserModal from '../../components/forms/Users/CrudUserModal'

const UsersPage = props => {
  return (
    <MiniDrawerFrame>
      <Typography variant="h3" color="primary">Usuarios</Typography>
      <CrudUserProvider>
      <CrudUserModal/>
      <Divider/>
      <LabTabs/>
      </CrudUserProvider>
    </MiniDrawerFrame>
  )
}

export default UsersPage