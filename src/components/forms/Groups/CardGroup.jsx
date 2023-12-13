import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import copy from 'clipboard-copy';

export default function CardGroup({team}) {
  const {
    id,
    clave,
    fecha_vencimiento,
    nombre_grupo,
    nombre_materia,
    profesor_id,
    equipos,
    inscripciones } = team

  const handleCopyCode = () => {
    copy(clave);
    alert(`Código "${clave}" copiado al portapapeles`);
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
              {nombre_grupo}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="text.secondary">
              {clave}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {nombre_materia}
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
