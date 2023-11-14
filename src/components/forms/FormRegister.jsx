import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import useForm from "../../hooks/useForm";
import Loader from "../Loaders/Loader";
import Message from "../Messages/Message";
import Typography from "@mui/material/Typography";
import "./css/formregister.css"
import "./css/formRegister"


const style_errors = {
  color: "#dc3545"
};

const initialForm = {
  username: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  middleName: "",
};

function validationForm(form) {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.username.trim()) {
    errors.username = "El campo username es requerido.";
  } else if (!regexName.test(form.username.trim())) {
    errors.username = "Inserte un username valido.";
  }

  if (!form.firstName.trim()) {
    errors.firstName = "El campo nombre es requerido.";
  } else if (!regexName.test(form.firstName.trim())) {
    errors.firstName = "Inserte un nombre valido.";
  }

  if (!form.middleName.trim()) {
    errors.middleName = "El campo apellido paterno es requerido.";
  } else if (!regexName.test(form.middleName.trim())) {
    errors.middleName = "Inserte un apellido paterno valido.";
  }

  if (!form.lastName.trim()) {
    errors.lastName = "El campo apellido materno es requerido.";
  } else if (!regexName.test(form.lastName.trim())) {
    errors.lastName = "Inserte un apellido materno valido.";
  }

  if (!form.email.trim()) {
    errors.email = "El campo Email es requerido.";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Inserte un Email valido.";
  }

  if (!form.password.trim()) {
    errors.password = "Ingrese su contraseña";
  }
  return errors;
}

const FormRegister = ({ uri, title }) => {
  console.log(uri);
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm, uri, 0);
  return (
    <Grid className="grid-container">
      <form onSubmit={handleSubmit} className="form-register">
        <h2>Nueva cuenta</h2>
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
          <label>Usuario</label>
          {/* {errors.username && <p style={style_errors}>{errors.username}</p>} */}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
            className="input-data"
          />
          <label className="label">Correo</label>
          {/* {errors.email && <p style={style_errors}>{errors.email}</p>} */}
        </div>

        <div className="input-box">
          <input
            type="text"
            name="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.firstName}
            required
            className="input-data"
          />
          <label className="label">Nombre</label>
          {/* {errors.firstName && <p style={style_errors}>{errors.firstName}</p>} */}
        </div>
        <div className="input-box">
          <input
            type="text"
            name="middleName"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.lastName}
            required
            className="input-data"
          />
          <label>Apellido</label>
          {/* {errors.middleName && <p style={style_errors}>{errors.middleName}</p>} */}
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
          <label className="label">Crea contraseña</label>
          {/* {errors.password && <p style={style_errors}>{errors.password}</p>} */}
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.confirmpassword}
            required
            className="input-data"
          />
          <label className="label">Confirma contraseña</label>
          {/* {errors.password && <p style={style_errors}>{errors.password}</p>} */}
        </div>
        <input type="submit" value="Enviar" className="btn-register"/>
        <p>Already have an account ?
          <a href="#"> Login</a>
        </p>
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos fueron enviados" bgColor="#198754" />
      )}
    </Grid>
  );
};



FormRegister.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FormRegister;
