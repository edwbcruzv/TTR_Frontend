import { AppBar, Typography, styled } from '@mui/material'
import Toolbar from '@mui/material/Toolbar/Toolbar'
// import Logo from '../assets/logo.png'
const Contain = styled(AppBar)`
      background: #060606;
      height:9vh;      
`

function Header () {
  return (

    <Contain position='static'>
      <Toolbar>
        {/* <img src={Logo} alt='code-logo' style={{ width: '90px' }} /> */}
        <Typography variant='h6' color='inherit'>
          Escribe aquí tu respuesta, más abajo se mostrará el resultado final
        </Typography>
      </Toolbar>
    </Contain>

  )
}

export default Header
