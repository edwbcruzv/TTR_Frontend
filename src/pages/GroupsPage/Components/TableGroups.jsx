import React, { useContext, useEffect } from 'react'
import CardGroup from './CardGroup'
import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material'
import CrudGrupoContext from '../../../context/CrudGrupoContext'
import { ROL_ADMIN, ROL_TEACHER } from '../../../utils/environments'
import SessionContext from '../../../context/SessionContext'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const TableGroups = () => {
  const { rol, usernameSession } = useContext(SessionContext)
  const {
    response,
    loading,
    getAllGrupos,
    getAllGruposByProfesorUsername
  } = useContext(CrudGrupoContext)

  useEffect(() => {
    if (rol === ROL_TEACHER) {
      getAllGruposByProfesorUsername(usernameSession)
    } else if (rol === ROL_ADMIN) {
      getAllGrupos()
    }
  }, [])

  return (
    <Grid container spacing={2} justifyContent='flex-start' alignItems='flex-start'>
      {response && response.length > 0
        ? (
            response.map((grupo, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                <CardGroup group={grupo} />
              </Grid>
            ))
          )
        : loading
          ? (
              Array.from({ length: 12 }).map((_, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3}>
                  <Skeleton variant='rectangular' width='100%' height={140} />
                  <Skeleton />
                  <Skeleton width='60%' />
                </Grid>
              ))
            )
          : rol === ROL_ADMIN
            ? <Grid item xs={12}>
              <Alert severity='info'>
                <AlertTitle>No hay grupos registrados</AlertTitle>
                ¡Agrega grupos y asignalos a los profesores!
              </Alert>
              </Grid>
            : <Grid item xs={12}>
              <Alert severity='info'>
                <AlertTitle>No tiene grupos registrados</AlertTitle>
                Acuda con el administrador del sistema para que le sean asignados sus grupos.
              </Alert>
            </Grid>}
    </Grid>
  )
}

export default TableGroups
