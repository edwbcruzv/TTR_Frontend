import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import FilesUpload from './FilesUpload';
import { useContext } from 'react';
import CrudCaseContext from '../../../context/CrudCaseContext';
import "../../../../public/styles/vistapreviacaso.css";

const paperStyle = {
  padding: '20px',
  marginBottom: '20px',
  minHeight: '200px',
  overflow: 'auto',
};

// Estilos por defecto para las etiquetas HTML básicas
const defaultHtmlStyles = {
  fontSize: '16px',
  lineHeight: '1.6',
  fontFamily: 'Arial, sans-serif', // Cambia la fuente según tus preferencias
  margin: '0', // Elimina el margen por defecto
  padding: '0', // Elimina el padding por defecto
  textAlign: 'justify', // Justifica el texto
  color: '#000000', // Color del texto
};

const FormCaseStepView = ({ name }) => {
  const { watch, getValues } = useContext(CrudCaseContext);

  const sanitizedHtml = watch(name); // Asegúrate de que el HTML es seguro antes de usar dangerouslySetInnerHTML

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="wrap"
    >
      {getValues()[name] !== undefined && (
        <>
          <Grid item xs={8}>
            <Paper elevation={3} style={paperStyle}>
              <div
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
                style={defaultHtmlStyles}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            {/* <FilesUpload /> */}
          </Grid>
        </>
      )}
      <Grid item xs={8}>
        {name === 'inicio' && (
          <Paper elevation={3} style={paperStyle}>

           <div className="apartado">
           <Typography variant="h6" color="initial">
              {watch('introduccion')}
            </Typography>
           </div>
            
          </Paper>
        )}
        {name === 'final' && (
          <Paper elevation={3} style={paperStyle}>
            <Typography variant="h6" color="initial">
              {watch('conclusion')}
            </Typography>
            <Typography variant="h6" color="initial">
              {watch('comentarios')}
            </Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default FormCaseStepView;
