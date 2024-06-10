import React from 'react'
import MiniDrawerFrame from '../../../components/Dashboard/MiniDrawerFrame'
import { CrudEquipoProvider } from '../../../context/CrudEquipoContext'
import { Box, Divider, Grid, Typography } from '@mui/material'
import FullScreenTeamCreate from './Components/FullScreenTeamCreate'
import TableTeams from './Components/TableTeams'
import { useLocation } from 'react-router-dom'
import FullScreenAsignationPractice from './Components/FullScreenAsignations/FullScreenAsignationPractice'
import { CrudPracticaProvider } from '../../../context/CrudPracticaContext'
import { CrudSolucionProvider } from '../../../context/CrudSolucionContext'
import TableSolutions from '../../SolutionsPage/Components/TableSolutions'

export default function GroupPage () {
  const location = useLocation()
  const { groupId, groupLabel } = location.state || {}
  return (
    <MiniDrawerFrame>
      <CrudEquipoProvider>
        <Grid
          container
          spacing={4}
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          alignContent='center'
        >
          <Grid item xs={6}>

            <FullScreenTeamCreate grupoId={groupId} />
          </Grid>
          <Grid item xs={6}>

            <CrudPracticaProvider>
              <FullScreenAsignationPractice grupoId={groupId} />
            </CrudPracticaProvider>
          </Grid>
        </Grid>

        <Divider style={{ margin: '16px 0' }}> <Typography variant='h5' color='gray'>{groupLabel}</Typography> </Divider>

        <TableTeams grupoId={groupId} />

        <CrudSolucionProvider>
          <Divider style={{ margin: '16px 0' }}> <Typography variant='h5' color='gray'>Practicas individuales de los alumnos</Typography> </Divider>
          {groupId && <> <TableSolutions grupoId={groupId} /> </>}
        </CrudSolucionProvider>

      </CrudEquipoProvider>

    </MiniDrawerFrame>
  )
}
