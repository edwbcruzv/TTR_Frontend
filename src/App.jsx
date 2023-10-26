import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";

import AdminProtected from "./pages/Admin/AdminProtected";
import DashboardAdminPage from "./pages/Admin/DashboardAdminPage";

import DashboardTeacherPage from "./pages/Teacher/DashboardTeacherPage";
import TeacherProtected from "./pages/Teacher/TeacherProtected";

import DashboardStudentPage from "./pages/Student/DashboardStudentPage";
import StudentProtected from "./pages/Student/StudentProtected";

import NotFoundPage from "./pages/NotFoundPage";

import AuthProvider from "./context/AuthContext";
import { PublicProtected } from "./pages/PublicProtected";



const App = (props) => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* Dentro de Routes se declaran las rutas y el componente al que va a direcciones, los componentes deben te derminar en Page.jsx */}
          <Routes>
            <Route element={<PublicProtected />}>
              <Route path="/" element={<WelcomePage />}></Route>
            </Route>

            <Route  element={<AdminProtected />}>
              <Route path="/admin" element={<DashboardAdminPage />}></Route>
            </Route>

            <Route  element={<StudentProtected />}>
              <Route path="/student" element={<DashboardStudentPage />}></Route>
            </Route>

            <Route  element={<TeacherProtected />}>
              <Route path="/teacher" element={<DashboardTeacherPage />}></Route>
            </Route>

            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
