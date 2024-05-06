import { useState, createContext } from 'react'
import { useForm } from 'react-hook-form'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER, URI_BACKEND } from '../utils/environments'
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
    console.log('cerrando')
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

    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
      handleCloseModalForm()
      window.localStorage.setItem('session', JSON.stringify(res.data))
      window.location.reload()
    } else {
      console.log(res)
      setError(res)
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
      console.log(res)
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
