import React from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import { CrudPracticaProvider } from '../../context/CrudPracticaContext'
import { Divider } from '@mui/material'
import FullScreenCreatePractice from './Components/FullScreenCreatePractice'

export default function PracticesPage () {
  return (
    <MiniDrawerFrame>
      <CrudPracticaProvider>
        <FullScreenCreatePractice />
        <Divider />

      </CrudPracticaProvider>
    </MiniDrawerFrame>
  )
}
