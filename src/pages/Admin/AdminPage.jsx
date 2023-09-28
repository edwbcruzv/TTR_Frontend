import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const AdminPage = props => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

AdminPage.propTypes = {}

export default AdminPage