import React from 'react'
import MiniDrawerFrame from '../../components/Dashboard/MiniDrawerFrame'
import { Divider } from '@mui/material'
import UsersTabs from './Components/UsersTabs'
import { CrudUsuarioProvider } from '../../context/CrudUsuarioContext'
import { CrudEstudianteProvider } from '../../context/CrudEstudianteContext'
import { CrudProfesorProvider } from '../../context/CrudProfesorContext'
import CrudUserModal from './Components/CrudUserModal'
import AuthProvider from '../../context/AuthContext'

export default function UsersPage () {
  return (
    <MiniDrawerFrame>
      <CrudUsuarioProvider>
        <CrudEstudianteProvider>
          <CrudProfesorProvider>
            <AuthProvider>

              <CrudUserModal />
            </AuthProvider>
            <Divider />
            <UsersTabs />
          </CrudProfesorProvider>
        </CrudEstudianteProvider>
      </CrudUsuarioProvider>
    </MiniDrawerFrame>
  )
}
