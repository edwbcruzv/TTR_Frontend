import React, { useContext, useEffect } from 'react'
import SessionContext from '../../../context/SessionContext'
import CrudSolucionContext from '../../../context/CrudSolucionContext'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../../utils/environments'
import { Grid, Skeleton } from '@mui/material'
import CardSolution from './CardSolution'

const TableSolutions = ({ equipoId }) => {
  const { token, rol, usernameSession } = useContext(SessionContext)
  const {
    loading,
    responseAll,
    error,

    getAllSoluciones,
    getAllSolucionesByEquipoId,
    getAllSolucionesByEstudianteUsername
  } = useContext(CrudSolucionContext)

  useEffect(() => {
    const fetchSoluciones = async () => {
      if (rol === ROL_TEACHER) {
        await getAllSolucionesByEquipoId(equipoId)
      } else if (rol === ROL_ADMIN) {
        await getAllSoluciones()
      } else if (rol === ROL_STUDENT) {
        await getAllSolucionesByEstudianteUsername(usernameSession)
      }
    }

    fetchSoluciones()
  }, [])

  return (
    <Grid
      container
      spacing={2}
      justifyContent='flex-start'
    >
      {responseAll &&
        responseAll.map((solucion, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <CardSolution key={index} solucion={solucion} />
          </Grid>
        ))}
      {loading && !responseAll &&
        Array.from(Array(9).keys()).map((index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5 }}>
            <Skeleton variant='rectangular' width='100%' height={140} />
            <Skeleton />
            <Skeleton width='60%' />
          </Grid>
        ))}
    </Grid>
  )
}

export default TableSolutions
