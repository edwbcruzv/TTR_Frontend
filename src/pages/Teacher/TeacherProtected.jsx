import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const TeacherProtected = () => {
    const {isAuth,isTeacher} = useAuth()
    if (!isAuth && !isTeacher) {
      return <Navigate to="/" replace />
    }else{
      console.log("Paso TeacherProtected")
    }
    return (
      <div>
          <Outlet/>
      </div>
    )
}

export default TeacherProtected