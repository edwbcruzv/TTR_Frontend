import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useContext } from 'react'
import CrudEquipoContext from '../../../../context/CrudEquipoContext'

export default function CardTeam ({ team }) {
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

    left,
    setLeft,
    right,
    setRight,

    getEquipo,
    getAllEquipoByGrupoId,
    setRightEstudiantesNotTeamByGroupId,
    createEquipo,
    updateEquipo,
    deleteEquipo
  } = useContext(CrudEquipoContext)
  // console.log(team)
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {team.nombre}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => getEquipo(team.id)} size='small'>Editar</Button>
        <Button onClick={() => deleteEquipo(team.id, team.grupoId)} size='small'>Eliminar</Button>
      </CardActions>
    </Card>
  )
}
