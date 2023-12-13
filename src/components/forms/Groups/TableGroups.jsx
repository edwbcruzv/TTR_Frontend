import React from 'react'
import CardGroup from './CardGroup'
import Grid from '@mui/material/Grid'
import useAuth from '../../../hooks/useAuth'
import useAxios from '../../../hooks/useAxios'
import { URI_BACKEND } from '../../../utils/urls'

const TableGroups = () => {
  const {token,id} = useAuth()


  const {Data,IsPending,Error}=useAxios(URI_BACKEND(`grupo/getAllByProfesorId/${id}`),"GET",token)
  if (IsPending===false && Data) {
    console.log(Data)
  }
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

        {Data && Data.map((grupo)=><Grid item xs={12} sm={6} md={4} lg={3}><CardGroup team={grupo}/></Grid>)}
        {/* <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><CardGroup/></Grid> */}
        
        
        </Grid>
    </div>
  )
}

export default TableGroups