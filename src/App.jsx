import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersPage from './pages/UsersPage/UsersPage'
import GroupsPage from './pages/GroupsPage/GroupsPage'
import TeamsPage from './pages/TeamsPage/TeamsPage'
import ConfigPage from './pages/ConfigPage/ConfigPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import RecoveryPage from './pages/RecoveryPage/RecoveryPage'
import PracticesPage from './pages/PracticesPage/PracticesPage'
import WelcomePage from './pages/WelcomePage/WelcomePage'
// import "/styles/app.css"

const App = (props) => {
  return (
    <>

      <BrowserRouter>
        {/* Dentro de Routes se declaran las rutas y el componente al que va a direcciones, los componentes deben te derminar en Page.jsx */}
        <Routes>
          <Route path='/config' element={<ConfigPage />} />
          <Route path='/groups' element={<GroupsPage />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/practices' element={<PracticesPage />} />
          <Route path='/recovery' element={<RecoveryPage />} />
          <Route path='/teams' element={<TeamsPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/' element={<WelcomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
