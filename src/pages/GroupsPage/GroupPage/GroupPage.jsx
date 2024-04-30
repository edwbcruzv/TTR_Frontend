import React from 'react'
import MiniDrawerFrame from '../../../components/Dashboard/MiniDrawerFrame'
import { CrudEquipoProvider } from '../../../context/CrudEquipoContext'
import { Divider } from '@mui/material'
import FullScreenTeamCreate from './Components/FullScreenTeamCreate'
import TableTeams from '../../TeamsPage/Components/TableTeams'
import { useParams } from 'react-router-dom'

export default function GroupPage () {
  const { id } = useParams()
  return (
    <MiniDrawerFrame>
      <CrudEquipoProvider>
        <FullScreenTeamCreate group_id={id} />
        <br />
        <Divider />
        <br />
        <TableTeams group_id={id} />
      </CrudEquipoProvider>

    </MiniDrawerFrame>
  )
}
