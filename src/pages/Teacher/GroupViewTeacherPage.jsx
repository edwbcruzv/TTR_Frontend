import React from 'react'
import TableTeams from '../../components/forms/Teams/TableTeams'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { CrudTeamProvider } from '../../context/CrudTeamContext'
import { useParams } from 'react-router-dom'
import { Divider } from '@mui/material'
import FullScreenTeamCreate from '../../components/forms/Teams/FullScreenTeamCreate'


function GroupViewTeacherPage() {

  const { id } = useParams();

  
  return (
    <MiniDrawerFrame>{id}
        <CrudTeamProvider>
          <FullScreenTeamCreate group_id={id} />
          <Divider/>
          <TableTeams group_id={id}/>
        </CrudTeamProvider>
    </MiniDrawerFrame>
  )
}

export default GroupViewTeacherPage