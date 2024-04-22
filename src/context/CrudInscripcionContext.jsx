import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'

const CrudInscripcionContext = createContext()

const initialForm = {
  grupoId: null,
  estudianteUsername: null,
  calificacion: null,
  codigo: null
}

function CrudInscripcionProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

  /**
   * formulario
   */

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

  async function getInscripcion (grupoId, username) {
    setLoading(true)
    const res = await get(URI_BACKEND(`inscripcion/grupo/${grupoId}/estudiante/${username}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      return res.data
    } else {
      // console.log(res.error)
      setLoading(false)
      return res.error
    }
  }

  async function getAllInscripcionesByGrupoId (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`inscripcion/getAllByGrupoId/${id}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      return res.data
    } else {
      // console.log(res.error)
      setLoading(false)
      return res.error
    }
  }

  async function createInscripcion (data) {
    setLoading(true)
    const res = await post(URI_BACKEND('inscripcion'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      return res.data
    } else {
      // console.log(res.error)
      setLoading(false)
      return res.error
    }
  }

  async function updateInscripcion (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('inscripcion'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      return res.data
    } else {
      // console.log(res.error)
      setLoading(false)
      return res.error
    }
  }

  async function deleteInscripcion (grupoId, username) {
    setLoading(true)
    const res = await del(URI_BACKEND(`inscripcion/grupo/${grupoId}/estudiante/${username}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      return res.data
    } else {
      // console.log(res.error)
      setLoading(false)
      return res.error
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

    getInscripcion,
    getAllInscripcionesByGrupoId,
    createInscripcion,
    updateInscripcion,
    deleteInscripcion
  }
  return (
    <CrudInscripcionContext.Provider value={data}>
      {children}
    </CrudInscripcionContext.Provider>

  )
}

export { CrudInscripcionProvider }
export default CrudInscripcionContext
