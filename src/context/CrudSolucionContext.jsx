import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'

const CrudSolucionContext = createContext()

const initialForm = {
  id: null,
  practicaId: null,
  strHtml: null,
  strCss: null,
  estudianteUsername: null,
  equipoId: null,
  recursosMultimedia: [],
  comentarios: null,
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
    // const res = await get(URI_BACKEND('grupo/getAll'), token)
    // if (res.status === 200) {
    //   // console.log(res)
    //   setResponse(res.data)
    // } else {
    //   // console.log(res.error)
    //   setError(res)
    // }
    setLoading(false)
  }

  async function getSolucion (id) {
    setLoading(true)
    // const res = await get(URI_BACKEND(`grupo/${id}`), token)
    // if (res.status === 200) {
    //   // console.log(res)
    //   setResponse(res.data)
    // } else {
    //   // console.log(res.error)
    //   setError(res)
    // }
    setLoading(false)
  }

  async function getAllSolucionesByProfesorUsername (username) {
    setLoading(true)
    // const res = await get(URI_BACKEND(`grupo/getAllByProfesorUsername/${username}`), token)
    // if (res.status === 200) {
    //   // console.log(res)
    //   setResponse(res.data)
    // } else {
    //   // console.log(res.error)
    //   setError(res)
    // }
    setLoading(false)
  }

  async function createSolucion (data) {
    setLoading(true)
    // const res = await post(URI_BACKEND('grupo'), data, token)
    // if (res.status === 200) {
    //   // console.log(res)
    //   // setResponse(res.data)
    //   if (rol === ROL_ADMIN) {
    //     getAllGrupos()
    //   } else if (rol === ROL_TEACHER) {
    //     getAllGruposByProfesorUsername(usernameSession)
    //   }
    //   handleCloseModalForm()
    // } else {
    //   // console.log(res)
    //   setError(res)
    // }
    setLoading(false)
  }

  async function updateSolucion (data) {
    setLoading(true)
    // const res = await patch(URI_BACKEND('grupo'), data, token)
    // if (res.status === 200) {
    //   // console.log(res)
    //   // setResponse(res.data)
    //   handleCloseModalForm()
    // } else {
    //   // console.log(res)
    //   setError(res)
    // }
    setLoading(false)
  }

  async function deleteSolucion (id) {
    setLoading(true)
    // const res = await del(URI_BACKEND(`grupo/${id}`), token)
    // if (res.status === 200) {
    //   // console.log(res)
    //   setResponse(res.data)
    // } else {
    //   // console.log(res.error)
    //   setError(res)
    // }
    setLoading(false)
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
    getAllSolucionesByProfesorUsername,
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
