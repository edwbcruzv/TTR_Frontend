import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage'
import GroupsPage from './pages/GroupsPage/GroupsPage'
import TeamsPage from './pages/TeamsPage/TeamsPage'
import ConfigPage from './pages/ConfigPage/ConfigPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import RecoveryPage from './pages/RecoveryPage/RecoveryPage'
import PracticesPage from './pages/PracticesPage/PracticesPage'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import { SessionProvider } from './context/SessionContext'
import AdminProtectedRoute from './pages/AdminProtectedRoute'
import TeacherProtectedRoute from './pages/TeacherProtectedRoute'
import StudentProtectedRoute from './pages/StudentProtectedRoute'
import HomeAdminPage from './pages/HomeAdminPage/HomeAdminPage'
import HomeTeacherPage from './pages/HomeTeacherPage/HomeTeacherPage'
import HomeStudentPage from './pages/HomeStudentPage/HomeStudentPage'
import PublicProtectedRoute from './pages/PublicProtectedRoute'

const App = (props) => {
  return (
    <>

      <SessionProvider>
        <BrowserRouter>
          {/* Dentro de Routes se declaran las rutas y el componente al que va a direcciones, los componentes deben te derminar en Page.jsx */}
          <Routes>
            <Route element={<PublicProtectedRoute />}>
              <Route path='/' element={<WelcomePage />} />
              <Route path='/recovery' element={<RecoveryPage />} />
              <Route path='/practices' element={<PracticesPage />} />
              <Route path='/config' element={<ConfigPage />} />
            </Route>

            <Route path='/admin' element={<AdminProtectedRoute />}>
              <Route index element={<HomeAdminPage />} />
              <Route path='users' element={<UsersPage />} />
              <Route path='groups' element={<GroupsPage />} />
            </Route>

            <Route path='/teacher' element={<TeacherProtectedRoute />}>
              <Route index element={<HomeTeacherPage />} />
              <Route path='users' element={<UsersPage />} />
              <Route path='groups' element={<GroupsPage />} />
            </Route>

            <Route path='/student' element={<StudentProtectedRoute />}>
              <Route index element={<HomeStudentPage />} />
              <Route path='teams' element={<TeamsPage />} />
            </Route>

            <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </BrowserRouter>
      </SessionProvider>
    </>
  )
}

export default App
