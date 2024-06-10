import React, { useContext, useEffect, useState } from 'react'
import SessionContext from '../../../context/SessionContext'
import CrudSolucionContext from '../../../context/CrudSolucionContext'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../../../utils/environments'
import { Grid, Skeleton } from '@mui/material'
import CardSolution from './CardSolution'

const TableSolutions = ({ grupoId = null, equipoId = null, estudianteUsername = null, getByAllFlag = false, getByAllEquipoFlag = false, getByAllIndividualFlag = false }) => {
  const { token, rol, usernameSession } = useContext(SessionContext)
  const [solucionesList, setSolucionesList] = useState([])
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

    openModalSolucionForm,
    handleOpenModalSolucionForm,
    handleCloseModalSolucionForm,

    openModalSolucionView,
    handleOpenModalSolucionView,
    handleCloseModalSolucionView,

    getAllSoluciones,
    getAllEquipo,
    getAllIndividual,
    getAllIndividualByGrupoId,
    getAllIndividualByEstudianteUsername,
    getAllEquipoByEquipoId,
    getSolucion,
    createSolucion,
    updateSolucion,
    deleteSolucion
  } = useContext(CrudSolucionContext)

  useEffect(() => {
    const fetchSoluciones = async () => {
      let listAux = []
      if (rol === ROL_TEACHER) {
        if (equipoId) {
          listAux = await getAllEquipoByEquipoId(equipoId)
        } else if (grupoId) {
          listAux = await getAllIndividualByGrupoId(grupoId)
        }
      } else if (rol === ROL_ADMIN) {
        if (getByAllFlag) {
          listAux = await getAllSoluciones()
        } else if (getByAllEquipoFlag) {
          listAux = await getAllEquipo()
        } else if (getByAllIndividualFlag) {
          listAux = await getAllIndividual()
        }
      } else if (rol === ROL_STUDENT) {
        if (equipoId) {
          listAux = await getAllEquipoByEquipoId(equipoId)
        } else {
          listAux = await getAllIndividualByEstudianteUsername(estudianteUsername)
        }
      }
      setSolucionesList(listAux)
    }

    fetchSoluciones()
  }, [])

  return (
    <Grid
      container
      spacing={2}
      justifyContent='flex-start'
    >
      {solucionesList &&
        solucionesList.map((solucion, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <CardSolution key={index} solucion={solucion} />
          </Grid>
        ))}
      {loading && !solucionesList &&
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
