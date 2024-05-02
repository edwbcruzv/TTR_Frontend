import { createContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/urls'
import { useForm } from 'react-hook-form'
import useSession from '../hooks/useSession'

const CrudEstudianteContext = createContext()

const initialForm = {
  username: '',
  email: '',
  password: '',
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  fechaNacimiento: '',
  boleta: ''
}

function CrudEstudianteProvider ({ children }) {
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

  async function getEstudiante (username) {
    setLoading(true)
    const res = await get(URI_BACKEND(`estudiante/${username}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function getAllEstudiantes () {
    setLoading(true)
    const res = await get(URI_BACKEND('estudiante/getAll'), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function updateEstudiante (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('estudiante'), data, token)
    if (res.status === 200) {
      console.log(res)
      setResponse(res)
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
  }

  async function deleteEstudiante (username) {
    setLoading(true)
    const res = await del(URI_BACKEND(`estudiante/${username}`), token)
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

    getEstudiante,
    updateEstudiante,
    deleteEstudiante
  }
  return (
    <CrudEstudianteContext.Provider value={data}>
      {children}
    </CrudEstudianteContext.Provider>

  )
}

export { CrudEstudianteProvider }
export default CrudEstudianteContext
