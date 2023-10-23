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

import { UserProvider } from "./context/UserContext";


const App = (props) => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          {/* Dentro de Routes se declaran las rutas y el componente al que va a direcciones, los componentes deben te derminar en Page.jsx */}
          <Routes>
            <Route path="/" element={<WelcomePage />}></Route>

            <Route path="/admin" element={<AdminProtected />}>
              <Route index element={<DashboardAdminPage />}></Route>
            </Route>

            <Route path="/student" element={<StudentProtected />}>
              <Route index element={<DashboardStudentPage />}></Route>
            </Route>

            <Route path="/teacher" element={<TeacherProtected />}>
              <Route index element={<DashboardTeacherPage />}></Route>
            </Route>

            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;
