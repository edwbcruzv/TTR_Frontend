import React from 'react'
import useSession from '../hooks/useSession'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_ADMIN, ROL_STUDENT } from '../utils/jwt_data'

const StudentProtectedRoute = () => {
  const { token, rol, usernameSession, nombre, isValid } = useSession()
  console.log(token, rol, usernameSession, nombre, isValid)
  // if (rol === ROL_STUDENT) {
  //   console.log('Paso StudentProtected: ' + rol)
  // } else {
  //   return <Navigate to='/' replace />
  // }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default StudentProtectedRoute
