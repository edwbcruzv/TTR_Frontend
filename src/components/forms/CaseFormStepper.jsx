import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormStepCase from './FormStepCase';

const steps = [
  {
    label: 'Resumen',
    description: `Este caso de estudio se centra en la implementación de la inteligencia artificial (IA) en una estrategia publicitaria. Explora cómo las empresas utilizan algoritmos avanzados y análisis de datos para optimizar sus campañas publicitarias y mejorar la interacción con los usuarios.`,
  },
  {
    label: 'Objetivos',
    description:
      'Los objetivos principales de esta campaña publicitaria impulsada por IA incluyen mejorar la segmentación de audiencia, aumentar la tasa de conversión y optimizar el retorno de la inversión (ROI). Los estudiantes analizarán cómo la IA puede personalizar anuncios para diferentes grupos demográficos.',
  },
  {
    label: 'Clasificación',
    description: `En esta sección, los alumnos se sumergirán en la experimentación con diversos enfoques de texto publicitario. Evaluarán cómo la IA puede aprender de respuestas pasadas y ajustar el contenido del anuncio para maximizar la efectividad. También explorarán el uso de extensiones de anuncios para enriquecer la información proporcionada.`,
  },
  {
    label: 'Lugar',
    description: `La aplicación estratégica de la IA en la selección de ubicaciones es esencial para maximizar el impacto publicitario. Los estudiantes investigarán cómo los algoritmos pueden analizar datos geográficos y demográficos para determinar las ubicaciones ideales para la exhibición de anuncios, mejorando así la relevancia.`,
  },
  {
    label: 'Temporalidad',
    description: `La temporalidad desempeña un papel crucial en el éxito de una campaña publicitaria. Los alumnos explorarán cómo la IA puede analizar patrones temporales y ajustar la entrega de anuncios para aprovechar momentos específicos, como eventos estacionales o tendencias del mercado.`,
  },
  {
    label: 'Protagonistas',
    description: `Esta sección destaca a los actores clave en la implementación de la IA en publicidad. Desde analistas de datos que desarrollan modelos predictivos hasta especialistas en IA que optimizan algoritmos, los estudiantes comprenderán cómo diferentes roles contribuyen al éxito de la estrategia.`,
  },
  {
    label: 'Organización',
    description: `La organización de un equipo efectivo es esencial para la implementación exitosa de la IA en publicidad. Los alumnos explorarán la asignación de roles, la colaboración interdepartamental y la gestión de proyectos en este contexto.`,
  },
  {
    label: 'Preguntas',
    description: `Fomenta el pensamiento crítico al plantear preguntas desafiantes. ¿Cómo interpreta la IA los datos? ¿Qué desafíos éticos podrían surgir en la publicidad basada en IA? Los estudiantes reflexionarán sobre estas preguntas para comprender mejor las implicaciones y limitaciones de la tecnología.`,
  },
  {
    label: 'Riesgos',
    description: `La implementación de la IA conlleva riesgos potenciales. Los alumnos explorarán cuestiones de privacidad de datos, posibles sesgos algorítmicos y la necesidad de medidas éticas en la publicidad impulsada por IA.`,
  },
  {
    label: 'Resultados',
    description: `En esta sección, los estudiantes analizarán los resultados obtenidos a través de la implementación de la IA. Examinarán métricas como el aumento en la tasa de clics, el ROI mejorado y la percepción del cliente para evaluar el impacto general de la estrategia publicitaria.`,
  },
  {
    label: 'Anexos',
    description: `Proporciona materiales adicionales para enriquecer el caso de estudio. Esto puede incluir informes detallados de análisis, gráficos comparativos de rendimiento y cualquier documento adicional relevante para profundizar en la comprensión del tema.`,
  },
];



export default function CaseFormStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
              <FormStepCase/>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
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