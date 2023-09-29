import React from 'react'
import { Button,
  Container,
  Typography,
  Grid,
  Paper, AppBar, Toolbar, IconButton
} from '@mui/material';
import { Menu } from '@mui/icons-material'
import AppFrame from '../components/frames/AppFrame';
import NavBarHome from '../components/navbars/NavBarHome';

const WelcomePage = props => {
  return (
    <AppFrame>
      <NavBarHome/>      

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
    </AppFrame>
  )
}

export default WelcomePage