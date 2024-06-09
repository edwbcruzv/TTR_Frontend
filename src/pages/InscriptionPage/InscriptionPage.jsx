import React from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import { CrudInscripcionProvider } from '../../context/CrudInscripcionContext'
import InscriptionPopover from './Components/InscriptionPopover'
import { Divider } from '@mui/material'
import TableInscriptions from './Components/TableInscriptions'

export default function InscriptionPage () {
  return (

    <MiniDrawerFrame>
      <CrudInscripcionProvider>
        <InscriptionPopover />
        <Divider style={{ margin: '16px 0' }} />
        <TableInscriptions />
      </CrudInscripcionProvider>
    </MiniDrawerFrame>
  )
}
