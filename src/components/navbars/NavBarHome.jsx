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
    <header className="nav">
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Bienvenido
      </Typography>
      <button onClick={handleOpenLogin} color="inherit" className="btn-home">
        Login
      </button>
      <button onClick={handleOpenRegister} color="inherit" className="btn-home">
        Register
      </button>
    </header>
  );
};

NavBarHome.propTypes = {};

export default NavBarHome;
