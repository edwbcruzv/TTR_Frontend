import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import useForm from "../../hooks/useForm";
import Loader from "../Loaders/Loader";
import Message from "../Messages/Message";
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';




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
      "nombre": "",
      "apellido_materno": "",
      "apellido_paterno": ""
    
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

    if (!form.nombre.trim()) {
      errors.nombre = "El campo nombre es requerido.";
    } else if (!regexName.test(form.nombre.trim())) {
      errors.nombre = "Inserte un nombre valido.";
    }

    if (!form.apellido_paterno.trim()) {
      errors.apellido_paterno = "El campo apellido paterno es requerido.";
    } else if (!regexName.test(form.apellido_paterno.trim())) {
      errors.apellido_paterno = "Inserte un apellido paterno valido.";
    }

    if (!form.apellido_materno.trim()) {
      errors.apellido_materno = "El campo apellido materno es requerido.";
    } else if (!regexName.test(form.apellido_materno.trim())) {
      errors.apellido_materno = "Inserte un apellido materno valido.";
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


const FormRegister = () => {
  const [value, setValue] = useState(null);
  const [uri, setUri] = useState(null)

  const handleChangeRadioBtn = (event) => {
    setValue(event.target.value);

    switch (event.target.value) {
      case "Admin":
          setUri()
        break;
      case "Profesor":
          setUri()
        break;
      case "Estudiante":
          setUri()
        break;
      default:
        setUri(null)
        break;
    }
  };

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
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <Grid item>

      <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChangeRadioBtn }
      >
        <FormControlLabel value="Admin" control={<Radio />} label="Administrador" />
        <FormControlLabel value="Profesor" control={<Radio />} label="Profesor" />
        <FormControlLabel value="Estudiante" control={<Radio />} label="Estudiante" />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
    </Grid>

      <Typography variant="h2" color="initial">{value}</Typography>


      <form onSubmit={handleSubmit} style={style_form}>
      <Grid container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      alignContent="center"
      wrap="wrap">
        
      <Grid item xs={4}>
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

      </Grid>
      <Grid item xs={4}>
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
      </Grid>
      <Grid item xs={4}>

        <input
          type="text"
          name="nombre"
          placeholder="Nombres"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.nombre}
          required
          style={style_inputs}
          />
        {errors.nombre && <p style={style_errors}>{errors.nombre}</p>}
      </Grid>
      <Grid item xs={4}>
        <input
          type="text"
          name="apellido_paterno"
          placeholder="Apellido Paterno"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.apellido_paterno}
          required
          style={style_inputs}
          />
        {errors.apellido_paterno && <p style={style_errors}>{errors.apellido_paterno}</p>}
      </Grid> 

      <Grid item xs={4}>
        <input
          type="text"
          name="apellido_materno"
          placeholder="Apellido Materno"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.apellido_materno}
          required
          style={style_inputs}
        />
        {errors.apellido_materno && <p style={style_errors}>{errors.apellido_materno}</p>}
      </Grid>

      <Grid item xs={4}>
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
        </Grid>
      {value === "Profesor" &&
      <Grid item xs={4}>
        <input
          type="text"
          name="cedula"
          placeholder="Cedula"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.cedula}
          required
          style={style_inputs}
        />
        {errors.cedula && <p style={style_errors}>{errors.cedula}</p>}
      </Grid>
      }

      { value === "Profesor" &&
      <Grid item xs={4}>
        <input
          type="text"
          name="escuela"
          placeholder="Escuela"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.escuela}
          required
          style={style_inputs}
        />
        {errors.escuela && <p style={style_errors}>{errors.escuela}</p>}
      </Grid>
      }

    {value === "Estudiante" &&
      <Grid item xs={4}>
        <input
          type="text"
          name="boleta"
          placeholder="Boleta"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.boleta}
          required
          style={style_inputs}
          />
        {errors.boleta && <p style={style_errors}>{errors.boleta}</p>}
      </Grid>
      }
      {value === "Estudiante" &&
      <Grid item xs={4}>
        <input
          type="text"
          name="semestre"
          placeholder="Semestre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.semestre}
          required
          style={style_inputs}
        />
        {errors.semestre && <p style={style_errors}>{errors.semestre}</p>}
      </Grid>
      }
      </Grid>
      {value && <input type="submit" value="Enviar" style={style_button} />}
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos fueron enviados" bgColor="#198754" />
      )}
    </Grid>
  );
};

FormRegister.propTypes = {}

export default FormRegister