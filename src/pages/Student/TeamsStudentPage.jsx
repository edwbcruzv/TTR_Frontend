import React from 'react'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { Divider } from '@mui/material'
import GroupPopover from '../../components/Popovers/GroupPopover';
import { CrudInscriptionProvider } from '../../context/CrudInscriptionContext';
import TableInscriptions from '../../components/forms/Inscription/TableInscriptions';

const TeamsStudentPage = () => {
  
  return (
    <MiniDrawerFrame>
      <CrudInscriptionProvider>
      <GroupPopover/>
      <Divider/>
      <TableInscriptions/>
      </CrudInscriptionProvider>
    </MiniDrawerFrame>
  )
}

export default TeamsStudentPage