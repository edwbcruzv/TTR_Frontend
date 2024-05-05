import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../utils/environments'
import SessionContext from '../context/SessionContext'

const PublicProtectedRoute = () => {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  // console.log(token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession)
  if (isValidSession) {
    console.log('Paso PublicProtected: ' + rol)
    switch (rol) {
      case ROL_ADMIN:
        return <Navigate to='/admin' replace />
      case ROL_TEACHER:
        return <Navigate to='/teacher' replace />
      case ROL_STUDENT:
        return <Navigate to='/student' replace />
      default:
        return <Navigate to='/' replace />
    }
  } else {
    // return <Navigate to='/' replace />
    return <Outlet />
  }
}

export default PublicProtectedRoute
