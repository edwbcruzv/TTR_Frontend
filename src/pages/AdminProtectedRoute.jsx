import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_ADMIN } from '../utils/environments'
import SessionContext from '../context/SessionContext'

const AdminProtectedRoute = () => {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  // console.log(token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession)
  if (isValidSession && rol === ROL_ADMIN) {
    // console.log('Paso AdminProtected: ' + rol)
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

export default AdminProtectedRoute
