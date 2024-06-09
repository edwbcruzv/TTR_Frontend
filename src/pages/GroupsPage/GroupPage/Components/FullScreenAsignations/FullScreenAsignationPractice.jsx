import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { Grid } from '@mui/material'
import ListAsyncPractices from './ListAsyncPractices'
import AccordionPractices from './AccordionPractices'
import CrudPracticaContext from '../../../../../context/CrudPracticaContext'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function FullScreenAsignationPractice ({ grupoId }) {
  const {
    loading,
    response,
    responseAll,
    error,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalPracticaForm,
    handleOpenModalPracticaForm,
    handleCloseModalPracticaForm,

    openModalAsignarPractica,
    handleOpenModalAsignarPractica,
    handleCloseModalAsignarPractica,

    getAllPracticas,
    getPractica,
    getAllPracticasByProfesorUsername,
    createPractica,
    updatePractica,
    deletePractica,
    asignarPractica
  } = React.useContext(CrudPracticaContext)

  return (
    <>
      <Button fullWidth variant='contained' onClick={handleOpenModalAsignarPractica}>
        Asignacion de practicas
      </Button>
      <Dialog
        fullScreen
        open={openModalAsignarPractica}
        onClose={handleCloseModalAsignarPractica}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseModalAsignarPractica}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Sound
            </Typography>
            <Button autoFocus color='inherit' onClick={handleCloseModalAsignarPractica}>
              salir
            </Button>
          </Toolbar>
        </AppBar>

        <Grid
          container
          direction='column'
          justifyContent='flex-start'
          alignItems='center'
          spacing={2}
        >
          <br />
          <Grid item> <ListAsyncPractices grupoId={grupoId} /> </Grid>
          <Grid item> <AccordionPractices /> </Grid>

        </Grid>
      </Dialog>
    </>
  )
}
