import React from 'react'
import { Button,
  Container,
  Typography,
  Grid,
  Paper
} from '@mui/material';


const WelcomePage = props => {
  return (
    <Container maxWidth="md">
      <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Paper style={{ padding: '16px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              ¡Bienvenido a nuestro sitio web!
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lorem ut libero malesuada feugiat.
            </Typography>
            <Button  variant="contained" color="primary" style={{ marginTop: '16px' }}>
              Comenzar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default WelcomePage