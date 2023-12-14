import React from 'react'
import TableTeams from '../../components/forms/Teams/TableTeams'
import MiniDrawerFrame from '../../components/Drawers/MiniDrawerFrame'
import { CrudTeamProvider } from '../../context/CrudTeamContext'
import { useParams } from 'react-router-dom'

function GroupViewTeacherPage() {
  const { id } = useParams();
  return (
    <MiniDrawerFrame>GroupViewTeacherPage  {id}
        <CrudTeamProvider>
        <TableTeams/>
        </CrudTeamProvider>
    </MiniDrawerFrame>
  )
}

export default GroupViewTeacherPage