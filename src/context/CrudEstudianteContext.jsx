import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import Swal from 'sweetalert2'

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
      // setResponse(res.data)
      reset(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllEstudiantes () {
    setLoading(true)
    const res = await get(URI_BACKEND('estudiante/getAll'), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllEstudiantesByGroupId (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`estudiante/getAllByGroupId/${id}`), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function updateEstudiante (data) {
    setLoading(true)
    setError(null)
    try {
      const result = await Swal.fire({
        title: '¿Esta seguro de actualizar los datos?',
        text: 'Esta decisión es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Actualizar!'
      })

      if (result.isConfirmed) {
        const res = await patch(URI_BACKEND('estudiante'), data, token)
        console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Guardado!',
            text: ' Cierre session y vuelva entrar para que los cambios sean reflejados. ',
            icon: 'success'
          })
        } else {
          Swal.fire({
            title: 'Error al actualizar',
            text: `Error: ${res.statusText} (${res.status})`,
            icon: 'error'
          })
          setError(res)
        }
      }
    } catch (err) {
      Swal.fire({
        title: 'Error al actualizar, intentelo mas tarde',
        text: `Error: ${err}`,
        icon: 'error'
      })
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  async function deleteEstudiante (username) {
    setLoading(true)
    setError(null)
    try {
      const result = await Swal.fire({
        title: `¿Esta seguro que desea eliminar al estudiante ${username}?`,
        text: 'Esta decisión es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Eliminar!'
      })

      if (result.isConfirmed) {
        const res = await del(URI_BACKEND(`estudiante/${username}`), token)
        console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Eliminar!',
            text: `El estudiante ${username} A sido Eliminado `,
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
        await getAllEstudiantes()
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

    getEstudiante,
    getAllEstudiantes,
    getAllEstudiantesByGroupId,
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
