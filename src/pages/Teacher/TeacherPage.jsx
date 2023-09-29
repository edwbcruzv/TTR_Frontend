import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const TeacherPage = props => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

TeacherPage.propTypes = {}

export default TeacherPage