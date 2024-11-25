import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { ROL_ADMIN, ROL_TEACHER, URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import Swal from 'sweetalert2'

const CrudGrupoContext = createContext()

const initialForm = {
  id: null,
  clave: null,
  nombre: null,
  profesorUsername: null
}

function CrudGrupoProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

  /**
   * formulario
   */
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
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
    * Modal1
    */
  const [openModalForm, setOpenModalForm] = useState(false)
  const handleOpenModalForm = () => {
    setOpenModalForm(true)
  }
  const handleCloseModalForm = () => {
    // console.log('cerrando')
    setOpenModalForm(false)
    reset(initialForm)
  }

  /**
   * Peticiones a la API
   */

  async function getAllGrupos () {
    setLoading(true)
    const res = await get(URI_BACKEND('grupo/getAll'), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getGrupo (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`grupo/${id}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllGruposByProfesorUsername (username) {
    setLoading(true)
    const res = await get(URI_BACKEND(`grupo/getAllByProfesorUsername/${username}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function createGrupo (data) {
    setLoading(true)
    const res = await post(URI_BACKEND('grupo'), data, token)
    if (res.status === 200) {
      // console.log(res)
      // setResponse(res.data)
      if (rol === ROL_ADMIN) {
        getAllGrupos()
      } else if (rol === ROL_TEACHER) {
        getAllGruposByProfesorUsername(usernameSession)
      }
      handleCloseModalForm()
    } else {
      // console.log(res)
      setError(res)
    }
    setLoading(false)
  }

  async function updateGrupo (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('grupo'), data, token)
    if (res.status === 200) {
      // console.log(res)
      // setResponse(res.data)
      handleCloseModalForm()
    } else {
      // console.log(res)
      setError(res)
    }
    setLoading(false)
  }

  async function deleteGrupo (id) {
    setLoading(true)
    setError(null)
    try {
      const result = await Swal.fire({
        title: '¿Esta seguro que desea eliminar a este grupo?',
        text: 'Esta decisión es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Eliminar!'
      })

      if (result.isConfirmed) {
        const res = await del(URI_BACKEND(`grupo/${id}`), token)
        // console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Eliminar!',
            text: 'El grupo a sido Eliminado ',
            icon: 'success'
          })
        } else {
          Swal.fire({
            title: 'Error al eliminar',
            text: `Error: ${res.statusText} (${res.status})`,
            icon: 'error'
          })
          setError(res)
        }

        if (rol === ROL_ADMIN) {
          await getAllGrupos()
        } else if (rol === ROL_TEACHER) {
          await getAllGruposByProfesorUsername(usernameSession)
        }
      }
    } catch (err) {
      Swal.fire({
        title: 'Error al eliminar, intentelo mas tarde',
        text: `Error: ${err}`,
        icon: 'error'
      })
      setError(err)
    } finally {
      setLoading(false)
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

    getAllGrupos,
    getGrupo,
    getAllGruposByProfesorUsername,
    createGrupo,
    updateGrupo,
    deleteGrupo
  }
  return (
    <CrudGrupoContext.Provider value={data}>
      {children}
    </CrudGrupoContext.Provider>

  )
}

export { CrudGrupoProvider }
export default CrudGrupoContext
