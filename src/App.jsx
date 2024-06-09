import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage'
import GroupsPage from './pages/GroupsPage/GroupsPage'
import TeamsPage from './pages/TeamsPage/TeamsPage'
import ConfigPage from './pages/ConfigPage/ConfigPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import RecoveryPage from './pages/RecoveryPage/RecoveryPage'
import PracticesPage from './pages/PracticesPage/PracticesPage'
import WelcomePage from './pages/WelcomePage/WelcomePage'
import SessionContext, { SessionProvider } from './context/SessionContext'
import AdminProtectedRoute from './pages/AdminProtectedRoute'
import TeacherProtectedRoute from './pages/TeacherProtectedRoute'
import StudentProtectedRoute from './pages/StudentProtectedRoute'
import HomeAdminPage from './pages/HomeAdminPage/HomeAdminPage'
import HomeTeacherPage from './pages/HomeTeacherPage/HomeTeacherPage'
import HomeStudentPage from './pages/HomeStudentPage/HomeStudentPage'
import PublicProtectedRoute from './pages/PublicProtectedRoute'
import GroupPage from './pages/GroupsPage/GroupPage/GroupPage'
import InscriptionPage from './pages/InscriptionPage/InscriptionPage'
import UsersProtectedRoute from './pages/UsersProtectedRoute'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import { ThemeProvider } from 'styled-components'
import { createTheme } from '@mui/material'
import { useContext } from 'react'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from './utils/environments'
import { SolutionsPage } from './pages/SolutionsPage'
import SolutionPage from './pages/SolutionsPage/SolutionPage/SolutionPage'
import IndividualsPage from './pages/IndividualsPage/IndividualsPage'

const App = (props) => {
  const { rol, darkMode } = useContext(SessionContext)
  const getTheme = (mode) => {
    const commonSettings = {
      typography: {
        fontFamily: 'Arial, sans-serif'
      }
    }

    switch (rol) {
      case ROL_ADMIN:
        return createTheme({
          ...commonSettings,
          palette: {
            mode,
            primary: {
              main: mode === 'dark' ? '#0d47a1' : '#3f51b5'
            },
            secondary: {
              main: mode === 'dark' ? '#ff4081' : '#f50057'
            }
          }
        })
      case ROL_TEACHER:
        return createTheme({
          ...commonSettings,
          palette: {
            mode,
            primary: {
              main: mode === 'dark' ? '#4caf50' : '#8bc34a'
            },
            secondary: {
              main: mode === 'dark' ? '#ff9800' : '#ffc107'
            }
          }
        })
      case ROL_STUDENT:
        return createTheme({
          ...commonSettings,
          palette: {
            mode,
            primary: {
              main: mode === 'dark' ? '#f44336' : '#ff5722'
            },
            secondary: {
              main: mode === 'dark' ? '#2196f3' : '#03a9f4'
            }
          }
        })
      default:
        return createTheme({
          ...commonSettings,
          palette: {
            mode,
            primary: {
              main: mode === 'dark' ? '#673ab7' : '#9c27b0'
            },
            secondary: {
              main: mode === 'dark' ? '#03a9f4' : '#00bcd4'
            }
          }
        })
    }
  }

  const theme = getTheme(darkMode ? 'dark' : 'light')
  return (
    <>
      <ThemeProvider theme={theme}>

        <BrowserRouter>
          {/* Dentro de Routes se declaran las rutas y el componente al que va a direcciones, los componentes deben te derminar en Page.jsx */}
          <Routes>
            <Route element={<PublicProtectedRoute />}>
              <Route path='/' element={<WelcomePage />} />
              <Route path='/recovery' element={<RecoveryPage />} />
            </Route>

            <Route path='/admin' element={<AdminProtectedRoute />}>
              <Route index element={<HomeAdminPage />} />
              <Route path='users' element={<UsersPage />} />
              <Route path='groups' element={<GroupsPage />} />
              {/* por ahora el administrador no podra administrar el grupo  */}
              {/* <Route path='group' element={<GroupPage />} /> */}
              <Route path='practices' element={<PracticesPage />} />
            </Route>

            <Route path='/teacher' element={<TeacherProtectedRoute />}>
              <Route index element={<HomeTeacherPage />} />
              <Route path='practices' element={<PracticesPage />} />
              <Route path='groups' element={<GroupsPage />} />
              <Route path='group' element={<GroupPage />} />
              <Route path='solutions' element={<SolutionsPage />} />
              <Route path='solution' element={<SolutionPage />} />
            </Route>

            <Route path='/student' element={<StudentProtectedRoute />}>
              <Route index element={<HomeStudentPage />} />
              {/* <Route path='practices' element={<PracticesPage />} /> */}
              <Route path='teams' element={<TeamsPage />} />
              <Route path='inscriptions' element={<InscriptionPage />} />
              <Route path='individuals' element={<IndividualsPage />} />
              <Route path='solution' element={<SolutionPage />} />

            </Route>

            <Route path='/' element={<UsersProtectedRoute />}>
              <Route path='config' element={<ConfigPage />} />
              <Route path='profile' element={<ProfilePage />} />

            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </>
  )
}

export default App
