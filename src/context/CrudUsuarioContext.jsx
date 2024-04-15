import { createContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/urls'
import { useForm } from 'react-hook-form'
import useSession from '../hooks/useSession'

const CrudUsuarioContext = createContext()

const initialForm = {
  username: '',
  email: '',
  password: '',
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  fechaNacimiento: ''
}

function CrudUsuarioProvider ({ children }) {
  const { token, rol, usernameSession, nombre, isValid } = useSession()

  /**
   * formulario
   */
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const {
    register, // el form lo usa para los inputs
    handleSubmit, // hace el envio
    watch, // obtener el valor de un atributo
    reset, // resetear el formulario
    setValue, // settear el valor a un atributo
    getValues, //
    formState: { errors } // errores de un formulario
  } = useForm({ defaultValues: initialForm }) // inicializar un formulario

  const { get, patch, del } = helperAXIOS()

  /**
    * Modal1
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

  async function getUsuario (username) {
    setLoading(true)
    const res = await get(URI_BACKEND(`usuario/${username}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function updateUsuario (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('usuario'), data, token)
    if (res.status === 200) {
      console.log(res)
      setResponse(res)
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
  }

  async function deleteUsuario (username) {
    setLoading(true)
    const res = await del(URI_BACKEND(`usuario/${username}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  const data = {
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

    getUsuario,
    updateUsuario,
    deleteUsuario
  }
  return (
    <CrudUsuarioContext.Provider value={data}>
      {children}
    </CrudUsuarioContext.Provider>

  )
}

export { CrudUsuarioProvider }
export default CrudUsuarioContext
