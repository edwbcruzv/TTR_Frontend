import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import useForm from "../../hooks/useForm";
import Loader from "../Loaders/Loader";
import Message from "../Messages/Message";
import Typography from '@mui/material/Typography'




const style_inputs = {
    border: "thin solid #dedede",
    borderRadius: "0.25rem",
    padding: "0.75rem",
    marginBottom: "1rem",
    outline: "none",
    display: "block",
    width: "100 %",
    fontSize: "1rem",
    lineHeight: 1,
    backgroundColor: "transparent",
    resize: "none",
  };
  
  const style_form = {
    marginBottom: "1rem",
  };
  
  const style_button = {
    border: "thin solid #444",
    borderRadius: "0.25rem",
    padding: "0.5rem 1rem",
    margin: "0 0.5rem 0 0",
    display: "inline - block",
    backgroundColor: " #eee",
    color: "#444",
    fontWeight: "bold",
    fontSize: "1rem",
    lineHeight: 1,
    textTransform: "none",
    textDecoration: "none",
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
  };
  
  const style_errors = {
    fontWeight: "bold",
    color: "#dc3545",
  };
  
  const initialForm = {
    
      "username": "",
      "email": "",
      "password": "",
      "firstName": "",
      "lastName": "",
      "middleName": ""
    
  };
  
  function validationForm(form) {
    let errors = {};
  
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    
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


const FormRegister = ({uri, title}) => {
  console.log(uri)
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm,uri,0);
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
      <Typography variant="h2" color="initial">{title}</Typography>


      <form onSubmit={handleSubmit} style={style_form}>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.username}
          required
          style={style_inputs}
        />
        {errors.username && <p style={style_errors}>{errors.username}</p>}

        <input
          type="text"
          name="email"
          placeholder="Correo"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
          style={style_inputs}
        />
        {errors.email && <p style={style_errors}>{errors.email}</p>}

        <input
          type="text"
          name="firstName"
          placeholder="Nombres"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.firstName}
          required
          style={style_inputs}
        />
        {errors.firstName && <p style={style_errors}>{errors.firstName}</p>}
        
        <input
          type="text"
          name="middleName"
          placeholder="Apellido Paterno"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.middleName}
          required
          style={style_inputs}
        />
        {errors.middleName && <p style={style_errors}>{errors.middleName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Apellido Materno"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.lastName}
          required
          style={style_inputs}
        />
        {errors.lastName && <p style={style_errors}>{errors.lastName}</p>}


        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.password}
          required
          style={style_inputs}
        />
        {errors.password && <p style={style_errors}>{errors.password}</p>}

        <input type="submit" value="Enviar" style={style_button} />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos fueron enviados" bgColor="#198754" />
      )}
    </Grid>
  );
};

FormRegister.propTypes = {
    uri:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default FormRegister