import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import Typography from '@mui/material/Typography'
import CrudUser from '../../components/forms/CrudUser'

const UsersPage = props => {
  return (
    <MiniDrawerFrame>
      <Typography variant="h3" color="primary">Usuarios</Typography>
      <CrudUser />
    </MiniDrawerFrame>
  )
}

export default UsersPage