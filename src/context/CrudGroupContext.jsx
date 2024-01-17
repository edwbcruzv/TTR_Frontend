import { createContext, useEffect, useState } from "react";
import { helperAXIOS } from "../helpers/helperAXIOS";
import { URI_BACKEND } from "../utils/urls";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";

const CrudGroupContext=createContext()

const initialForm={
  id:null,
  nombre_grupo:"",
  nombre_materia:"",
  profesor_id:0,
  equipos_ids:[],
  inscripciones_ids:[]
}

function CrudGroupProvider({children}) {

  const {token,rol,id} = useAuth()
  const {register,handleSubmit,watch,reset,setValue,getValues,formState: { errors }} = useForm({defaultValues:initialForm})
    
    const [error, setError] = useState(null)
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)

    const {get,post,put,patch,del} = helperAXIOS()

    const [openModalForm, setOpenModalForm] = useState(false);
    const handleOpenModal = () => {
        setOpenModalForm(true);
    };
    const handleCloseModal = () => {
        console.log("cerrando")
        setOpenModalForm(false);
        reset(initialForm)
        window.location.reload();
    };

  async function viewDataEdit(id) {
    setLoading(true)
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      let res = await get(URI_BACKEND(`grupo/${id}`),token)
      // console.log(URI_BACKEND(`${url}/${id}`),token)
      if (res.status === 200) {
        reset(res.data)
        handleOpenModal()
      }else{
        console.log(res.error)
        setError(res.error)
      }
    }
    setLoading(false)
  }

  async function createData(data) {
    setLoading(true)
    console.log(data)
    let res = await post(URI_BACKEND('grupo'),data,token)
    if (res.status === 200) {
      setLoading(false)
      console.log(res)
      setResponse(res)
      handleCloseModal()
    }else{
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
  }

  async function updateData(url,data) {
    setLoading(true)
    let res = await patch(URI_BACKEND('grupo'),data,token)
    // console.log(res)
    console.log(url,data,token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
      handleCloseModal()
    }else{
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function deleteData(url,id) {
    setLoading(true)
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      let res = await del(URI_BACKEND(`grupo/${id}`),token)
      console.log(id)
      if (res.status === 200) {
        setLoading(false)
        // console.log(res)
        setResponse(res)
      }else{
        // console.log(res.error)
        setError(res.error)
      }
    }
    setLoading(false)
    window.location.reload();
  }

    const data={response,error,loading,
      viewDataEdit,createData,
      updateData,deleteData,
      register,handleSubmit,watch,errors,reset,setValue,getValues,
      openModalForm,handleOpenModal,handleCloseModal}
    return(
        <CrudGroupContext.Provider value={data}>
            {children}
        </CrudGroupContext.Provider>

    )
}

export {CrudGroupProvider}
export default CrudGroupContext