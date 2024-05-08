import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'

const CrudPracticaContext = createContext()

const initialForm = {
  id: null,
  titulo: null,
  descripcion: null,
  recursosMultimedia: [],
  comentarios: null,
  rubrica: null
}

function CrudPracticaProvider ({ children }) {
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
  const [openModalPracticaForm, setOpenModalPracticaForm] = useState(false)
  const handleOpenModalPracticaForm = () => {
    setOpenModalPracticaForm(true)
  }
  const handleCloseModalPracticaForm = () => {
    console.log('cerrando')
    setOpenModalPracticaForm(false)
    reset(initialForm)
  }

  /**
    * ModalView
    */
  const [openModalPracticaView, setOpenModalPracticaView] = useState(false)
  const handleOpenModalPracticaView = () => {
    setOpenModalPracticaView(true)
  }
  const handleCloseModalPracticaView = () => {
    console.log('cerrando')
    setOpenModalPracticaView(false)
  }

  /**
   * Peticiones a la API
   */

  async function getAllPracticas () {
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

  async function getPractica (id) {
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

  async function getAllPracticasByProfesorUsername (username) {
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

  async function createPractica (data) {
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

  async function updatePractica (data) {
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

  async function deletePractica (id) {
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

    openModalPracticaForm,
    handleOpenModalPracticaForm,
    handleCloseModalPracticaForm,

    openModalPracticaView,
    handleOpenModalPracticaView,
    handleCloseModalPracticaView,

    getAllPracticas,
    getPractica,
    getAllPracticasByProfesorUsername,
    createPractica,
    updatePractica,
    deletePractica
  }
  return (
    <CrudPracticaContext.Provider value={data}>
      {children}
    </CrudPracticaContext.Provider>

  )
}

export { CrudPracticaProvider }
export default CrudPracticaContext
