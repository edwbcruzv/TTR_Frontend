import { Grid, Skeleton, Alert, AlertTitle } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CardPractice from './CardPractice'
import SessionContext from '../../../context/SessionContext'
import CrudPracticaContext from '../../../context/CrudPracticaContext'
import { ROL_ADMIN, ROL_TEACHER } from '../../../utils/environments'

export default function TablePractices () {
  const { rol, usernameSession } = useContext(SessionContext)
  const {
    loading,
    responseAll,
    getAllPracticas,
    getAllPracticasByProfesorUsername
  } = useContext(CrudPracticaContext)

  useEffect(() => {
    if (rol === ROL_TEACHER) {
      getAllPracticasByProfesorUsername(usernameSession)
    } else if (rol === ROL_ADMIN) {
      getAllPracticas()
    }
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
      {responseAll && responseAll.length > 0
        ? responseAll.map((practica, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <CardPractice practica={practica} />
          </Grid>
        ))

        : loading
          ? Array.from(new Array(12)).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Skeleton variant='rectangular' width='100%' height={140} />
              <Skeleton />
              <Skeleton width='60%' />
            </Grid>
          ))

          : <Grid item xs={12}>
            <Alert severity='info'>
              <AlertTitle>No hay prácticas registradas</AlertTitle>
              {rol === ROL_ADMIN ? <>Los profesores aun no suben sus practicas.</> : <>¡Agrega prácticas para verlas aquí!</>}
            </Alert>
          </Grid>}
    </Grid>
  )
}
