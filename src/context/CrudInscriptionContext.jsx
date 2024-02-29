import { createContext, useEffect, useState } from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'
import useAuth from '../hooks/useAuth'
import { useForm } from 'react-hook-form'
import { URI_BACKEND } from '../utils/urls'
import { ROL_ADMIN, ROL_TEACHER } from '../utils/jwt_data'

const CrudInscriptionContext = createContext()

const initialForm = {
  estudiante_id: 0,
  clave_grupo: ''
}

function CrudInscriptionProvider ({ children }) {
  const { token, rol, id } = useAuth()
  initialForm.estudiante_id = id
  const { register, handleSubmit, watch, reset, setValue, getValues, formState: { errors } } = useForm({ defaultValues: initialForm })

  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const { get, post, put, patch, del } = helperAXIOS()

  const [openModalForm, setOpenModalForm] = useState(false)
  const handleOpenModalForm = () => {
    setOpenModalForm(true)
  }
  const handleCloseModalForm = () => {
    console.log('cerrando')
    setOpenModalForm(false)
    reset(initialForm)
    window.location.reload()
  }

  const [openModalView, setOpenModalView] = useState(false)
  const handleOpenModalView = () => {
    setOpenModalView(true)
  }
  const handleCloseModalView = () => {
    console.log('cerrando')
    setOpenModalView(false)
    reset(initialForm)
  }

  async function viewDataEdit (id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await get(URI_BACKEND(`equipo/${id}`), token)
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
    console.log(data)
    const res = await post(URI_BACKEND('inscripcion'), data, token)
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
  }

  // no hay actualizacion en inscripcion
  async function updateData (data) {
    //   setLoading(true)
    //   let res = await patch(URI_BACKEND('inscripcion'),data,token)
    //   // console.log(res)
    //   console.log(data,token)
    //   if (res.status === 200) {
    //     setLoading(false)
    //     // console.log(res)
    //     setResponse(res)
    //     handleCloseModalForm()
    //   }else{
    //     console.log(res.error)
    //     setError(res.error)
    //   }
    //   setLoading(false)
  }

  async function deleteData (id) {
    setLoading(true)
    if (token && (rol === ROL_ADMIN || rol === ROL_TEACHER) && id) {
      const res = await del(URI_BACKEND(`inscripcion/${id}`), token)
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

  const data = {
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
    <CrudInscriptionContext.Provider value={data}>
      {children}
    </CrudInscriptionContext.Provider>

  )
}

export { CrudInscriptionProvider }
export default CrudInscriptionContext
