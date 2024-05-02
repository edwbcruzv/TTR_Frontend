import React, { useContext, useEffect } from 'react'
import { Grid, Skeleton } from '@mui/material'
import CardTeam from './CardTeam'
import CrudEquipoContext from '../../../../context/CrudEquipoContext'

function TableTeams ({ group_id }) {
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

    getEquipo,
    getAllEquipoByGrupoId,
    createEquipo,
    updateEquipo,
    deleteEquipo
  } = useContext(CrudEquipoContext)

  useEffect(() => {
    getAllEquipoByGrupoId(group_id)
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
      {response && response.map((equipo, index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3}><CardTeam team={equipo} /></Grid>)}
      {loading && [, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5, maxWidth: 345 }}>
        <Skeleton variant='rectangular' width={305} height={140} />
        <Skeleton />
        <Skeleton width='60%' />
      </Grid>)}

    </Grid>
  )
}

export default TableTeams
