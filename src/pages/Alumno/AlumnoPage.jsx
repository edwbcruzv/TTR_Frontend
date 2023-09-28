import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'

const AlumnoPage = props => {
  return (
    <div>AlumnoPage
        <Outlet/>
    </div>
  )
}

AlumnoPage.propTypes = {}

export default AlumnoPage