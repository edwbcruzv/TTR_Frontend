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
import { Grid, Stack, Switch } from '@mui/material';
import FormCaseStepView from './FormCaseStepView';
import { useEffect } from 'react';
import HelpTooltip from '../../Tooltips/HelpTooltip';

const steps = [
  {
    name: 'inicio',
    label: 'Datos del caso',
    description: `descripcion`,
    minCaracteres:200,
    maxCaracteres:1000,
    helpText:"A cada caso es necesario definir un titulo y una breve descripcion.",
  },
  {
    name: 'resumen',
    label: 'Resumen',
    description: `descripcion`,
    minCaracteres:2000,
    maxCaracteres:10000,
    helpText:"El primer apartado para poder llenar es el resumen. Para construir el resumen, deberá iniciarse el proceso de construcción del caso, recordando los hechos en orden cronológico, desarrollando un listado de hechos.",
  },
  {
    name: 'objetivos',
    label: 'Objetivos',
    description: `descripcion`,
    minCaracteres:2000,
    maxCaracteres:10000,
    helpText:"El objetivo del caso es la finalidad que se persigue como trabajo de investigación, el cual debe establecerse con claridad y precisión además que es esencial elegir cuidadosamente el verbo que describe.",
  },
  {
    name: 'clasificacion',
    label: 'Clasificación',
    description: `descripcion`,
    minCaracteres:2000,
    maxCaracteres:10000,
    helpText:"Existen varios criterios en el cual podemos clasificar un caso: Por su extensión, Por su carácter, Casos integrales, Casos reflexivos, Casos creativos y Temporalidad",
  },
  {
    name: 'lugar',
    label: 'Lugar',
    description: `descripcion`,
    minCaracteres:200,
    maxCaracteres:1000,
    helpText:"Es importante enfocar el caso a un país o una región donde se genera el caso, ya que esto permite ubicarlo en un contexto cultural.",
  },
  {
    name: 'temporalidades',
    label: 'Temporalidades',
    description: `descripcion`,
    minCaracteres:2000,
    maxCaracteres:10000,
    helpText:"En la temporalidad no habla que todo caso desprende de una situación real, que evidentemente implico un tiempo para su gestación y desarrollo.",
  },
  {
    name: 'protagonistas',
    label: 'Protagonistas',
    description: `descripcion`,
    minCaracteres:200,
    maxCaracteres:1000,
    helpText:"Los protagonistas del caso se deben identificar claramente los nombre y posiciones jerárquicas de quienes intervienen en el caso. El conocer el puesto que desarrolla cada quien en la organización en que se da la experiencia, contribuye a una mayor comprensión de la situación.",
  },
  {
    name: 'organizaciones',
    label: 'Organizaciones',
    description: `descripcion`,
    minCaracteres:2000,
    maxCaracteres:10000,
    helpText:"El apartado de la organización implica identificar los aspectos positivos y negativos de la propia organización, en relación con la situación que presenta el caso.",
  },
  {
    name: 'preguntas',
    label: 'Preguntas',
    description: `descripcion`,
    minCaracteres:2000,
    maxCaracteres:10000,
    helpText:"En la sección de preguntas consiste en poner por escrito las preguntas que se formulan para ser contestadas en el análisis del caso. ",
  },
  {
    name: 'riesgos',
    label: 'Riesgos',
    description: `descripcion`,
    minCaracteres:200,
    maxCaracteres:2000,
    helpText:"Los riesgos del caso implican identificar los aspectos positivos y negativos del entorno, en relación con la situación que presenta el caso.",
  },
  {
    name: 'resultados',
    label: 'Resultados',
    description: `descripcion`,
    minCaracteres:200,
    maxCaracteres:4000,
    helpText:"Se deberá indicar sobre que resultados espera el profesor al aplicar el caso ya sea resultados individuales o en equipo.",
  },
  {
    name: 'final',
    label: 'Datos finales',
    description: `descripcion`,
    minCaracteres:20,
    maxCaracteres:100,
    helpText:"Se Pueden agregar algun anexo y comentarios finales antes de crear el caso",
  }
];



export default function CaseStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const [stepComplete, setStepComplete] = React.useState(true);
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
            <StepLabel>
            <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center" 
      >
      
              {step.label}
              <HelpTooltip text={step.helpText} />
              </Grid>

            </StepLabel>
            <StepContent>
              {checked?
              <FormCaseStep label={step.label} stepComplete={stepComplete} minCaracteres={step.minCaracteres} maxCaracteres={step.maxCaracteres} name ={step.name} setStepComplete={setStepComplete} />
            :
            <FormCaseStepView label={step.label} name ={step.name}/>}
                
              

              {/* <Typography>{step.description}</Typography> */}
              <Box 
              sx={{ mb: 2 }}
              >
                
                <div>
                  {index === steps.length - 1 ? 

                  stepComplete&&checked&&<Button
                  variant="contained"
                  onClick={handleSubmit(onSubmit)}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Guardar
                </Button>
                  :
                  stepComplete&& 
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continuar
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