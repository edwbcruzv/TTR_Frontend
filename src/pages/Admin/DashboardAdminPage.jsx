import React from 'react'
import PropTypes from 'prop-types'
import { Divider, MenuItem, MenuList, Paper } from '@mui/material'
import NavBarUser from '../../components/navbars/NavBarUser'
import DrawerMain from '../../components/drawers/DrawerMain'


const DashboardAdminPage = props => {
  return (
    <>
    <NavBarUser/>
    <DrawerMain/>
    </>
  )
}

DashboardAdminPage.propTypes = {}

export default DashboardAdminPage