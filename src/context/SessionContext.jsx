import { useState, createContext, useContext, useEffect } from 'react'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../utils/jwt_data'

const SessionContext = createContext()
const SessionProvider = ({ children }) => {
  const sessionSTR = window.localStorage.getItem('session')
  const session = JSON.parse(sessionSTR)
  const [token, setToken] = useState(session.jwt)
  const [rol, setRol] = useState(session.rol)
  const [usernameSession, setUsernameSession] = useState(session.username)
  const [nombre, setNombre] = useState(session.nombre)
  const [email, setEmail] = useState(session.email)
  const [isValid, setIsValid] = useState(false)

  const values = { token, setToken, rol, setRol, usernameSession, setUsernameSession, nombre, setNombre, email, setEmail, isValid, setIsValid }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}

export { SessionProvider }
export default SessionContext
