import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import TableGroups from '../../components/forms/Groups/TableGroups'
import { CrudGroupProvider } from '../../context/CrudGroupContext'
import { Divider } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';
import HelpTooltip from '../../components/Tooltips/HelpTooltip'

const GroupsTeacherPage = () => {
  return (
    <MiniDrawerFrame>
      <CrudGroupProvider>
        <HelpTooltip text={"Aqui se muestran los grupos del semestre en curso."}/>
        <Divider/>
        <br/>
      <TableGroups/>
      </CrudGroupProvider>
    </MiniDrawerFrame>
  )
}

export default GroupsTeacherPage