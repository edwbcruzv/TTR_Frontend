import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import FormCaseStepper from '../../components/forms/Cases/FormCaseStepper'
import { CrudCaseProvider } from '../../context/CrudCaseContext'

const CasesTeacherPage = () => {
  return (
    <MiniDrawerFrame>
        <CrudCaseProvider>
        <FormCaseStepper />
      </CrudCaseProvider>
    </MiniDrawerFrame>
  )
}

export default CasesTeacherPage