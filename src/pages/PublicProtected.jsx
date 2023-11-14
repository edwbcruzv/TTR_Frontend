import React from 'react'
import useAuth from '../hooks/useAuth'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../utils/jwt_data'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicProtected = () => {
    const {token} = useAuth()
    
    if (token === "undefined") {
      localStorage.removeItem("token");
      return <Navigate to="/" replace />
    }
  
    if (token) {
        const [header, payload, signature] = token.split('.')
        const payloadJson = JSON.parse(atob(payload))
        switch (payloadJson.rol) {
            case ROL_ADMIN:
              return <Navigate to="/admin" replace />
              break;
            case ROL_TEACHER:
              return <Navigate to="/teacher" replace />
              break;
            case ROL_STUDENT:
              return <Navigate to="/student" replace />
              break;
            default:
              console.log("sin Rol")
              break;
          }
    }else{
      return <Outlet/>
      
    }
}
