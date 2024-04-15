import React, { useContext, useEffect } from 'react'
import CardGroup from './CardGroup'
import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material'
import { ROL_TEACHER } from '../../../utils/jwt_data'
import CrudGrupoContext from '../../../context/CrudGrupoContext'
import useSession from '../../../hooks/useSession'

const TableGroups = () => {
  const { token, rol, usernameSession, nombre, isValid, deleteSession } = useSession()
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

    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm,

    getGrupo,
    getAllGruposByProfesorUsername,
    createGrupo,
    updateGrupo,
    deleteGrupo
  } = useContext(CrudGrupoContext)

  useEffect(async () => {
    async function fAsync () {
      if (rol === ROL_TEACHER) {
        console.log(rol, usernameSession)
        await getAllGruposByProfesorUsername(usernameSession)
        console.log('Response: ', response)
      } else {
        console.log('todos') // getAll
      }
    }
    fAsync()
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
      {response && response.map((grupo, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}><CardGroup key={index} group={grupo} /></Grid>)}
      {loading && [0, 1, 2, 3, 4, 5, 6, 7, 8].map((elem, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5, maxWidth: 345 }}>
        <Skeleton variant='rectangular' width={305} height={140} />
        <Skeleton />
        <Skeleton width='60%' />
      </Grid>)}

    </Grid>
  )
}

export default TableGroups
