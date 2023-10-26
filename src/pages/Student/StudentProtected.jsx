import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_STUDENT } from '../../utils/jwt_data'

const StudentProtected = () => {
  const {token} = useAuth()
  if (token) {
    const [header, payload, signature] = token.split('.')
    const payloadJson = JSON.parse(atob(payload))
    if (payloadJson.rol === ROL_STUDENT) {
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

export default StudentProtected