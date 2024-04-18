import React, { useContext, useEffect } from 'react'
import CardGroup from './CardGroup'
import Grid from '@mui/material/Grid'
import { Skeleton } from '@mui/material'
import { ROL_ADMIN, ROL_TEACHER } from '../../../utils/jwt_data'
import CrudGrupoContext from '../../../context/CrudGrupoContext'
import useSession from '../../../hooks/useSession'
import SessionContext from '../../../context/SessionContext'

const TableGroups = () => {
  const { token, setToken, rol, setRol, usernameSession, setUsernameSession, nombre, setNombre, email, setEmail, isValid, setIsValid } = useContext(SessionContext)
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

    getAllGrupos,
    getGrupo,
    getAllGruposByProfesorUsername,
    createGrupo,
    updateGrupo,
    deleteGrupo
  } = useContext(CrudGrupoContext)

  console.log(token, rol, usernameSession, nombre, email, isValid)
  useEffect(() => {
    // async function funAsync () {
    if (rol === ROL_TEACHER) {
      getAllGruposByProfesorUsername(usernameSession)
    } else if (rol === ROL_ADMIN) {
      getAllGrupos() // getAll
    }
    console.log('Response: ', response)
    // }
    // funAsync()
  }, [isValid])

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
