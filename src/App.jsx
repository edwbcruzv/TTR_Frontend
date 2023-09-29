import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 

import WelcomePage from './pages/WelcomePage'

import AdminPage from './pages/Admin/AdminPage'
import DashboardAdminPage from './pages/Admin/DashboardAdminPage'
import LoginAdminPage from './pages/Admin/LoginAdminPage'
import RegisterUsersPage from './pages/Admin/RegisterUsersPage'

import TeacherPage from './pages/Teacher/TeacherPage'
import DashboardTeacherPage from './pages/Teacher/DashboardTeacherPage'
import LoginTeacherPage from './pages/Teacher/LoginTeacherPage'

import StudentPage from './pages/Student/StudentPage'
import DashboardStudentPage from './pages/Student/DashboardStudentPage'
import LoginStudentPage from './pages/Student/LoginStundentPage'

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
        <Route path='login' element={<LoginAdminPage/>} ></Route>
        <Route path='register-users' element={<RegisterUsersPage/>} ></Route>
      </Route>
      
      <Route path='/student' element={<StudentPage/>} >
        <Route index element={<DashboardStudentPage/>} ></Route>
        <Route path='login' element={<LoginStudentPage/>} ></Route>
      </Route>
      
      <Route path='/teacher' element={<TeacherPage/>} >
        <Route index element={<DashboardTeacherPage/>} ></Route>
        <Route path='login' element={<LoginTeacherPage/>} ></Route>
      </Route>
      
      <Route path='*' element={<NotFoundPage/>} ></Route>
    
    </Routes>
    </BrowserRouter>
    </>

  )
}


export default App

