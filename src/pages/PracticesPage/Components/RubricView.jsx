import React from 'react'
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const RubricView = ({ rubricData }) => {
  const criteria = JSON.parse(rubricData)

  return (
    <Container>
      <Typography variant='h5' gutterBottom>
        Vista del Alumno - Rúbrica
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Criterio</TableCell>
            <TableCell>Porcentaje</TableCell>
            <TableCell>Niveles</TableCell>
            <TableCell>Descripción</TableCell>
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
                    <strong>Nivel {levelIndex + 1}:</strong> {score.value} - {score.description}
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default RubricView
