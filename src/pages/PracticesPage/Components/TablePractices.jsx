import { Grid, Skeleton } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import CardPractice from './CardPractice'
import SessionContext from '../../../context/SessionContext'
import CrudPracticaContext from '../../../context/CrudPracticaContext'
import { ROL_ADMIN, ROL_TEACHER } from '../../../utils/environments'

export default function TablePractices () {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const {
    loading,
    response,
    error,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalPracticaForm,
    handleOpenModalPracticaForm,
    handleCloseModalPracticaForm,

    openModalPracticaView,
    handleOpenModalPracticaView,
    handleCloseModalPracticaView,

    getAllPracticas,
    getPractica,
    getAllPracticasByProfesorUsername,
    createPractica,
    updatePractica,
    deletePractica
  } = useContext(CrudPracticaContext)
  useEffect(() => {
    if (rol === ROL_TEACHER) {
      getAllPracticasByProfesorUsername(usernameSession)
    } else if (rol === ROL_ADMIN) {
      getAllPracticas()
    }
    console.log('Response: ', response)
  }, [response])

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
      {response && response.map((practica, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}><CardPractice key={index} practica={practica} /></Grid>)}
      {loading && [0, 1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5, maxWidth: 345 }}>
        <Skeleton variant='rectangular' width={305} height={140} />
        <Skeleton />
        <Skeleton width='60%' />
      </Grid>)}

    </Grid>
  )
}
