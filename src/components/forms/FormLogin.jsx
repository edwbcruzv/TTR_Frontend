import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useForm from "../../hooks/useForm";
import Grid from "@mui/material/Grid";
import Loader from "../Loaders/Loader";
import Message from "../Messages/Message";
import Typography from "@mui/material/Typography";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./css/formregister.css";
import "./css/formRegister";



const style_errors = {
  fontWeight: "bold",
  color: "#dc3545",
};

const initialForm = {
  username: "",
  password: "",
};

function validationForm(form) {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.username.trim()) {
    errors.username = "El campo Email es requerido.";
  } else if (!regexName.test(form.username.trim())) {
    errors.username = "Inserte un Email valido.";
  }

  if (!form.password.trim()) {
    errors.password = "Ingrese su contraseña";
  }
  return errors;
}

const FormLogin = ({ uri, title }) => {
  const {
    resBody,
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm, uri, 0);

  const { jwt, login, isAuth, isAdmin, isTeacher, isStudent } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(resBody)

    if (response) {
      login(resBody.jwt);
    }
    // console.log(isAuth,isAdmin,isTeacher,isStudent)
    if (isAuth) {
      // Si se recibe el token adecurdo se permite el acceso y se redireccion
      console.log(jwt);
      if (isAdmin) {
        navigate("/admin");
      } else if (isTeacher) {
        navigate("/teacher");
      } else if (isStudent) {
        navigate("/student");
      }
      console.log("Cambiando a Dashboard.");
    }
  }, [response, login]);

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <Typography variant="h2" color="initial">
        {title}
      </Typography>
      <form onSubmit={handleSubmit} className="form-register">
        <div className="input-box">
          <input
            type="text"
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.username}
            required
            className="input-data"
          />
          <label>Usuario/Email</label>
          {/* {errors.username && <p style={style_errors}>{errors.username}</p>} */}
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.password}
            required
            className="input-data"
          />
          <label>Contraseña</label>
          {/* {errors.password && <p style={style_errors}>{errors.password}</p>} */}
        </div>
        <input type="submit" value="Enviar" className="btn-register" />
      </form>
      {loading && <Loader />}
      {loading && !isAuth && (
        <Message msg="Los datos son incorrectos" bgColor="#198754" />
      )}
    </Grid>
  );
};

FormLogin.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormLogin;
