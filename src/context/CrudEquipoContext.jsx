import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'

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
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

  /**
   * formulario
   */
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
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

  async function getEquipo (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`equipo/${id}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function getAllEquipoByGrupoId (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`equipo/getAllByGrupoId/${id}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function createEquipo (data) {
    setLoading(true)
    const res = await post(URI_BACKEND('equipo'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function updateEquipo (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('equipo'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function deleteEquipo (id) {
    setLoading(true)
    const res = await del(URI_BACKEND(`equipo/${id}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
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

    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm,

    getEquipo,
    getAllEquipoByGrupoId,
    createEquipo,
    updateEquipo,
    deleteEquipo
  }
  return (
    <CrudEquipoContext.Provider value={data}>
      {children}
    </CrudEquipoContext.Provider>

  )
}

export { CrudEquipoProvider }
export default CrudEquipoContext
