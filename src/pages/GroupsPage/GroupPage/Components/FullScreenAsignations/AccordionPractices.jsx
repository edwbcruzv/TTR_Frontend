import { useContext, useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Grid } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SessionContext from '../../../../../context/SessionContext'

export default function AccordionPractices ({ grupoId }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const [expanded, setExpanded] = useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  useEffect(() => {

  }, [])

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Practica titulo
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>descripcion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
          >
            <Grid item>

              <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DateTimePicker />

              </LocalizationProvider>
            </Grid>
            Boton de rubrica-
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Practica titulo
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>descripcion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            funcionalidades
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Practica titulo
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>descripcion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            funcionalidades
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Practica titulo
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>descripcion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            funcionalidades
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
