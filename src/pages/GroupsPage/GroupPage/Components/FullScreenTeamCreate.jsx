import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'

import CrudTeamContext from '../../../context/CrudTeamContext'
import FormTeam from '../../../TeamsPage/Components/FormTeam'
import HelpTooltip from '../../Tooltips/HelpTooltip'
import Grid from '@mui/material/Grid'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const FullScreenTeamCreate = ({ group_id }) => {
  const {
    response, error, loading,
    viewDataEdit, createData,
    updateData, deleteData,
    register, handleSubmit, watch, errors, setValue, getValues,
    openModalForm, handleOpenModalForm, handleCloseModalForm,
    openModalView, handleOpenModalView, handleCloseModalView
  } = useContext(CrudTeamContext)

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
        <Button variant='outlined' onClick={handleOpenModalForm}>
          Crear Equipo
        </Button>
        <HelpTooltip text='Aqui se muestran los grupos del semestre en curso.' />
      </Grid>
      <Dialog
        fullScreen
        open={openModalForm}
        onClose={handleCloseModalForm}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleCloseModalForm}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Equipo
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <FormTeam group_id={group_id} />
      </Dialog>
    </>
  )
}

export default FullScreenTeamCreate
