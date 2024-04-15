import { useState, createContext, useContext, useEffect } from 'react'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../utils/jwt_data'

const SessionContext = createContext()

const SessionProvider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const [rol, setRol] = useState(null)
  const [usernameSession, setUsernameSession] = useState(null)
  const [nombre, setNombre] = useState(null)
  const [isValid, setIsValid] = useState(false)

  const values = { token, setToken, rol, setRol, usernameSession, setUsernameSession, nombre, setNombre, isValid, setIsValid }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}

export { SessionProvider }
export default SessionContext
