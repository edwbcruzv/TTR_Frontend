import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  FormControlLabel
} from '@mui/material'
import { Add, Delete } from '@mui/icons-material'

const RubricForm = ({ nameRubrica, setValue, rubrica }) => {
  const [criteria, setCriteria] = useState(JSON.parse(rubrica) || [
    { name: '', percentage: '', levels: 2, scores: [{ description: '' }, { description: '' }], selectedLevel: -1 }
  ])
  const [submitted, setSubmitted] = useState(false)

  const handleAddCriterion = () => {
    setCriteria([
      ...criteria,
      { name: '', percentage: '', levels: 2, scores: [{ description: '' }, { description: '' }], selectedLevel: -1 }
    ])
  }

  const handleRemoveCriterion = (index) => {
    const newCriteria = criteria.filter((_, i) => i !== index)
    setCriteria(newCriteria)
  }

  const handleCriterionChange = (index, field, value) => {
    const newCriteria = criteria.map((criterion, i) =>
      i === index ? { ...criterion, [field]: value } : criterion
    )
    setCriteria(newCriteria)
  }

  const handleScoreChange = (index, levelIndex, value) => {
    const newCriteria = criteria.map((criterion, i) =>
      i === index
        ? {
            ...criterion,
            scores: criterion.scores.map((score, j) =>
              j === levelIndex ? { ...score, description: value } : score
            )
          }
        : criterion
    )
    setCriteria(newCriteria)
  }

  const handleLevelsChange = (index, value) => {
    const newCriteria = criteria.map((criterion, i) =>
      i === index
        ? {
            ...criterion,
            levels: value,
            scores: Array(value).fill({ description: '' }),
            selectedLevel: -1
          }
        : criterion
    )
    setCriteria(newCriteria)
  }

  const handleLevelSelect = (criterionIndex, levelIndex) => {
    const newCriteria = criteria.map((criterion, i) =>
      i === criterionIndex ? { ...criterion, selectedLevel: levelIndex } : criterion
    )
    setCriteria(newCriteria)
  }

  const handleSubmit = () => {
    const totalPercentage = criteria.reduce(
      (acc, criterion) => acc + parseFloat(criterion.percentage || 0),
      0
    )
    if (totalPercentage > 100) {
      alert('La suma de los porcentajes no puede exceder el 100%')
      return
    }
    if (totalPercentage < 100) {
      alert(`La suma de los porcentajes es menor al 100%. Faltan ${100 - totalPercentage}%`)
      return
    }
    setSubmitted(true)
    console.log(JSON.stringify(criteria, null, 2))
    setValue(nameRubrica, JSON.stringify(criteria))
  }

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Crear Rúbrica
      </Typography>
      {criteria.map((criterion, index) => (
        <Paper key={index} style={{ padding: 16, marginBottom: 16 }}>
          <Grid container spacing={2} alignItems='center'>
            <Grid item xs={3}>
              <TextField
                label='Criterio'
                value={criterion.name}
                onChange={(e) =>
                  handleCriterionChange(index, 'name', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label='Porcentaje'
                type='number'
                value={criterion.percentage}
                onChange={(e) =>
                  handleCriterionChange(index, 'percentage', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth>
                <InputLabel>Niveles</InputLabel>
                <Select
                  value={criterion.levels}
                  onChange={(e) =>
                    handleLevelsChange(index, parseInt(e.target.value, 10))}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={1}>
                {criterion.scores.map((score, levelIndex) => (
                  <Grid item xs={12} key={levelIndex}>
                    <TextField
                      label={`Descripción Nivel ${levelIndex + 1}`}
                      value={score.description}
                      onChange={(e) =>
                        handleScoreChange(index, levelIndex, e.target.value)}
                      fullWidth
                      multiline
                      rows={2}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                color='secondary'
                onClick={() => handleRemoveCriterion(index)}
              >
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Box textAlign='center'>
        <Button
          variant='contained'
          color='primary'
          startIcon={<Add />}
          onClick={handleAddCriterion}
        >
          Añadir Criterio
        </Button>
      </Box>
      <Box mt={4} textAlign='center'>
        <Button variant='contained' color='secondary' onClick={handleSubmit}>
          Guardar Rúbrica
        </Button>
      </Box>
      <Box mt={4} textAlign='center'>
        <Button variant='contained' color='warning' onClick={() => setCriteria([{ name: '', percentage: '', levels: 2, scores: [{ description: '' }, { description: '' }], selectedLevel: -1 }])}>
          Limpiar
        </Button>
      </Box>
      <Box mt={4}>
        <Typography variant='h5'>Rúbrica en Progreso</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Criterio</TableCell>
              <TableCell>Porcentaje</TableCell>
              <TableCell>Niveles</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Seleccionado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {criteria.map((criterion, index) => (
              <TableRow key={index}>
                <TableCell>{criterion.name}</TableCell>
                <TableCell>{criterion.percentage}</TableCell>
                <TableCell>{criterion.levels}</TableCell>
                <TableCell>
                  {criterion.scores.map((score, levelIndex) => (
                    <div key={levelIndex}>
                      <strong>Nivel {levelIndex + 1}:</strong> {score.description}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {criterion.scores.map((_, levelIndex) => (
                    <FormControlLabel
                      key={levelIndex}
                      control={
                        <Checkbox
                          checked={criterion.selectedLevel === levelIndex}
                          onChange={() => handleLevelSelect(index, levelIndex)}
                        />
                      }
                      label={`Nivel ${levelIndex + 1}`}
                    />
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Container>
  )
}

export default RubricForm
