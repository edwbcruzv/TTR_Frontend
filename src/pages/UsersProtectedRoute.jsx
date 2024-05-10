import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_TEACHER } from '../utils/environments'
import SessionContext from '../context/SessionContext'

const UsersProtectedRoute = () => {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  // console.log(token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession)
  if (isValidSession) {
    console.log('Paso UsersProtectedRoute: ' + rol)
  } else {
    // deleteSession()
    return <Navigate to='/' replace />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default UsersProtectedRoute
