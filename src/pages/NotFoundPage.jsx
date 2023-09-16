import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Typography } from '@mui/material'


const NotFoundPage = props => {
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', paddingTop: '100px' }}>
      <Typography variant="h3" gutterBottom>
        Error 404
      </Typography>
      <Typography variant="body1" paragraph>
        La página que estás buscando no se encuentra.
      </Typography>
      <Button
        
        variant="contained"
        color="primary"
      >
        Volver a la página de inicio
      </Button>
    </Container>
  )
}

NotFoundPage.propTypes = {}

export default NotFoundPage