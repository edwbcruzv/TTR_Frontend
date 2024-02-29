import { createContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import useAuth from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { URI_BACKEND } from '../utils/urls'
import { ROL_ADMIN, ROL_TEACHER } from '../utils/jwt_data'

const CrudTeamContext = createContext()

const initialForm = {
  id: null,
  nombre: '',
  grupo_id: 0,
  estudiantes_ids: [],
  casos_estudio_ids: []
}

function CrudTeamProvider ({ children }) {
  const { token, rol, id } = useAuth()
  initialForm.profesor_id = id
  const { register, handleSubmit, watch, reset, setValue, getValues, formState: { errors } } = useForm({ defaultValues: initialForm })
  const [renderizar, setRenderizar] = useState(true)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [left, setLeft] = useState([])
  const [right, setRight] = useState([])

  const { get, post, put, patch, del } = helperAXIOS()

  const [openModalForm, setOpenModalForm] = useState(false)
  const handleOpenModalForm = () => {
    setOpenModalForm(true)
  }
  const handleCloseModalForm = () => {
    console.log('cerrando')
    setOpenModalForm(false)
    reset(initialForm)
    // window.location.reload();
  }

  const [openModalView, setOpenModalView] = useState(false)
  const handleOpenModalView = () => {
    setOpenModalView(true)
  }
  const handleCloseModalView = () => {
    console.log('cerrando')
    setOpenModalView(false)
    reset(initialForm)
    setRenderizar(!renderizar)
  }

  async function viewDataEdit (id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await get(URI_BACKEND(`equipo/${id}`), token)
      if (res.status === 200) {
        const data = { estudiantes_ids: res.data.estudiantes_ids }
        console.log(data)
        const res2 = await post(URI_BACKEND('estudiante/getEstudiantesByIds'), data, token)
        console.log(res2)
        const list_aux2 = res2.data.map((elem) => ({ nombre: `${elem.nombre} ${elem.apellido_paterno} ${elem.apellido_materno}`, id: elem.id }))
        setLeft(list_aux2)

        // let res3 = await get(URI_BACKEND(`casos-estudio/getAllByProfesorId`),token)
        // let list_aux3 = res3.data.map((elem)=>({name:elem.titulo ,id:elem.id}))
        // setLeft(list_aux3|| [])

        reset(res.data)
        handleOpenModalForm()
      } else {
        console.log(res.error)
        setError(res.error)
      }
    }
    setLoading(false)
  }

  async function createData (data) {
    setLoading(true)
    console.log(data)
    const res = await post(URI_BACKEND('equipo'), data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
      handleCloseModalForm()
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
    setRenderizar(!renderizar)
    window.location.reload()
  }

  async function updateData (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('equipo'), data, token)
    // console.log(res)
    console.log(data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
      handleCloseModalForm()
    } else {
      console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
    setRenderizar(!renderizar)
    window.location.reload()
  }

  async function deleteData (id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await del(URI_BACKEND(`equipo/${id}`), token)
      // console.log(id)
      if (res.status === 200) {
        setLoading(false)
        // console.log(res)
        setResponse(res)
      } else {
        // console.log(res.error)
        setError(res.error)
      }
    }
    setLoading(false)
    setRenderizar(!renderizar)
    window.location.reload()
  }

  const data = {
    response,
    error,
    loading,
    renderizar,
    setRenderizar,
    viewDataEdit,
    createData,
    updateData,
    deleteData,
    register,
    handleSubmit,
    watch,
    errors,
    setValue,
    getValues,
    openModalForm,
    handleOpenModalForm,
    handleCloseModalForm,
    openModalView,
    handleOpenModalView,
    handleCloseModalView,
    left,
    setLeft,
    right,
    setRight
  }

  return (
    <CrudTeamContext.Provider value={data}>
      {children}
    </CrudTeamContext.Provider>

  )
}

export { CrudTeamProvider }
export default CrudTeamContext
