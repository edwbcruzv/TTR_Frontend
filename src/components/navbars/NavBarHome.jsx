import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';



const NavBarHome = props => {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bienvenido
          </Typography>
          <Button onClick={props.handleOpen} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

NavBarHome.propTypes = {}

export default NavBarHome