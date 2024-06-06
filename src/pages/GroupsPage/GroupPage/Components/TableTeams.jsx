import React, { useContext, useEffect } from 'react'
import { Grid, Skeleton } from '@mui/material'
import CardTeam from './CardTeam'
import CrudEquipoContext from '../../../../context/CrudEquipoContext'

function TableTeams ({ grupoId }) {
  const {
    response,
    error,
    loading,
    getAllEquipoByGrupoId
  } = useContext(CrudEquipoContext)

  useEffect(() => {
    getAllEquipoByGrupoId(grupoId)
  }, [])

  return (
    <Grid
      container
      spacing={2}
      direction='row'
      justifyContent='flex-start'
      alignItems='flex-start'
      alignContent='stretch'
      wrap='wrap'
    >
      {response &&
        response.map((equipo, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <CardTeam team={equipo} />
          </Grid>
        ))}
      {loading &&
        [...Array(8)].map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5, maxWidth: 345 }}>
            <Skeleton variant='rectangular' width={305} height={140} />
            <Skeleton />
            <Skeleton width='60%' />
          </Grid>
        ))}
      {error && <p>Error al cargar los equipos.</p>}
    </Grid>
  )
}

export default TableTeams
