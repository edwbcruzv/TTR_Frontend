import React from 'react'
import PropTypes from 'prop-types'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { CrudCaseProvider } from '../../context/CrudCaseContext'
import CaseFormStepper from '../../components/forms/CaseFormStepper'

const DashboardTeacherPage = props => {
  return (
    <MiniDrawerFrame>
      <CrudCaseProvider>
        <CaseFormStepper />

      </CrudCaseProvider>
    </MiniDrawerFrame>
  )
}

DashboardTeacherPage.propTypes = {}

export default DashboardTeacherPage