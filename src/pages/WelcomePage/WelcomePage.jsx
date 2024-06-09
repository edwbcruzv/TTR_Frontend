import React from 'react'
import { Box, Grid, Modal, Paper } from '@mui/material'
import FormLogin from '../../components/Auth/FormLogin'
import AuthProvider from '../../context/AuthContext'
import FormRegister from '../../components/Auth/FormRegister'
import Fondoinicio from '../../components/componentsLuis/FondoInicio'
import MetodoCasos from '../../components/componentsLuis/MetodoCasos'
import Caso from '../../components/componentsLuis/Caso'
import Footer from '../../components/componentsLuis/Footer'
import NavBarHome from '../../components/navbars/NavBarHome'

const modalStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const paperStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}

export default function WelcomePage () {
  const [openLogin, setOpenLogin] = React.useState(false)
  const handleOpenLogin = () => setOpenLogin(true)
  const handleCloseLogin = () => setOpenLogin(false)

  const [openRegister, setOpenRegister] = React.useState(false)
  const handleOpenRegister = () => setOpenRegister(true)
  const handleCloseRegister = () => setOpenRegister(false)

  return (
    <>
      <NavBarHome
        handleOpenLogin={handleOpenLogin}
        handleOpenRegister={handleOpenRegister}
      />
      <AuthProvider>

        <Modal
          open={openLogin}
          onClose={handleCloseLogin}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          style={modalStyle}
        >
          <Box sx={paperStyle}>
            <FormLogin />
          </Box>
        </Modal>

        <Modal
          open={openRegister}
          onClose={handleCloseRegister}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
          style={modalStyle}
        >
          <Box sx={paperStyle}>
            <FormRegister />
          </Box>
        </Modal>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          style={{ minHeight: '100vh', padding: '20px' }}
          spacing={4}
        >
          <Grid item>
            <Paper elevation={3}>
              <Fondoinicio />
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3}>
              <MetodoCasos />
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3}>
              <Caso />
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3}>
              <Footer />
            </Paper>
          </Grid>
        </Grid>
      </AuthProvider>
    </>
  )
}
