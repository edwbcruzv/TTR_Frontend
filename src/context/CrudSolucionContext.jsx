import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import { URI_BACKEND } from '../utils/environments'

const CrudSolucionContext = createContext()

const initialForm = {
  id: null,
  practicaId: null,
  strHtml: null,
  strCss: null,
  strJs: null,
  estudianteUsername: null,
  equipoId: null,
  fechaUltimaEdicion: null,
  fechaLimiteEntrega: null,
  rubricaCalificada: null
}

function CrudSolucionProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

  /**
   * formulario
   */
  const [loading, setLoading] = useState(false)
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
    * ModalCreate/Update
    */
  const [openModalSolucionForm, setOpenModalSolucionForm] = useState(false)
  const handleOpenModalSolucionForm = () => {
    setOpenModalSolucionForm(true)
  }
  const handleCloseModalSolucionForm = () => {
    console.log('cerrando')
    setOpenModalSolucionForm(false)
    reset(initialForm)
  }

  /**
    * ModalView
    */
  const [openModalSolucionView, setOpenModalSolucionView] = useState(false)
  const handleOpenModalSolucionView = () => {
    setOpenModalSolucionView(true)
  }
  const handleCloseModalSolucionView = () => {
    console.log('cerrando')
    setOpenModalSolucionView(false)
  }

  /**
   * Peticiones a la API
   */

  async function getAllSoluciones () {
    setLoading(true)
    const res = await get(URI_BACKEND('solucion/getAll'), token)

    setLoading(false)
    return res
  }

  async function getSolucion (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`solucion/${id}`), token)

    setLoading(false)
    return res
  }

  async function getAllSolucionesByGrupoId (grupoId) {
    setLoading(true)
    const res = await get(URI_BACKEND(`solucion/getAllByGrupoId/${grupoId}`), token)

    setLoading(false)
    return res
  }

  async function createSolucion (data) {
    setLoading(true)
    const res = await post(URI_BACKEND('solucion'), data, token)

    setLoading(false)
    return res
  }

  async function updateSolucion (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('solucion'), data, token)

    setLoading(false)
    return res
  }

  async function deleteSolucion (id) {
    setLoading(true)
    const res = await del(URI_BACKEND(`solucion/${id}`), token)

    setLoading(false)
    return res
  }

  const data = {
    loading,

    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    errors,

    openModalSolucionForm,
    handleOpenModalSolucionForm,
    handleCloseModalSolucionForm,

    openModalSolucionView,
    handleOpenModalSolucionView,
    handleCloseModalSolucionView,

    getAllSoluciones,
    getSolucion,
    getAllSolucionesByGrupoId,
    createSolucion,
    updateSolucion,
    deleteSolucion
  }
  return (
    <CrudSolucionContext.Provider value={data}>
      {children}
    </CrudSolucionContext.Provider>

  )
}

export { CrudSolucionProvider }
export default CrudSolucionContext
