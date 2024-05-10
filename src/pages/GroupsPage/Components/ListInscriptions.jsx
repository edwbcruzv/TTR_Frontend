import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { Divider, Grid, Typography } from '@mui/material'
import CrudInscripcionContext from '../../../context/CrudInscripcionContext'

export default function ListInscriptions ({ grupoId, handleClose }) {
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

    getInscripcion,
    getAllInscripcionesByGrupoId,
    getAllInscripcionesByEstudianteUsername,
    createInscripcion,
    updateInscripcion,
    deleteInscripcion
  } = React.useContext(CrudInscripcionContext)

  React.useEffect(() => {
    getAllInscripcionesByGrupoId(grupoId)
  }, [])
  // console.log(inscriptions)
  // console.log('Response: ', response)
  function deleteHandle (inscription) {
    handleClose()
    deleteInscripcion(inscription.grupoId, inscription.estudianteUsername, inscription.estudianteNombre)
  }
  return (

    <Grid item xs={12}>
      <Typography variant='h5'>
        Alumnos inscritos
      </Typography>
      <Divider />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {response && response.map((inscription, index) => (
          <ListItem
            key={index}
            disableGutters
            secondaryAction={
              // <IconButton aria-label='comment'>
              <IconButton aria-label='comment' onClick={() => deleteHandle(inscription)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={inscription.estudianteNombre} />
          </ListItem>
        ))}
      </List>

    </Grid>
  )
}
