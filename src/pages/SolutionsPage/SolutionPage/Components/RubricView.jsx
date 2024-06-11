import React from 'react'
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'

const RubricView = ({ rubrica }) => {
  const criteria = JSON.parse(rubrica) || []

  const calculateFinalScore = () => {
    let totalScore = 0
    let totalPercentage = 0

    criteria.forEach(criterion => {
      const selectedLevel = criterion.selectedLevel
      if (selectedLevel >= 0) {
        const maxPercentage = parseFloat(criterion.percentage)
        const levelPercentage = (maxPercentage / criterion.scores.length) * (selectedLevel + 1)
        totalPercentage += levelPercentage
        totalScore += criterion.scores[selectedLevel].value * (levelPercentage / 100)
      }
    })
    return totalPercentage
  }

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Evaluar Rúbrica
      </Typography>
      <Box mt={4}>
        <Typography variant='h5'>Rúbrica</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Criterio</TableCell>
              <TableCell>Porcentaje Fijo</TableCell>
              <TableCell>Porcentaje por Nivel</TableCell>
              <TableCell>Niveles</TableCell>
              <TableCell>Seleccionado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {criteria.map((criterion, index) => (
              <TableRow key={index}>
                <TableCell>{criterion.name}</TableCell>
                <TableCell>{criterion.percentage}%</TableCell>
                <TableCell>
                  {criterion.selectedLevel >= 0
                    ? ((criterion.selectedLevel + 1) / criterion.scores.length * criterion.percentage).toFixed(2) +
                      '%'
                    : '0%'}
                </TableCell>
                <TableCell>
                  {criterion.scores.map((score, levelIndex) => (
                    <div key={levelIndex}>
                      <strong>Nivel {levelIndex + 1}:</strong> {score.description}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  {criterion.selectedLevel >= 0 ? `Nivel ${criterion.selectedLevel + 1}` : 'No seleccionado'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Box mt={2}>
        <Typography variant='body1'>Porcentaje Final: {calculateFinalScore().toFixed(2)}%</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant='body1'>Porcentaje Final: {(calculateFinalScore().toFixed(2) / 10).toFixed(2)}%</Typography>
        <Typography variant='body1'>
          Calificación Final: {calculateFinalScore().toFixed(2) >= 60 ? 'Aprobado' : 'Reprobado'}
        </Typography>
      </Box>
    </Container>
  )
}

export default RubricView
