import { createContext, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import useAuth from '../hooks/useAuth'
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from '../utils/jwt_data'
import { URI_BACKEND } from '../utils/urls'

const CrudUserContext = createContext()

const initialForm = {
  username: '',
  email: '',
  password: '',
  nombre: '',
  apellido_materno: '',
  apellido_paterno: ''
}

function CrudUserProvider ({ children }) {
  const { token, rol } = useAuth()

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

  async function get(url, id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await get(URI_BACKEND(`${url}/${id}`), token)
      // console.log(URI_BACKEND(`${url}/${id}`),token)
      if (res.status === 200) {
        setDataToEdit(res.data)
        handleOpenModal()
      } else {
        console.log(res.error)
        setError(res.error)
      }
    }
    setLoading(false)
  }

  async function create(data) {
    setLoading(true)
    let res
    if (data.rol === ROL_ADMIN) {
      res = await post(URI_BACKEND('auth/register-admin'), data, token)
    } else {
      res = await post(URI_BACKEND('auth/register'), data, token)
    }
    if (res.status === 200) {
      setLoading(false)
      console.log(res)
      setResponse(res)
    } else {
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
    handleCloseModal()
    window.location.reload()
  }

  async function update (url, data) {
    setLoading(true)
    const res = await patch(URI_BACKEND(url), data, token)
    // console.log(res)
    console.log(url, data, token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
    } else {
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
    handleCloseModal()
    window.location.reload()
  }

  async function delete (url, id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await del(URI_BACKEND(`${url}/${id}`), token)
      console.log(id)
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

  const data = {
    response,
    error,
    loading,
    viewDataEdit,
    createData,
    dataToEdit,
    setDataToEdit,
    updateData,
    deleteData,
    openModalForm,
    handleOpenModal,
    handleCloseModal
  }
  return (
    <CrudUserContext.Provider value={data}>
      {children}
    </CrudUserContext.Provider>

  )
}

export { CrudUserProvider }
export default CrudUserContext
