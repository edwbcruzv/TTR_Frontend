import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import Typography from '@mui/material/Typography'
import CrudUser from '../../components/forms/Users/CrudUser'
import { CrudUserProvider } from '../../context/CrudUserContext'
import LabTabs from '../../components/forms/Users/LabTabs'
import { Divider } from '@mui/material'

const UsersPage = props => {
  return (
    <MiniDrawerFrame>
      <Typography variant="h3" color="primary">Usuarios</Typography>
      <CrudUserProvider>
      <CrudUser />
      <Divider/>
      <LabTabs/>
      </CrudUserProvider>
    </MiniDrawerFrame>
  )
}

export default UsersPage