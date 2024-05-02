import { useContext, useEffect } from 'react'
import SessionContext from '../context/SessionContext'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../utils/jwt_data'

export default function useSession () {
  const { token, setToken, rol, setRol, usernameSession, setUsernameSession, nombre, setNombre, isValid, setIsValid } = useContext(SessionContext)

  useEffect(() => {
    try {
      // extrayendo los datos del token
      const [header, payload, signature] = token.split('.')
      // decodificando las secciones del token
      const payloadJson = JSON.parse(atob(payload))
      // Obtener la fecha de expiración del token (exp)
      const expirationDate = new Date(payloadJson.exp * 1000)
      // Obtener la fecha actual
      const currentDate = new Date()

      if (currentDate > expirationDate) {
        console.log('El token ha expirado.')
        deleteSession()
      } else {
        console.log('El token aún es válido.')
        recoverySession(payloadJson)
      }
    } catch (error) {
      console.error('Error al decodificar el token:', error.message)
      deleteSession()
    }
    // refreshSession()
  }, [])

  // function refreshSession () {
  //   try {
  //     // extrayendo los datos del token
  //     const [header, payload, signature] = token.split('.')
  //     // decodificando las secciones del token
  //     const payloadJson = JSON.parse(atob(payload))
  //     // Obtener la fecha de expiración del token (exp)
  //     const expirationDate = new Date(payloadJson.exp * 1000)
  //     // Obtener la fecha actual
  //     const currentDate = new Date()

  //     if (currentDate > expirationDate) {
  //       console.log('El token ha expirado.')
  //       deleteSession()
  //     } else {
  //       console.log('El token aún es válido.')
  //       recoverySession(payloadJson)
  //     }
  //   } catch (error) {
  //     console.error('Error al decodificar el token:', error.message)
  //     deleteSession()
  //   }
  // }

  function recoverySession (payloadJson) {
    setUsernameSession(payloadJson.username)
    setNombre(payloadJson.nombre)
    setIsValid(true)
    switch (payloadJson.rol) {
      case ROL_ADMIN:
        setRol(ROL_ADMIN)
        break
      case ROL_TEACHER:
        setRol(ROL_TEACHER)
        break
      case ROL_STUDENT:
        setRol(ROL_STUDENT)
        break
      default:
        setRol(null)
        setToken(null)
        setIsValid(false)
        window.localStorage.removeItem('token')
        break
    }
  }

  function deleteSession () {
    setRol(null)
    setToken(null)
    setUsernameSession(null)
    setNombre(null)
    setIsValid(false)
    window.localStorage.removeItem('token')
  }

  return { token, rol, usernameSession, nombre, isValid }
}
