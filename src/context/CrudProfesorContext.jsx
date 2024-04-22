import { createContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import { useStepContext } from '@mui/material'
import SessionContext from './SessionContext'
import Swal from 'sweetalert2'

const CrudProfesorContext = createContext()

const initialForm = {
  username: '',
  email: '',
  password: '',
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  fechaNacimiento: '',
  cedula: ''
}

function CrudProfesorProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useStepContext(SessionContext)

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

  async function getProfesor (username) {
    setLoading(true)
    setError(null)
    const res = await get(URI_BACKEND(`profesor/${username}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function getAllProfesores () {
    setLoading(true)
    setError(null)
    const res = await get(URI_BACKEND('profesor/getAll'), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function updateProfesor (data) {
    setLoading(true)
    setError(null)
    const res = await patch(URI_BACKEND('profesor'), data, token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function deleteProfesor (username) {
    setLoading(true)
    setError(null)
    try {
      const result = await Swal.fire({
        title: `¿Esta seguro que desea eliminar al profesor ${username}?`,
        text: 'Esta decisión es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Eliminar!'
      })

      if (result.isConfirmed) {
        const res = await del(URI_BACKEND(`profesor/${username}`), token)
        console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Eliminar!',
            text: `El profesor ${username} A sido Eliminado `,
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
        await getAllProfesores()
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

    getProfesor,
    getAllProfesores,
    updateProfesor,
    deleteProfesor
  }
  return (
    <CrudProfesorContext.Provider value={data}>
      {children}
    </CrudProfesorContext.Provider>

  )
}

export { CrudProfesorProvider }
export default CrudProfesorContext
