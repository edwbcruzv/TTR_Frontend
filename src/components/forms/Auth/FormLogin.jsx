import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from "../../../utils/jwt_data";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import { helperAXIOS } from "../../../helpers/helperAXIOS";
import { useForm } from "react-hook-form";
import { URI_BACKEND } from "../../../utils/urls";
import { useState } from "react";
import "../../../../public/styles/forms.css";

const initialForm = {
  username: "",
  password: "",
};
const FormLogin = ({ uri, title }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: initialForm });
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { post } = helperAXIOS();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  let res = "";
  async function onSubmit(data) {
    setLoading(true);
    setError(false);
    console.log(data);

    // console.log(errors)
    res = await post(URI_BACKEND("auth/login"), data);

    if (res.status === 200) {
      console.log(res);

      setToken(res.data.jwt);
      localStorage.setItem("token", res.data.jwt);
      // Si se recibe el token adecurdo se permite el acceso y se redireccion
      console.log(res.data.jwt);

      const [header, payload, signature] = res.data.jwt.split(".");
      const payloadJson = JSON.parse(atob(payload));
      switch (payloadJson.rol) {
        case ROL_ADMIN:
          navigate("/admin");
          break;
        case ROL_TEACHER:
          navigate("/teacher");
          break;
        case ROL_STUDENT:
          navigate("/student");
          break;
        default:
          console.log("sin Rol");
          break;
      }
      console.log("Cambiando a Dashboard.");
    } else {
      setError(true);
      console.log(res.error);
    }

    setLoading(false);
  }

  return (
    <form
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="form-login"
    >
      <h2>Inicia sesión</h2>
      <div className="input-box">
        <input
          {...register("username", {
            required: { value: true, message: "Es requerido" },
          })}
          id="username"
          label="Username"
          type="text"
          error={errors.username}
          helperText={errors.username && errors.username.message}
          className="input-data"
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="input-box">
        <input
          {...register("password", {
            required: { value: true, message: "Es requerido" },
          })}
          id="password"
          label="Contraseña"
          type="password"
          error={errors.password}
          helperText={errors.password && errors.password.message}
          className="input-data"
          placeholder="Contraseña"
        />
      </div>
      <button
        variant="outlined"
        color="primary"
        type="submit"
        className="btn-login"
      >
        Acceder
      </button>
      {!loading || <CircularProgress color="#9d5ceb;" />}
        <button className="btn-recover">¿Haz olvidado tu contraseña?. Da clic aquí</button>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Mensaje: <strong>{res.error}</strong>
        </Alert>
      )}
    </form>
  );
};

FormLogin.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormLogin;
