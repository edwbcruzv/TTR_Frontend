import React, { useState } from 'react'
import { TextField, Button, Grid, Paper, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const RubricForm = () => {
  const [criteria, setCriteria] = useState([])
  const [currentCriterion, setCurrentCriterion] = useState('')
  const [currentDescription, setCurrentDescription] = useState('')
  const [currentMinScore, setCurrentMinScore] = useState('')
  const [currentMaxScore, setCurrentMaxScore] = useState('')

  const addCriterion = () => {
    setCriteria([...criteria, {
      id: Date.now(), // Unique ID for each criterion
      criterion: currentCriterion,
      description: currentDescription,
      minScore: currentMinScore,
      maxScore: currentMaxScore
    }])
    setCurrentCriterion('')
    setCurrentDescription('')
    setCurrentMinScore('')
    setCurrentMaxScore('')
  }

  const removeCriterion = (id) => {
    setCriteria(criteria.filter(criterion => criterion.id !== id))
  }

  const generateJson = () => {
    const rubricJson = {
      rubric: criteria.map(({ id, ...rest }) => rest) // Remove ID for the JSON output
    }
    console.log(JSON.stringify(rubricJson, null, 2))
  }

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant='h6' component='h2' gutterBottom>
        Añadir Criterios
      </Typography>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={3}>
          <TextField
            label='Criterio'
            fullWidth
            value={currentCriterion}
            onChange={(e) => setCurrentCriterion(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label='Descripción'
            fullWidth
            value={currentDescription}
            onChange={(e) => setCurrentDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label='Puntuación Mínima'
            fullWidth
            value={currentMinScore}
            onChange={(e) => setCurrentMinScore(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label='Puntuación Máxima'
            fullWidth
            value={currentMaxScore}
            onChange={(e) => setCurrentMaxScore(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant='contained' color='primary' onClick={addCriterion}>
            Añadir
          </Button>
        </Grid>
      </Grid>
      <div style={{ marginTop: 16 }}>
        {criteria.map((item, index) => (
          <Paper key={item.id} style={{ padding: 8, marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='body1'>
              <strong>{item.criterion}:</strong> {item.description} (Puntuación: {item.minScore} - {item.maxScore})
            </Typography>
            <IconButton edge='end' color='secondary' onClick={() => removeCriterion(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
      </div>
      <Button variant='contained' color='secondary' onClick={generateJson} style={{ marginTop: 16 }}>
        Generar JSON
      </Button>
    </Paper>
  )
}

export default RubricForm
