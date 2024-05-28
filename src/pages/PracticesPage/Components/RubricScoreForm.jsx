import React, { useState } from 'react'
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from '@mui/material'

const RubricScoreForm = ({ rubricData }) => {
  const criteria = JSON.parse(rubricData)
  const [grades, setGrades] = useState(criteria.map(criterion => ({ ...criterion, grade: '' })))

  const handleGradeChange = (index, value) => {
    const newGrades = grades.map((criterion, i) => i === index ? { ...criterion, grade: value } : criterion)
    setGrades(newGrades)
  }

  const handleSubmit = () => {
    console.log(JSON.stringify(grades, null, 2))
  }

  return (
    <Container>
      <Typography variant='h5' gutterBottom>
        Vista del Profesor - Asignar Calificaciones
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Criterio</TableCell>
            <TableCell>Porcentaje</TableCell>
            <TableCell>Niveles</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Calificación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grades.map((criterion, index) => (
            <TableRow key={index}>
              <TableCell>{criterion.name}</TableCell>
              <TableCell>{criterion.percentage}</TableCell>
              <TableCell>{criterion.levels}</TableCell>
              <TableCell>
                {criterion.scores.map((score, levelIndex) => (
                  <div key={levelIndex}>
                    <strong>Nivel {levelIndex + 1}:</strong> {score.value} - {score.description}
                  </div>
                ))}
              </TableCell>
              <TableCell>
                <TextField
                  type='number'
                  value={criterion.grade}
                  onChange={(e) => handleGradeChange(index, e.target.value)}
                  fullWidth
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant='contained' color='primary' onClick={handleSubmit} style={{ marginTop: 16 }}>
        Guardar Calificaciones
      </Button>
    </Container>
  )
}

export default RubricScoreForm
