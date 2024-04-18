import React from 'react'
import useSession from '../hooks/useSession'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_TEACHER } from '../utils/jwt_data'

const TeacherProtectedRoute = () => {
  const { token, rol, usernameSession, nombre, isValid } = useSession()
  console.log(token, rol, usernameSession, nombre, isValid)
  // if (rol === ROL_TEACHER) {
  //   console.log('Paso TeacherProtected: ' + rol)
  // } else {
  //   // return <Navigate to='/' replace />
  // }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default TeacherProtectedRoute
