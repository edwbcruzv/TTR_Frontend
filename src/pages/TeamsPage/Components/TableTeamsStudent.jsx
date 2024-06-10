import React, { useContext, useEffect } from 'react'
import CrudEquipoContext from '../../../context/CrudEquipoContext'
import { Alert, AlertTitle, Grid, Skeleton } from '@mui/material'
import CardTeam from '../../GroupsPage/GroupPage/Components/CardTeam'
import SessionContext from '../../../context/SessionContext'

export default function TableTeamsStudent () {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession, darkMode, toggleDarkMode } = useContext(SessionContext)
  const { response, error, loading, getAllByEstudianteUsername } = useContext(CrudEquipoContext)

  useEffect(() => {
    getAllByEstudianteUsername(usernameSession)
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
              <AlertTitle>No haz sido asignado a algun equipo</AlertTitle>
              No eres miembro de algun equipo. Recuerte solicitar la clave para inscribirte a algun grupo y puedas trabajar en equipos de tu grupo.
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
