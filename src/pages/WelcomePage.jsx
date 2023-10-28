import React from 'react'
import { Button,
  Container,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import NavBarHome from '../components/navbars/NavBarHome';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormLogin from '../components/forms/FormLogin';
import { URI_BACKEND } from '../utils/urls';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const WelcomePage = props => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <NavBarHome handleOpen={handleOpen}/>      

    <Container maxWidth="md">
      <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>

        <Grid item xs={12}>      
          <Paper style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              ¡Bienvenido a nuestro sitio web!
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lorem ut libero malesuada feugiat.
            </Typography>
            <Button  variant="contained" color="primary" style={{ marginTop: '16px' }}>
              Comenzar
            </Button>
        {/* aqui la bienvenida */}
          </Paper>
        </Grid>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormLogin  uri={URI_BACKEND('auth/login')} title='Login'/>
        </Box>
      </Modal>
      </Grid>
    </Container>
    </>
  )
}

export default WelcomePage