import { createContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/urls'
import { useForm } from 'react-hook-form'
import useSession from '../hooks/useSession'

const CrudEquipoContext = createContext()

const initialForm = {
  id: 0,
  nombre: 'string',
  grupoId: 0,
  estudiantesUsernames: [
    ''
  ],
  solucionesIds: [
    0
  ]
}

function CrudEquipoProvider ({ children }) {
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

  const { get, post, patch, del } = helperAXIOS()

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

  async function getProfesor (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`equipo/${id}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function getAllProfesoresByGrupoId (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`equipo/getAllByGrupoId/${id}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function createProfesor (data) {
    setLoading(true)
    const res = await post(URI_BACKEND('equipo'), data, token)
    if (res.status === 200) {
      console.log(res)
      setResponse(res)
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
  }

  async function updateProfesor (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('equipo'), data, token)
    if (res.status === 200) {
      console.log(res)
      setResponse(res)
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
  }

  async function deleteProfesor (id) {
    setLoading(true)
    const res = await del(URI_BACKEND(`equipo/${id}`), token)
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

    getProfesor,
    getAllProfesoresByGrupoId,
    createProfesor,
    updateProfesor,
    deleteProfesor
  }
  return (
    <CrudEquipoContext.Provider value={data}>
      {children}
    </CrudEquipoContext.Provider>

  )
}

export { CrudEquipoProvider }
export default CrudEquipoContext
