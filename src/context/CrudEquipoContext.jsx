import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { URI_BACKEND } from '../utils/environments'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import Swal from 'sweetalert2'

const CrudEquipoContext = createContext()

const initialForm = {
  id: null,
  nombre: null,
  grupoId: null,
  estudiantesUsernames: [
  ],
  solucionesIds: [
  ]
}

function CrudEquipoProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

  /**
   * formulario
   */
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [left, setLeft] = useState([])
  const [right, setRight] = useState([])
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

  async function getEquipo (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`equipo/${id}`), token)
    if (res.status === 200) {
      console.log(res.data)
      const estudiantesUsernames = { estudiantes_ids: res.data.estudiantesUsernames }
      const estudiantes = await post(URI_BACKEND('estudiante/getByUsernames'), estudiantesUsernames, token)
      const left = estudiantes.map((elem) => ({ nombre: `${elem.nombre} ${elem.apellidoPaterno} ${elem.apellidoMaterno}`, username: elem.username }))
      setLoading(false)
      setLeft(left)
      // console.log(res.data)
      // setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function getAllEquipoByGrupoId (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`equipo/getAllByGrupoId/${id}`), token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function setRightEstudiantesNotTeamByGroupId (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`estudiante/getAllByGroupId/${id}/NotTeam`), token)
    if (res.status === 200) {
      const right = res.data.map((elem) => ({ nombre: `${elem.nombre} ${elem.apellidoPaterno} ${elem.apellidoMaterno}`, username: elem.username }))
      setLoading(false)
      setRight(right)
    } else {
      console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function createEquipo (data) {
    setLoading(true)
    console.log(data)
    const res = await post(URI_BACKEND('equipo'), data, token)
    if (res.status === 200) {
      setLoading(false)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Equipo creado correctamente',
        showConfirmButton: false,
        timer: 2000
      })
      // console.log(res.data)
      // setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      Swal.fire({
        title: 'Error al crear equipo',
        text: 'Verificar',
        icon: 'error'
      })
      setError(res)
    }
  }

  async function updateEquipo (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('equipo'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res.data)
      setResponse(res.data)
    } else {
      // console.log(res.error)
      setLoading(false)
      setError(res.error)
    }
  }

  async function deleteEquipo (id) {
    setLoading(true)
    setError(null)
    try {
      const result = await Swal.fire({
        title: '¿Esta seguro que desea eliminar a este equipo?',
        text: 'Esta decisión es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,¡Eliminar!'
      })

      if (result.isConfirmed) {
        const res = await del(URI_BACKEND(`equipo/${id}`), token)
        console.log(res)
        if (!res.err) {
          Swal.fire({
            title: '¡Eliminar!',
            text: 'El equipo a sido Eliminado ',
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
        // await getAllEquipoByGrupoId(data.grupoId)
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

    left,
    setLeft,
    right,
    setRight,

    getEquipo,
    getAllEquipoByGrupoId,
    setRightEstudiantesNotTeamByGroupId,
    createEquipo,
    updateEquipo,
    deleteEquipo
  }
  return (
    <CrudEquipoContext.Provider value={data}>
      {children}
    </CrudEquipoContext.Provider>

  )
}

export { CrudEquipoProvider }
export default CrudEquipoContext
