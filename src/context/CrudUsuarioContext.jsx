import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import Swal from 'sweetalert2'

const CrudUsuarioContext = createContext()

const initialForm = {
  username: '',
  email: '',
  password: '',
  nombre: '',
  apellidoPaterno: '',
  apellidoMaterno: '',
  fechaNacimiento: ''
}

function CrudUsuarioProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

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

  async function getUsuario (username) {
    setLoading(true)
    const res = await get(URI_BACKEND(`usuario/${username}`), token)
    if (res.status === 200) {
      // console.log(res)
      // setResponse(res.data)
      reset(res.data)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function getAllUsuarios () {
    setLoading(true)
    const res = await get(URI_BACKEND('usuario/getAll'), token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function updateUsuario (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('usuario'), data, token)
    if (res.status === 200) {
      // console.log(res)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function deleteUsuario (username) {
    setLoading(true)
    setError(null)
    try {
      const result = await Swal.fire({
        title: `¿Esta seguro que desea eliminar al usuario ${username}?`,
        text: 'Esta decisión es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Eliminar!'
      })

      if (result.isConfirmed) {
        const res = await del(URI_BACKEND(`usuario/${username}`), token)
        console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Eliminar!',
            text: `El usuario ${username} A sido Eliminado `,
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
        await getAllUsuarios()
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

    getUsuario,
    getAllUsuarios,
    updateUsuario,
    deleteUsuario
  }
  return (
    <CrudUsuarioContext.Provider value={data}>
      {children}
    </CrudUsuarioContext.Provider>

  )
}

export { CrudUsuarioProvider }
export default CrudUsuarioContext
