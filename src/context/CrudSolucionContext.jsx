import { createContext, useContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import { useForm } from 'react-hook-form'
import SessionContext from './SessionContext'
import { URI_BACKEND } from '../utils/environments'
import Swal from 'sweetalert2'
import { DataConst } from './DataProvide'

const CrudSolucionContext = createContext()

const initialForm = {
  id: null,
  practicaId: null,
  strHtml: null,
  strCss: null,
  strJs: null,
  conclusion: null,
  estudianteUsername: null,
  equipoId: null,
  fechaUltimaEdicion: null,
  fechaLimiteEntrega: null,
  rubricaCalificada: null,
  calificacion: null
}

function CrudSolucionProvider ({ children }) {
  const { token, rol, usernameSession, nombreSession, email, isValidSession, validatingSession, deleteSession } = useContext(SessionContext)

  /**
   * formulario
   */
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [responseAll, setResponseAll] = useState(null)
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
  const [openModalSolucionForm, setOpenModalSolucionForm] = useState(false)
  const handleOpenModalSolucionForm = () => {
    setOpenModalSolucionForm(true)
  }
  const handleCloseModalSolucionForm = () => {
    // console.log('cerrando')
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
    // console.log('cerrando')
    setOpenModalSolucionView(false)
  }

  /**
   * Peticiones a la API
   */

  async function getAllSoluciones () {
    setLoading(true)
    setResponseAll(null)
    const res = await get(URI_BACKEND('solucion/getAll'), token)
    setLoading(false)
    if (res.status === 200) {
      setResponseAll(res.data)
    } else {
      // console.log(res.error)
      setError(res)
    }
  }

  async function getSolucion (id) {
    setLoading(true)
    const res = await get(URI_BACKEND(`solucion/${id}`), token)
    if (res.status === 200) {
      reset(res.data)

      // console.log(res.data)
      setResponse(res.data)
      // handleOpenModalPracticaForm()
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllSolucionesByEquipoId (equipoId) {
    setLoading(true)
    setResponseAll(null)
    const res = await get(URI_BACKEND(`solucion/getAllByEquipoId/${equipoId}`), token)
    if (res.status === 200) {
      // console.log(res.data)
      setResponseAll(res.data)
      // handleOpenModalPracticaForm()
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllSolucionesByEstudianteUsername (username) {
    setLoading(true)
    setResponseAll(null)
    const res = await get(URI_BACKEND(`solucion/getAllByEstudianteUsername/${username}`), token)
    if (res.status === 200) {
      // console.log(res.data)
      setResponseAll(res.data)
      // handleOpenModalPracticaForm()
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllSolucionesByProfesorUsernameAndGrupoIdByEquipos (profesorUsername, grupoId) {
    setLoading(true)
    setResponseAll(null)
    const res = await get(URI_BACKEND(`solucion/getAllByProfesorUsernameAndGrupoIdByEquipos/${profesorUsername}/${grupoId}"`), token)
    if (res.status === 200) {
      // console.log(res.data)
      setResponseAll(res.data)
      // handleOpenModalPracticaForm()
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function getAllSolucionesByProfesorUsernameAndGrupoIdByIndividual (profesorUsername, grupoId) {
    setLoading(true)
    setResponseAll(null)
    const res = await get(URI_BACKEND(`solucion/getAllByProfesorUsernameAndGrupoIdByIndividual/${profesorUsername}/${grupoId}"`), token)
    if (res.status === 200) {
      reset(res.data)
      // console.log(res.data)
      // handleOpenModalPracticaForm()
    } else {
      // console.log(res.error)
      setError(res)
    }
    setLoading(false)
  }

  async function createSolucion (data) {
    setLoading(true)
    // const res = await post(URI_BACKEND('solucion'), data, token)
    // CANCELADO
    setLoading(false)
  }

  async function updateSolucion (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('solucion'), data, token)
    try {
      if (res.status === 200) {
        setResponse(res.data)
        Swal.fire({
          title: '¡Practica actualizada!',
          text: 'Se actualizo la practica. ',
          icon: 'success'
        })
        // handleCloseModalPracticaForm()
      } else {
        setError(res)
        Swal.fire({
          title: 'Error al actualizar la practica',
          text: `Error: ${res.statusText} (${res.status})`,
          icon: 'error'
        })
      }

      // if (rol === ROL_TEACHER) {
      //   getAllPracticasByProfesorUsername(usernameSession)
      // } else if (rol === ROL_ADMIN) {
      //   getAllPracticas()
      // }
    } catch (err) {
      Swal.fire({
        title: 'Error al actualizar la practica',
        text: `Error: ${err} (${err})`,
        icon: 'error'
      })
    }
    setLoading(false)
  }

  async function deleteSolucion (id) {
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
        const res = await del(URI_BACKEND(`solucion/${id}`), token)
        // console.log(res)
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
        // if (rol === ROL_TEACHER) {
        //   getAllPracticasByProfesorUsername(usernameSession)
        // } else if (rol === ROL_ADMIN) {
        //   getAllPracticas()
        // }
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
    responseAll,
    error,

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
    getAllSolucionesByEquipoId,
    getAllSolucionesByEstudianteUsername,
    getAllSolucionesByProfesorUsernameAndGrupoIdByEquipos,
    getAllSolucionesByProfesorUsernameAndGrupoIdByIndividual,
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
