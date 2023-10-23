import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate } from 'react-router-dom'

const StudentProtected = () => {
    const {isAuth,isStudent} = useAuth()
    if (!isAuth && !isStudent) {
      return <Navigate to="/" replace />
    }else{
      console.log("Paso StudentProtected")
    }
    return (
      <div>
          <Outlet/>
      </div>
    )
}

export default StudentProtected