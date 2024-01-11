import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "../../../public/styles/header.css";

const NavBarHome = ({ handleOpenLogin, handleOpenRegister }) => {
  const navigate = useNavigate();
  return (
    <Toolbar className="nav">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        {/* <MenuIcon /> */}
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Bienvenido
      </Typography>
      <Button onClick={handleOpenLogin} color="inherit">
        Login
      </Button>
      <Button onClick={handleOpenRegister} color="inherit">
        Register
      </Button>
    </Toolbar>
  );
};

NavBarHome.propTypes = {}

export default NavBarHome;
