import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import CrudTeamContext from '../../../context/CrudTeamContext';

export default function CardTeam({team}) {
  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,setValue,getValues,
    openModalForm,handleOpenModalForm,handleCloseModalForm,
    openModalView,handleOpenModalView,handleCloseModalView} =useContext(CrudTeamContext)
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {team.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>viewDataEdit(team.id)} size="small">Editar</Button>
        <Button onClick={()=>deleteData(team.id)}  size="small">Eliminar</Button>
      </CardActions>
    </Card>
  );
}