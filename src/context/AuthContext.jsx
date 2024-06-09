import { useState, createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER, URI_BACKEND } from '../utils/environments'
import { helperAXIOS } from '../helpers/helperAXIOS'
import SessionContext from './SessionContext'
import Swal from 'sweetalert2'

const AuthContext = createContext()

const initialForm = {
  username: null,
  password: null
  // email: null,
  // nombre: null,
  // apellidoPaterno: null,
  // apellidoMaterno: null,
  // rol: null,
  // cedula: null,
  // boleta: null

}

const AuthProvider = ({ children }) => {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  /**
   * formulario
   */
  const { register, handleSubmit, watch, reset, setValue, getValues, formState: { errors } } = useForm({ defaultValues: initialForm })

  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const { post } = helperAXIOS()

  /**
   * modales
   */
  const [openModalForm, setOpenModalForm] = useState(false)
  const handleOpenModalForm = () => {
    setOpenModalForm(true)
  }
  const handleCloseModalForm = () => {
    // console.log('cerrando')
    setOpenModalForm(false)
    reset(initialForm)
  }

  /**
   * Peticiones a la API
   */

  async function login (data) {
    setLoading(true)
    // console.log(data)
    const res = await post(URI_BACKEND('auth/login'), data, null)
    if (res.status === 200) {
      // console.log(res)
      window.localStorage.setItem('session', JSON.stringify(res.data))
      setResponse(res)
      handleCloseModalForm()
      window.location.reload()
    } else {
      console.log(res)
      setError(res)
    }
    setLoading(false)
    // window.location.reload();
  }

  async function registerUser (data) {
    setLoading(true)
    // console.log(data)

    let res = null
    switch (data.rol) {
      case ROL_ADMIN:
        res = await post(URI_BACKEND('auth/register-admin'), data, null)
        break
      case ROL_TEACHER:
        res = await post(URI_BACKEND('auth/register-teacher'), data, null)
        break
      case ROL_STUDENT:
        res = await post(URI_BACKEND('auth/register-student'), data, null)
        break
      default:
        break
    }

    try {
      if (res.status === 200 && isValidSession) {
        setResponse(res.data)
        handleCloseModalForm()
        Swal.fire({
          title: '¡Usuario registrado!',
          text: 'El usuario ya puede iniciar sesion.',
          icon: 'success',
          timer: 2000
        })
        window.location.reload()
      } else if (res.status === 200 && !isValidSession) {
        setResponse(res.data)
        handleCloseModalForm()
        Swal.fire({
          title: '¡Se ha registrado correctamente!',
          text: 'Redireccionando, espere .',
          icon: 'success',
          timer: 6000,
          timerProgressBar: true
        })
        window.localStorage.setItem('session', JSON.stringify(res.data))
        window.location.reload()
      } else {
        setError(res)
        Swal.fire({
          title: 'Error al intentar registrarse',
          text: `Error: ${res.statusText} (${res.status})`,
          icon: 'error'
        })
      }
    } catch (err) {
      Swal.fire({
        title: 'Error en el sistema',
        text: `Error: ${err} (${err})`,
        icon: 'error'
      })
    }

    setLoading(false)
    // window.location.reload();
  }

  async function recoveryByEmail (data) {
    setLoading(true)
    // console.log(data)
    const res = await post(URI_BACKEND('auth/email-password'), data, null)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
      // handleCloseModalForm()
    } else {
      // console.log(res)
      setError(res.error)
    }
    setLoading(false)
    // window.location.reload();
  }

  const values = {
    response,
    error,
    loading,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm,

    login,
    registerUser,
    recoveryByEmail
  }

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}
export { AuthContext }

export default AuthProvider
