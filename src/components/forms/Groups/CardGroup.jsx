import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import copy from 'clipboard-copy';

export default function CardGroup() {
  const NameGroup = '4CM5';
  const groupCode = 'hg5ew8u2f'; // Reemplaza con tu código de grupo dinámico

  const handleCopyCode = () => {
    copy(groupCode);
    alert(`Código "${groupCode}" copiado al portapapeles`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              {NameGroup}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="text.secondary">
              {groupCode}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          Liderazgo
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Equipos</Button>
        <Button size="small">Alumnos</Button>
        <Button size="small" onClick={handleCopyCode}>
          Copiar Código
        </Button>
      </CardActions>
    </Card>
  );
}
