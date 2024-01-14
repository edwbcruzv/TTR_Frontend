import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { CrudCaseProvider } from '../../context/CrudCaseContext'
import FullScreenCaseCreate from '../../components/forms/Cases/FullScreenCaseCreate'
import { Divider } from '@mui/material'
import TableCases from '../../components/forms/Cases/TableCases'

const CasesTeacherPage = () => {
  return (
    <MiniDrawerFrame>
        <CrudCaseProvider>
        <FullScreenCaseCreate/>
        <Divider/>
        <br />
        <TableCases/>
      </CrudCaseProvider>
    </MiniDrawerFrame>
  )
}

export default CasesTeacherPage