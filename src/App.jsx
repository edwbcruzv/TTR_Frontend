import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

import WelcomePage from './pages/WelcomePage'

import AdminPage from './pages/Admin/AdminPage'
import DashboardAdminPage from './pages/Admin/DashboardAdminPage'
import LoginAdminPage from './pages/Admin/LoginAdminPage'
import RegisterUsersPage from './pages/Admin/RegisterUsersPage'

import ProfesorPage from './pages/Profesor/ProfesorPage'
import DashboardProfesorPage from './pages/Profesor/DashboardProfesorPage'
import LoginProfesorPage from './pages/Profesor/LoginProfesorPage'

import AlumnoPage from './pages/Alumno/AlumnoPage'
import DashboardAlumnoPage from './pages/Alumno/DashboardAlumnoPage'
import LoginAlumnoPage from './pages/Alumno/LoginAlumnoPage'

import NotFoundPage from './pages/NotFoundPage'


const App = props => {
  return (
    <>
    <BrowserRouter>
    {/* Dentro de Routes se declaran las rutas y el componente al que va a direcciones, los componentes deben te derminar en Page.jsx */}
    <Routes>

      <Route path='/' element={<WelcomePage/>} ></Route>
      
      <Route path='/admin' element={<AdminPage/>}>
        <Route index element={<DashboardAdminPage/>} ></Route>
        <Route path='/admin/login' element={<LoginAdminPage/>} ></Route>
        <Route path='/admin/register-users' element={<RegisterUsersPage/>} ></Route>
      </Route>
      
      <Route path='/alumno' element={<AlumnoPage/>} >
        <Route index element={<DashboardAlumnoPage/>} ></Route>
        <Route path='login' element={<LoginAlumnoPage/>} ></Route>
      </Route>
      
      <Route path='/profesor' element={<ProfesorPage/>} >
        <Route index element={<DashboardProfesorPage/>} ></Route>
        <Route path='login' element={<LoginProfesorPage/>} ></Route>
      </Route>
      
      <Route path='*' element={<NotFoundPage/>} ></Route>
    
    </Routes>
    </BrowserRouter>
    </>

  )
}


export default App

