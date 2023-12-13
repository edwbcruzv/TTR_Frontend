import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import FormCaseStep from './FormCaseStep';
import CrudCaseContext from '../../../context/CrudCaseContext';
import { useContext } from 'react';
import { Stack, Switch } from '@mui/material';
import FormCaseStepView from './FormCaseStepView';

const steps = [
  {
    name: 'inicio',
    label: 'Datos del caso',
    description: `descripcion`,

  },
  {
    name: 'resumen',
    label: 'Resumen',
    description: `descripcion`,

  },
  {
    name: 'objetivos',
    label: 'Objetivos',
    description: `descripcion`,
  },
  {
    name: 'clasificacion',
    label: 'Clasificación',
    description: `descripcion`,
  },
  {
    name: 'lugar',
    label: 'Lugar',
    description: `descripcion`,
  },
  {
    name: 'temporalidades',
    label: 'Temporalidades',
    description: `descripcion`,
  },
  {
    name: 'protagonistas',
    label: 'Protagonistas',
    description: `descripcion`,
  },
  {
    name: 'organizaciones',
    label: 'Organizaciones',
    description: `descripcion`,
  },
  {
    name: 'preguntas',
    label: 'Preguntas',
    description: `descripcion`,
  },
  {
    name: 'riesgos',
    label: 'Riesgos',
    description: `descripcion`,
  },
  {
    name: 'resultados',
    label: 'Resultados',
    description: `descripcion`,
  },
  {
    name: 'anexos',
    label: 'Anexos',
    description: `descripcion`,
  },
  {
    name: 'final',
    label: 'Datos finales',
    description: `descripcion`,

  }
];



export default function CaseStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    console.log(event.target.checked)
    setChecked(event.target.checked);
  };

  const {response,error,loading,
    viewDataEdit,createData,
    updateData,deleteData,
    register,handleSubmit,watch,errors,
    openModalForm,handleOpenModalForm,handleCloseModalForm,
      openModalView,handleOpenModalView,handleCloseModalView} = useContext(CrudCaseContext)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    handleCloseModalForm()
  };

  function onSubmit(data){
    console.log(data)
    // console.log(errors)
    // id de un formulario es nulo: se crea un nuevo dato
    if(data.id===null){
      createData(data)
      console.log("se creo un dato")
    }else{
      // si no es nulo se editara un formulario ya existente 
      updateData(data)
      console.log("Actualizando")
    }
}


  return (


    <Box sx={{ maxWidth: "auto", padding:"30px" }}>
      <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body1" color="initial">Vista Previa</Typography>
      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      />
      <Typography variant="body1" color="initial">Editar</Typography>
      </Stack>



      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {checked?
              <FormCaseStep label={step.label} name ={step.name}/>
            :
            <FormCaseStepView label={step.label} name ={step.name}/>}
                
              

              {/* <Typography>{step.description}</Typography> */}
              <Box 
              sx={{ mb: 2 }}
              >
                
                <div>
                  {index === steps.length - 1 ? 

                  checked&&<Button
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Guardar
                </Button>
                  : 
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
                  </Button>
                  }
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Atras
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Se ha creado correctamente el caso</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Cerrar
          </Button>
        </Paper>
      )}
    </Box>
  );
}