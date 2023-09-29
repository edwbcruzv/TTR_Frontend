import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const StudentPage = props => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

StudentPage.propTypes = {}

export default StudentPage