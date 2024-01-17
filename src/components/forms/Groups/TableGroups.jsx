import React from 'react'
import CardGroup from './CardGroup'
import Grid from '@mui/material/Grid'
import useAuth from '../../../hooks/useAuth'
import useAxios from '../../../hooks/useAxios'
import { URI_BACKEND } from '../../../utils/urls'
import { Box, Skeleton } from '@mui/material'
import { ROL_TEACHER } from '../../../utils/jwt_data'

const TableGroups = () => {
  const {token,id,rol} = useAuth()
  let path = "grupo/getAll"
  if (rol===ROL_TEACHER) {
    path = `grupo/getAllByProfesorId/${id}`
  }


  const {Data,IsPending,Error}=useAxios(URI_BACKEND(path),"GET",token)
  if (IsPending===false && Data) {
    console.log(Data)
  }
  return (
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          alignContent="stretch"
          wrap="wrap"
          
        >
        {Data && Data.map((grupo,index)=><Grid key={index} item xs={12} sm={6} md={4} lg={3}><CardGroup key={index} group={grupo}/></Grid>)}
        {IsPending&&[,1,2,3,4,5,6,7,8].map((elem,index)=><Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5 ,maxWidth: 345 }}>
              <Skeleton variant="rectangular" width={305} height={140} />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>)}
        
        </Grid>
  )
}

export default TableGroups