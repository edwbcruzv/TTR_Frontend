import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'
import { ROL_TEACHER } from '../../utils/jwt_data'

const TeacherProtected = () => {
  const {rol} = useAuth()
    if (rol === ROL_TEACHER) {
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

export default TeacherProtected