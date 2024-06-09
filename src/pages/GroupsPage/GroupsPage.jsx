import React, { useContext } from 'react'
import { CrudGrupoProvider } from '../../context/CrudGrupoContext'
import { Divider } from '@mui/material'

import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import CrudGroupModal from './Components/CrudGroupModal'
import TableGroups from './Components/TableGroups'
import { CrudInscripcionProvider } from '../../context/CrudInscripcionContext'
import { ROL_ADMIN } from '../../utils/environments'
import SessionContext from '../../context/SessionContext'

export default function GroupsPage () {
  const { token, rol, usernameSession, nombre, email, isValid, deleteSession } = useContext(SessionContext)
  return (
    <MiniDrawerFrame>
      <CrudGrupoProvider>
        {/* Solo el admin vera el voton del ¿creacion de grupos */}
        {rol === ROL_ADMIN && <>
          <CrudGroupModal />
          <Divider style={{ margin: '16px 0' }} />
                              </>}

        <CrudInscripcionProvider>
          <TableGroups />
        </CrudInscripcionProvider>
      </CrudGrupoProvider>
    </MiniDrawerFrame>
  )
}
