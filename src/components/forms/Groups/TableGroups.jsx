import React from 'react'
import CardGroup from './CardGroup'
import Grid from '@mui/material/Grid'

const TableGroups = () => {
  return (
    <div>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="wrap"
          
        >
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        
        
        </Grid>
    </div>
  )
}

export default TableGroups