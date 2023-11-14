import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { ROL_ADMIN } from '../../utils/jwt_data'


const AdminProtected = props => {
  const {rol} = useAuth()
    if (rol === ROL_ADMIN) {
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

export default AdminProtected