import React from 'react'
import {
  Button,
  Typography, AppBar, Toolbar
} from '@mui/material'
// import '../../styles/header.css'

const NavBarHome = ({ handleOpenLogin, handleOpenRegister }) => {
  // const navigate = useNavigate()
  return (

    <AppBar position='fixed' color='primary'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Bienvenido
        </Typography>
        <Button onClick={handleOpenLogin} color='inherit'>
          Iniciar sesión
        </Button>
        <Button onClick={handleOpenRegister} color='inherit'>
          Registrarse
        </Button>
      </Toolbar>
    </AppBar>
  )
}

NavBarHome.propTypes = {}

export default NavBarHome
