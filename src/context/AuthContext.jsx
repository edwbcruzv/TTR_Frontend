import { useState, createContext } from 'react'
import { useForm } from 'react-hook-form'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../utils/jwt_data'
import { URI_BACKEND } from '../utils/urls'
import { helperAXIOS } from '../helpers/helperAXIOS'

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
  /**
   * Variables Globales
   */
  const [token, setToken] = useState(window.localStorage.getItem('token'))
  const [rol, setRol] = useState(null)
  const [id, setId] = useState(null)
  const [nombre, setNombre] = useState(null)
  const [isValid, setIsValid] = useState(null)

  /**
   * formulario
   */
  const { register, handleSubmit, watch, reset, setValue, getValues, formState: { errors } } = useForm({ defaultValues: initialForm })

  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)

  const { post } = helperAXIOS()

  /**
   * modales
   */
  const [openModalForm, setOpenModalForm] = useState(false)
  const handleOpenModalForm = () => {
    setOpenModalForm(true)
  }
  const handleCloseModalForm = () => {
    console.log('cerrando')
    setOpenModalForm(false)
    reset(initialForm)
  }

  /**
   * Peticioens a la API
   */

  async function login (data) {
    setLoading(true)
    // console.log(data)
    const res = await post(URI_BACKEND('auth/login'), data, token)
    if (res.status === 200) {
      // console.log(res)
      setToken(res.data.jwt)
      window.localStorage.setItem('token', res.data.jwt)
      setResponse(res)
      // handleCloseModalForm()
    } else {
      console.log(res)
      setError(res.error)
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
        res = await post(URI_BACKEND('auth/register-admin'), data, token)
        break
      case ROL_TEACHER:
        res = await post(URI_BACKEND('auth/register-teacher'), data, token)
        break
      case ROL_STUDENT:
        res = await post(URI_BACKEND('auth/register-student'), data, token)
        break
      default:
        break
    }

    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
      handleCloseModalForm()
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
    // window.location.reload();
  }

  async function recoveryByEmail (data) {
    setLoading(true)
    // console.log(data)
    const res = await post(URI_BACKEND('auth/email-password'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
      // handleCloseModalForm()
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
    // window.location.reload();
  }

  const values = {
    token,
    setToken,
    rol,
    setRol,
    id,
    setId,
    nombre,
    setNombre,
    isValid,
    setIsValid,

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
