import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import { Grid } from '@mui/material'
import { forwardRef, useContext } from 'react'
import CrudPracticaContext from '../../../context/CrudPracticaContext'
import FormPractice from './FormPractice'

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function FullScreenCreatePractice () {
  const {
    loading,

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

    openModalPracticaView,
    handleOpenModalPracticaView,
    handleCloseModalPracticaView,

    getAllPracticas,
    getPractica,
    getAllPracticasByProfesorUsername,
    createPractica,
    updatePractica,
    deletePractica
  } = useContext(CrudPracticaContext)
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        alignContent='center'
      >
        <Button variant='outlined' onClick={handleOpenModalPracticaForm}>
          Crear practica
        </Button>
        {/* <HelpTooltip text='' /> */}
      </Grid>
      <Dialog
        fullScreen
        open={openModalPracticaForm}
        onClose={handleCloseModalPracticaForm}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseModalPracticaForm}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Crear Practica
            </Typography>

          </Toolbar>
        </AppBar>
        <FormPractice />
      </Dialog>
    </>
  )
}
