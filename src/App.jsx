import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import AdminProtected from "./pages/Admin/AdminProtected";
import DashboardAdminPage from "./pages/Admin/DashboardAdminPage";
import UsersPage from "./pages/Admin/UsersPage";
import DashboardTeacherPage from "./pages/Teacher/DashboardTeacherPage";
import TeacherProtected from "./pages/Teacher/TeacherProtected";
import DashboardStudentPage from "./pages/Student/DashboardStudentPage";
import StudentProtected from "./pages/Student/StudentProtected";
import NotFoundPage from "./pages/NotFoundPage";
import AuthProvider from "./context/AuthContext";
import { PublicProtected } from "./pages/PublicProtected";
import CasesPage from "./pages/Admin/CasesPage";
import ConfigPage from "./pages/ConfigPage";
import CasesTeacherPage from "./pages/Teacher/CasesTeacherPage";
import GroupsTeacherPage from "./pages/Teacher/GroupsTeacherPage";
import RevisionTeacherPage from "./pages/Teacher/RevisionTeacherPage";
import CasesStudentPage from "./pages/Student/CasesStudentPage";
import TeamsStudentPage from "./pages/Student/TeamsStudentPage";
import GroupViewTeacherPage from "./pages/Teacher/GroupViewTeacherPage";


const App = (props) => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* Dentro de Routes se declaran las rutas y el componente al que va a direcciones, los componentes deben te derminar en Page.jsx */}
          <Routes>
            <Route element={<PublicProtected />}>
              <Route path="/" element={<WelcomePage />}></Route>
              <Route path="/recovery" element={<WelcomePage />}></Route>
            </Route>

            <Route path="/admin" element={<AdminProtected />}>
              <Route index element={<DashboardAdminPage />}></Route>
              <Route path="users" element={<UsersPage />}></Route>
              <Route path="cases" element={<CasesPage />}></Route>
              <Route path="config" element={<ConfigPage />}></Route>
            </Route>

            <Route  path="/student" element={<StudentProtected />}>
              <Route index element={<DashboardStudentPage />}></Route>
              <Route path="cases" element={<CasesStudentPage/>}  />
              <Route path="teams" element={<TeamsStudentPage/>}  />

            </Route>

            <Route path="/teacher" element={<TeacherProtected />}>
              <Route index element={<DashboardTeacherPage />}></Route>
              <Route path="cases" element={<CasesTeacherPage/>}  />
              
              <Route path="groups" element={<GroupsTeacherPage/>}  />
              <Route path="group/:id" element={<GroupViewTeacherPage/>}  />
              <Route path="revision" element={<RevisionTeacherPage/>}  />
            </Route>

            <Route path="config" element={<ConfigPage/>}  />
            

            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
