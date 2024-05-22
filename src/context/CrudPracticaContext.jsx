import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import { URI_BACKEND } from '../utils/environments'
import Swal from 'sweetalert2'

const CrudPracticaContext = createContext()

const initialForm = {
  id: null,
  usernameProfesor: null,
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
    const res = await get(URI_BACKEND('practica/getAll'), token)
    if (res.status === 200) {
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }

    setLoading(false)
  }

  async function getPractica (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`practica/${id}`), token)
    if (res.status === 200) {
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllPracticasByProfesorUsername (username) {
    setLoading(true)
    const res = await get(URI_BACKEND(`practica/getAllByProfesorUsername/${username}`), token)
    if (res.status === 200) {
      setResponse(res.data)
      console.log(res.data)
    } else {
      console.log(res.error)
      setError(res)
    }
    setLoading(false)
    // return res
  }

  async function createPractica (data) {
    setLoading(true)
    const res = await post(URI_BACKEND('practica'), data, token)

    try {
      if (res.status === 200) {
        setResponse(res.data)
        Swal.fire({
          title: '¡Practica creada!',
          text: 'Se creo la practica. ',
          icon: 'success'
        })
        handleCloseModalPracticaForm()
        // llamada a los all
      } else {
        setError(res)
        Swal.fire({
          title: 'Error al crear la practica',
          text: `Error: ${res.statusText} (${res.status})`,
          icon: 'error'
        })
      }
    } catch (err) {
      Swal.fire({
        title: 'Error al crear la practica',
        text: `Error: ${err} (${err})`,
        icon: 'error'
      })
    }
    setLoading(false)
    // return res
  }

  async function updatePractica (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('practica'), data, token)
    try {
      if (res.status === 200) {
        setResponse(res.data)
        Swal.fire({
          title: '¡Practica actualizada!',
          text: 'Se actualizo la practica. ',
          icon: 'success'
        })
        handleCloseModalPracticaForm()
      } else {
        setError(res)
        Swal.fire({
          title: 'Error al actualizar la practica',
          text: `Error: ${res.statusText} (${res.status})`,
          icon: 'error'
        })
      }
    } catch (err) {
      Swal.fire({
        title: 'Error al actualizar la practica',
        text: `Error: ${err} (${err})`,
        icon: 'error'
      })
    }
    setLoading(false)
    // return res
  }

  async function deletePractica (id) {
    setLoading(true)
    setError(null)
    try {
      const result = await Swal.fire({
        title: '¿Esta seguro que desea esta practica',
        text: 'Esta decisión es irreversible y eliminara las soluciones hechas por sus alumnos.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Eliminar!'
      })

      if (result.isConfirmed) {
        const res = await del(URI_BACKEND(`practica/${id}`), token)
        console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Eliminar!',
            text: 'La practica a sido eliminado ',
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
        // llamada a los all
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
    loading,
    response,
    error,

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