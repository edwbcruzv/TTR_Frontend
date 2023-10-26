import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { ROL_ADMIN } from '../../utils/jwt_data'


const AdminProtected = props => {
  const {token} = useAuth()

  if (token) {
    const [header, payload, signature] = token.split('.')
    const payloadJson = JSON.parse(atob(payload))
    if (payloadJson.rol === ROL_ADMIN) {
      console.log(token,payloadJson)
      console.log("Paso AdminProtected")
    }else{
      return <Navigate to="/" replace />
    }
  }else{
    return <Navigate to="/" replace />
  }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AdminProtected