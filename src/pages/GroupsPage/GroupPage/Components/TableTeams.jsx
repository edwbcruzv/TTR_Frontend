import React, { useContext, useEffect } from 'react'
import { Grid, Skeleton, Alert, AlertTitle } from '@mui/material'
import CardTeam from './CardTeam'
import CrudEquipoContext from '../../../../context/CrudEquipoContext'

function TableTeams ({ grupoId }) {
  const { response, error, loading, getAllEquipoByGrupoId } = useContext(CrudEquipoContext)

  useEffect(() => {
    getAllEquipoByGrupoId(grupoId)
  }, [grupoId])

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
      {response && response.length > 0
        ? (
            response.map((equipo, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
                <CardTeam team={equipo} />
              </Grid>
            ))
          )
        : !loading && (
          <Grid item xs={12}>
            <Alert severity='info'>
              <AlertTitle>Sin Equipos Registrados</AlertTitle>
              No hay equipos registrados en este grupo. Recuerte enviarles el codigo a sus alumnos para que se inscriban al grupo y poder comenzar a trabajar.
            </Alert>
          </Grid>
          )}
      {loading &&
        [...Array(12)].map((_, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Skeleton variant='rectangular' width='100%' height={140} />
            <Skeleton />
            <Skeleton width='60%' />
          </Grid>
        ))}
      {error && (
        <Grid item xs={12}>
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            Error al cargar los equipos. Avice al administrador de este error.
          </Alert>
        </Grid>
      )}
    </Grid>
  )
}

export default TableTeams
