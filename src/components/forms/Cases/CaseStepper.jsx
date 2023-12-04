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

const steps = [
  {
    label: 'Resumen',
    description: `descripcion`,
  },
  {
    label: 'Objetivos',
    description: `descripcion`,
  },
  {
    label: 'Clasificación',
    description: `descripcion`,
  },
  {
    label: 'Lugar',
    description: `descripcion`,
  },
  {
    label: 'Temporalidad',
    description: `descripcion`,
  },
  {
    label: 'Protagonistas',
    description: `descripcion`,
  },
  {
    label: 'Organización',
    description: `descripcion`,
  },
  {
    label: 'Preguntas',
    description: `descripcion`,
  },
  {
    label: 'Riesgos',
    description: `descripcion`,
  },
  {
    label: 'Resultados',
    description: `descripcion`,
  },
  {
    label: 'Anexos',
    description: `descripcion`,
  },
];



export default function CaseStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const {error,loading,viewDataEdit,createData,dataToEdit,setDataToEdit,updateData,deleteData} = useContext(CrudCaseContext)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  function handlerSubmit() {
    // e.preventDefault() // para que no se autoprocese el frmulario
        // if(!form.name||!form.username){
        //   alert("Datos incompletos")
        //   return
        // }

        // id de un formulario es nulo: se crea un nuevo dato
        if(dataToEdit.Id===null){
          console.log("se creo un dato")
          createData(form)
        }else{
          // si no es nulo se editara un formulario ya existente 
          console.log("se esta actualizando")
          updateData(form)
        }

        // se limpia el formulario
        handleReset()
    
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
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
              <Container maxWidth="sm">
              <FormCaseStep label={step.label} value={dataToEdit} setValue={setDataToEdit} />
                
              </Container>

              {/* <Typography>{step.description}</Typography> */}
              <Box 
              sx={{ mb: 2 }}
              >
                
                <div>
                  {index === steps.length - 1 ? 
                  <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Finish
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
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}