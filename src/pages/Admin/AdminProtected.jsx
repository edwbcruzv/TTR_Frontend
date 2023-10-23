import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const AdminProtected = props => {
  const {jwt,isAuth,isAdmin} = useAuth()
  if (!isAuth && !isAdmin) {
    console.log(jwt,isAuth,isAdmin)
    return <Navigate to="/" replace />
  }else{
    console.log(jwt,isAuth,isAdmin)
    console.log("Paso AdminProtected")
  }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AdminProtected