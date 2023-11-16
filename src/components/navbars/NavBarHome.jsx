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
import "../../../public/styles/navbarhome.css";

const NavBarHome = (props) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <Typography
        className="texto"
      >
        CaseBuilder
      </Typography>
      <Button onClick={props.handleOpen} className="btn-login">
        Login
      </Button>
    </header>
  );
};

NavBarHome.propTypes = {};

export default NavBarHome;
