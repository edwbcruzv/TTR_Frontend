import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import Grid from '@mui/material/Grid'
import CrudEquipoContext from '../../../../context/CrudEquipoContext'
import FormTeam from './FormTeam'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const FullScreenTeamCreate = ({ grupoId }) => {
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

  return (
    <>

      <Button fullWidth variant='contained' onClick={handleOpenModalForm}>
        Crear Equipo
      </Button>

      {/* <HelpTooltip text='Aqui se muestran los grupos del semestre en curso.' /> */}

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
              Formulario Equipo
            </Typography>
          </Toolbar>
        </AppBar>
        <FormTeam grupoId={grupoId} />
      </Dialog>
    </>
  )
}

export default FullScreenTeamCreate
