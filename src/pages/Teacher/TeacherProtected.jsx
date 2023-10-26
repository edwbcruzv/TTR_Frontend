import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_TEACHER } from '../../utils/jwt_data'

const TeacherProtected = () => {
  const {token} = useAuth()

  if (token) {
    const [header, payload, signature] = token.split('.')
    const payloadJson = JSON.parse(atob(payload))
    if (payloadJson.rol === ROL_TEACHER) {
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

export default TeacherProtected