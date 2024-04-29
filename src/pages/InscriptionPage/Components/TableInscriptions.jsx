import React, { useContext, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material'
import CardInscription from './CardInscription'
import CrudInscripcionContext from '../../../context/CrudInscripcionContext'
import SessionContext from '../../../context/SessionContext'

const TableInscriptions = () => {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const {
    response,
    error,
    loading,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    getInscripcion,
    getAllInscripcionesByGrupoId,
    getAllInscripcionesByEstudianteUsername,
    createInscripcion,
    updateInscripcion,
    deleteInscripcion
  } = useContext(CrudInscripcionContext)

  useEffect(() => {
    getAllInscripcionesByEstudianteUsername(usernameSession)
    console.log('Response: ', response)
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
      {response && response.map((inscripcion, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}><CardInscription key={index} inscription={inscripcion} /></Grid>)}
      {loading && [0, 1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5, maxWidth: 345 }}>
        <Skeleton variant='rectangular' width={305} height={140} />
        <Skeleton />
        <Skeleton width='60%' />
      </Grid>)}

    </Grid>
  )
}

export default TableInscriptions
