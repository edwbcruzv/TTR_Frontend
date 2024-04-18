import React from 'react'
import useSession from '../hooks/useSession'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_ADMIN } from '../utils/jwt_data'

const AdminProtectedRoute = () => {
  const { token, rol, usernameSession, nombre, isValid } = useSession()
  console.log(token, rol, usernameSession, nombre, isValid)
  // if (isValid && rol === ROL_ADMIN) {
  //   console.log('Paso AdminProtected: ' + rol)
  // } else {
  //   // return <Navigate to='/' replace />
  // }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AdminProtectedRoute
