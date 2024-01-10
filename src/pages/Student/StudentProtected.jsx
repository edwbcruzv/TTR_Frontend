import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_STUDENT } from '../../utils/jwt_data'

const StudentProtected = () => {
  const {rol} = useAuth()
    if (rol === ROL_STUDENT) {
      console.log("Paso AdminProtected: "+ rol)
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