import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const AppFrame = ({children}) => {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justifyContent="flex-start"
      alignItems="strech"
    //   alignContent="center"
    //   wrap="wrap"
      
    >
     {children}
    </Grid>
  )
}

AppFrame.propTypes = {}

export default AppFrame