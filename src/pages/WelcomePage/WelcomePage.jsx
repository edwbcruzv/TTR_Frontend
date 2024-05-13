import React from 'react'
import NavBarHome from '../../components/Navbars/NavBarHome'
import { Box, Grid, Modal } from '@mui/material'
import FormLogin from '../../components/Auth/FormLogin'
import AuthProvider from '../../context/AuthContext'
import FormRegister from '../../components/Auth/FormRegister'
import Fondoinicio from '../../components/componentsLuis/FondoInicio'
import MetodoCasos from '../../components/componentsLuis/MetodoCasos'
import Caso from '../../components/componentsLuis/Caso'
import Footer from '../../components/componentsLuis/Footer'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#1c2630',
  border: '2px solid #000',
  height: 'auto',
  p: 4
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
        <Grid
          container
          justify='center'
          alignItems='center'
          style={{ minHeight: '100vh' }}
        >
          <Modal
            open={openLogin}
            onClose={handleCloseLogin}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <FormLogin />
            </Box>
          </Modal>

          <Modal
            open={openRegister}
            onClose={handleCloseRegister}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >

            <Box sx={style}>
              <FormRegister />
            </Box>
          </Modal>
          <Fondoinicio />
        <MetodoCasos />
        <Caso />
        </Grid>

    
        <Footer /> 
      </AuthProvider>
    </>
  )
}
