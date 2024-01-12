import React from 'react'
import useAuth from '../../../hooks/useAuth'
import useAxios from '../../../hooks/useAxios'
import { URI_BACKEND } from '../../../utils/urls'
import { Grid, Skeleton } from '@mui/material'
import CardTeam from './CardTeam'


function TableTeams({group_id}) {
  const {token,id} = useAuth()

  const {Data,IsPending,Error}=useAxios(URI_BACKEND(`equipo/getAllByGrupoId/${group_id}`),"GET",token)
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
        {Data && Data.map((equipo,index)=><Grid key={index} item xs={12} sm={6} md={4} lg={3}><CardTeam team={equipo}/></Grid>)}
        {IsPending&&[,1,2,3,4,5,6,7,8].map((index)=><Grid key={index} item xs={12} sm={6} md={4} lg={3} sx={{ pt: 0.5 ,maxWidth: 345 }}>
              <Skeleton variant="rectangular" width={305} height={140} />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>)}
        
        </Grid>
  )
}

export default TableTeams