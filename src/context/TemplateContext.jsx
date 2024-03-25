import { createContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import useAuth from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { URI_BACKEND } from '../utils/urls'
import { ROL_ADMIN, ROL_TEACHER } from '../utils/jwt_data'

const CrudCaseContext = createContext()

const initialForm = {
  id: null,
  profesor_id: null,
  titulo: ''
}

function CrudCaseProvider ({ children }) {
  const { token, rol, id } = useAuth()

  /**
   * formulario
   */
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const { register, handleSubmit, watch, reset, setValue, getValues, formState: { errors } } = useForm({ defaultValues: initialForm })

  const { get, post, put, patch, del } = helperAXIOS()

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
   * Modal2
   */
  const [openModalView, setOpenModalView] = useState(false)
  const handleOpenModalView = () => {
    setOpenModalView(true)
  }
  const handleCloseModalView = () => {
    console.log('cerrando')
    setOpenModalView(false)
    reset(initialForm)
  }

  /**
   * Peticioens a la API
   */
  async function viewDataEdit (id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await get(URI_BACKEND(`caso-estudio/${id}`), token)
      // console.log(URI_BACKEND(`${url}/${id}`),token)
      if (res.status === 200) {
        reset(res.data)
        // console.log(res.data)
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
    // console.log(data)
    const res = await post(URI_BACKEND('caso-estudio'), data, token)
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
    // window.location.reload();
  }

  async function updateData (data) {
    setLoading(true)
    const res = await patch(URI_BACKEND('caso-estudio'), data, token)
    // console.log(res)
    // console.log(data,token)
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
    // window.location.reload();
  }

  async function deleteData (id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await del(URI_BACKEND(`caso-estudio/${id}`), token)
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
    window.location.reload()
  }

  const values = {
    response,
    error,
    loading,
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
    handleCloseModalView
  }
  return (
    <CrudCaseContext.Provider value={values}>
      {children}
    </CrudCaseContext.Provider>

  )
}

export { CrudCaseProvider }
export default CrudCaseContext
