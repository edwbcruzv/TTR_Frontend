import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import Swal from 'sweetalert2'

const CrudInscripcionContext = createContext()

// const initialForm = {
//   grupoId: null,
//   estudianteUsername: null,
//   calificacion: null,
//   codigo: null
// }

function CrudInscripcionProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)
  const initialForm = {
    grupoId: null,
    estudianteUsername: usernameSession,
    calificacion: null,
    codigo: null
  }
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
  } = useForm({
    defaultValues: {
      grupoId: null,
      estudianteUsername: usernameSession,
      calificacion: null,
      codigo: null
    }
  }) // inicializar un formulario

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
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res)
    }
  }

  async function getAllInscripcionesByGrupoId (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`inscripcion/getAllByGrupoId/${id}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res)
    }
  }

  async function getAllInscripcionesByEstudianteUsername (username) {
    setLoading(true)
    const res = await get(URI_BACKEND(`inscripcion/getAllByEstudianteUsername/${username}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      setError(res)
      setLoading(false)
    }
  }

  async function createInscripcion (data) {
    setLoading(true)
    const res = await post(URI_BACKEND('inscripcion'), data, token)
    if (res.status === 200) {
      setLoading(false)
      Swal.fire({

        icon: 'success',
        title: 'Te has unido al grupo correctamente',
        showConfirmButton: false,
        timer: 2000
      })
      getAllInscripcionesByEstudianteUsername(usernameSession)
      // console.log(res.data)
      // setResponse(res.data)
    } else {
      Swal.fire({
        title: 'Error al unirte',
        text: 'Verifica el codigo de acceso con tu profesor.',
        icon: 'error'
      })
      // console.log(res.error)
      setLoading(false)
      setError(res)
    }
  }

  async function updateInscripcion (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('inscripcion'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res)
    }
  }

  async function deleteInscripcion (grupoId, username, nombre) {
    setLoading(true)

    setError(null)
    try {
      const result = await Swal.fire({
        title: `¿Esta seguro que desea eliminar del grupo a ${nombre}?`,
        text: 'Esta decisión es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Eliminar!'
      })

      if (result.isConfirmed) {
        const res = await del(URI_BACKEND(`inscripcion/grupo/${grupoId}/estudiante/${username}`), token)
        console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Eliminar!',
            text: `El estudiante ${nombre} a sido eliminado del grupo `,
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
        // await getAllInscripcionesByEstudianteUsername(username)
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

    getInscripcion,
    getAllInscripcionesByGrupoId,
    getAllInscripcionesByEstudianteUsername,
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
