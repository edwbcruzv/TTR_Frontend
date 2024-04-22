import { jwtDecode } from 'jwt-decode'
import { useState, createContext, useEffect } from 'react'
import Swal from 'sweetalert2'

const SessionContext = createContext()
const SessionProvider = ({ children }) => {
  const sessionSTR = window.localStorage.getItem('session')
  const session = JSON.parse(sessionSTR) || {}
  const [token, setToken] = useState(session.jwt)
  const [rol, setRol] = useState(session.rol)
  const [usernameSession, setUsernameSession] = useState(session.usernameSession)
  const [nombreSession, setNombreSession] = useState(session.nombreSession)
  const [email, setEmail] = useState(session.email)
  const [isValidSession, setIsValidSession] = useState(session.isValidSession)
  const [validatingSession, setValidatingSession] = useState(null)

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0
  }

  useEffect(() => {
    setValidatingSession(true)
    console.log('ejecucion del sessionContext')
    try {
      const decodeJWT = jwtDecode(token)
      const tokenExpired = Date.now() > (decodeJWT.exp * 1000) // Convertir la fecha de expiración a milisegundos
      if (tokenExpired) {
        console.log('La sesion ha expirado.')
        deleteSession()
        window.localStorage.removeItem('session')
        Swal.fire({
          title: 'Se ha terminado la sesion',
          text: 'Por favor, vuelve a iniciar sesion',
          icon: 'info'
        })
      } else {
        console.log('Sesion aun valida.')
      }
    } catch (error) {
      console.error('Error al decodificar el token:', error.message)
      deleteSession()
      window.localStorage.removeItem('session')
    }
    setValidatingSession(false)
  }, [])

  function deleteSession () {
    console.log('Sesion cerrada.')
    setRol(null)
    setToken(null)
    setUsernameSession(null)
    setNombreSession(null)
    setEmail(null)
    setIsValidSession(false)
  }

  const values = { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession }

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  )
}

export { SessionProvider }
export default SessionContext
