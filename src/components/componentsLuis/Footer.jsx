import React from 'react'
import { Grid, Typography, Link, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram, YouTube, Phone, Mail } from '@mui/icons-material'

const Footer = () => {
  return (

    <Grid
      container
      direction='row'
      justifyContent='space-around'
      alignItems='stretch'
      spacing={4}
      sx={{ backgroundColor: '#1976d2', color: 'white', padding: '2rem 0' }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <div>
          <Typography variant='h6' gutterBottom>
            Sobre Nosotros
          </Typography>
          <Typography variant='body2'>
            Esta herramienta fue elaborada por los alumnos Luis Vega, Edwin Bernardo y David Baltazar como un sistema para entrega final sobre el trabajo terminal 24 con la ayuda del profesor Rubén Peredo Valderrama
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', marginTop: '1rem' }}>
            <li style={{ marginRight: '0.5rem' }}>
              <IconButton href='#'>
                <Facebook style={{ color: 'white' }} />
              </IconButton>
            </li>
            <li style={{ marginRight: '0.5rem' }}>
              <IconButton href='#'>
                <Twitter style={{ color: 'white' }} />
              </IconButton>
            </li>
            <li style={{ marginRight: '0.5rem' }}>
              <IconButton href='#'>
                <Instagram style={{ color: 'white' }} />
              </IconButton>
            </li>
            <li>
              <IconButton href='#'>
                <YouTube style={{ color: 'white' }} />
              </IconButton>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div>
          <Typography variant='h6' gutterBottom>
            Soporte
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href='#' style={{ color: 'white' }}>FAQ</Link></li>
            <li><Link href='#' style={{ color: 'white' }}>Política de Privacidad</Link></li>
            <li><Link href='#' style={{ color: 'white' }}>Ayuda</Link></li>
            <li><Link href='#' style={{ color: 'white' }}>Contacto</Link></li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div>
          <Typography variant='h6' gutterBottom>
            Soporte
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href='#' style={{ color: 'white' }}>FAQ</Link></li>
            <li><Link href='#' style={{ color: 'white' }}>Política de Privacidad</Link></li>
            <li><Link href='#' style={{ color: 'white' }}>Ayuda</Link></li>
            <li><Link href='#' style={{ color: 'white' }}>Contacto</Link></li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <div>
          <Typography variant='h6' gutterBottom>
            Contáctanos
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Phone style={{ color: 'white', marginRight: '0.5rem' }} />
              <Link href='tel:+1234567890' style={{ color: 'white' }}>+1 234 567 890</Link>
            </li>
            <li>
              <Mail style={{ color: 'white', marginRight: '0.5rem' }} />
              <Link href='mailto:contact@email.com' style={{ color: 'white' }}>contact@email.com</Link>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>

  )
}

export default Footer
