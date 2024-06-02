import React from 'react'
import MiniDrawerFrame from '../../../components/Dashboard/MiniDrawerFrame'
import { CrudEquipoProvider } from '../../../context/CrudEquipoContext'
import { Divider } from '@mui/material'
import FullScreenTeamCreate from './Components/FullScreenTeamCreate'
import TableTeams from './Components/TableTeams'
import { useLocation } from 'react-router-dom'
import FullScreenAsignationPractice from './Components/FullScreenAsignations/FullScreenAsignationPractice'
import { CrudPracticaProvider } from '../../../context/CrudPracticaContext'

export default function GroupPage () {
  const location = useLocation()
  const { groupId } = location.state || {}
  return (
    <MiniDrawerFrame>
      <CrudEquipoProvider>
        <FullScreenTeamCreate grupoId={groupId} />
        <CrudPracticaProvider>
          <FullScreenAsignationPractice grupoId={groupId} />
        </CrudPracticaProvider>
        <br />
        <Divider />
        <br />
        <TableTeams grupoId={groupId} />
      </CrudEquipoProvider>

    </MiniDrawerFrame>
  )
}
