import React from 'react'
import PropTypes from 'prop-types'
import { Divider, MenuItem, MenuList, Paper } from '@mui/material'
import NavBarUser from '../../components/navbars/NavBarUser'


const DashboardAdminPage = props => {
  return (
    <>
    <NavBarUser/>

    <Paper sx={{ width: 200 }}>
      <MenuList dense>
        <MenuItem onClick={()=>{alert("click")}} >
          Alumnos
        </MenuItem>
        <MenuItem>
          Profesores
        </MenuItem>
        <MenuItem>
          Administradores
        </MenuItem>
        <Divider  />
        <MenuItem>
          Casos
        </MenuItem>
        <MenuItem>
          Grupos
        </MenuItem>
        <Divider />
        <MenuItem>
          Otros
        </MenuItem>
        <Divider  />
        <MenuItem>
         Perfil  
        </MenuItem>
      </MenuList>
    </Paper>
    </>
  )
}

DashboardAdminPage.propTypes = {}

export default DashboardAdminPage