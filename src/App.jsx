import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import WelcomePage from './pages/WelcomePage'
import LoginAdminPage from './pages/LoginAdminPage'
import LoginUserPage from './pages/LoginUserPage'
import NotFoundPage from './pages/NotFoundPage'
import DashboardPage from './pages/DashboardPage'

const App = props => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage/>} ></Route>
      <Route path='/login-admin' element={<LoginAdminPage/>} ></Route>
      <Route path='/login-user' element={<LoginUserPage/>} ></Route>
      <Route path='/Dashboard' element={<DashboardPage/>} ></Route>
      <Route path='*' element={<NotFoundPage/>} ></Route>

    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}


export default App

