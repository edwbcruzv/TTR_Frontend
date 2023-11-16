import React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import AppFrame from "../components/frames/AppFrame";
import NavBarHome from "../components/navbars/NavBarHome";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormLogin from "../components/forms/FormLogin";
import { URI_BACKEND } from "../utils/urls";
import FormRegister from "../components/forms/FormRegister";
import Parallax from "../components/componentsLuis/Parallax";
import Section from "../components/componentsLuis/Section";
import Sectionizq from "../components/componentsLuis/Sectionizq"
import Footer from "../components/componentsLuis/Footer";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1c2630",
  border: "2px solid #000",

  p: 4,
};

const WelcomePage = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppFrame>
      <NavBarHome handleOpen={handleOpen} />

      <Container maxWidth="md">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormRegister uri={URI_BACKEND("auth/login")} title="" />
          </Box>
        </Modal>
      </Container>
      <Parallax />
      <Section
        titulo = "Hola"
        lado = "izq"
      />
      <Sectionizq />
      <Section />
      <Footer />
    </AppFrame>
  );
};

export default WelcomePage;
