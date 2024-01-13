import React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import NavBarHome from "../components/navbars/NavBarHome";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { URI_BACKEND } from "../utils/urls";
import FormLogin from "../components/forms/Auth/FormLogin";
import FormUser from "../components/forms/Users/FormUser";
import { CrudUserProvider } from "../context/CrudUserContext";
import FormRegister from "../components/forms/Auth/FormRegister";
import Fondoinicio from "../components/componentsLuis/Fondoinicio";
import MetodoCasos from "../components/componentsLuis/MetodoCasos";
import Caso from "../components/componentsLuis/Caso";
import VistaPreviaCaso from "../components/componentsLuis/VistaPreviaCaso";
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
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openRegister, setOpenRegister] = React.useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  return (
    <>
      <NavBarHome
        handleOpenLogin={handleOpenLogin}
        handleOpenRegister={handleOpenRegister}
      />

      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Modal
          open={openLogin}
          onClose={handleCloseLogin}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <FormLogin uri={URI_BACKEND("auth/login")} title="Login" />
          </Box>
        </Modal>

        <Modal
          open={openRegister}
          onClose={handleCloseRegister}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CrudUserProvider>
              <FormRegister />
            </CrudUserProvider>
          </Box>
        </Modal>
        <Fondoinicio />
        <MetodoCasos />
        <Caso />
      </Grid>

      <VistaPreviaCaso />
      <Footer />
    </>
  );
};

export default WelcomePage;
