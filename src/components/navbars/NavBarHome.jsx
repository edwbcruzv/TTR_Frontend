import React from 'react'
import {
  Typography
} from '@mui/material'
import '../../styles/header.css'

const NavBarHome = ({ handleOpenLogin, handleOpenRegister }) => {
  // const navigate = useNavigate()
  return (
    <header className='nav'>
      <Typography variant='h6' sx={{ flexGrow: 1 }}>
        Bienvenido
      </Typography>
      <button onClick={handleOpenLogin} color='inherit' className='btn-home'>
        Iniciar sesión
      </button>
      <button onClick={handleOpenRegister} color='inherit' className='btn-home'>
        Registrarse
      </button>
    </header>
  )
}

NavBarHome.propTypes = {}

export default NavBarHome
