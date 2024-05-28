import React from 'react'
import MiniDrawerFrame from '../../../components/Dashboard/MiniDrawerFrame'
import { CrudEquipoProvider } from '../../../context/CrudEquipoContext'
import { Divider } from '@mui/material'
import FullScreenTeamCreate from './Components/FullScreenTeamCreate'
import TableTeams from './Components/TableTeams'
import { useParams } from 'react-router-dom'
import FullScreenAsignationPractice from './Components/FullScreenAsignations/FullScreenAsignationPractice'
import { CrudPracticaProvider } from '../../../context/CrudPracticaContext'

export default function GroupPage () {
  const { id } = useParams()
  return (
    <MiniDrawerFrame>
      <CrudEquipoProvider>
        <FullScreenTeamCreate grupoId={id} />
        <CrudPracticaProvider>
          <FullScreenAsignationPractice grupoId={id} />
        </CrudPracticaProvider>
        <br />
        <Divider />
        <br />
        <TableTeams grupoId={id} />
      </CrudEquipoProvider>

    </MiniDrawerFrame>
  )
}
