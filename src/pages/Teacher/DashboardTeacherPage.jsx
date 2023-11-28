import React from 'react'
import PropTypes from 'prop-types'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { CrudCaseProvider } from '../../context/CrudCaseContext'
import CrudUser from '../../components/forms/CrudUser'

const DashboardTeacherPage = props => {
  return (
    <MiniDrawerFrame>
      <CrudUser/>
    </MiniDrawerFrame>
  )
}

DashboardTeacherPage.propTypes = {}

export default DashboardTeacherPage