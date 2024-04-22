import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CaseStepper from './CaseStepper';
import { useContext } from 'react';
import CrudCaseContext from '../../../context/CrudCaseContext';
import { Grid } from '@mui/material';
import HelpTooltip from '../../Tooltips/HelpTooltip';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenCaseCreate() {

  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,
    openModalForm,handleOpenModalForm,handleCloseModalForm,
    openModalView,handleOpenModalView,handleCloseModalView} = useContext(CrudCaseContext)
    

  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center" 
      >
      <Button variant="outlined" onClick={handleOpenModalForm}>
        Crear nuevo caso
      </Button>
      <HelpTooltip text={""}/>
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
              edge="start"
              color="inherit"
              onClick={handleCloseModalForm}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Crear nuevo caso
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <CaseStepper/>
      </Dialog>
    </React.Fragment>
  );
}