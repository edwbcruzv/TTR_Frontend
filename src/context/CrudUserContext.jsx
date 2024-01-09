import { createContext, useEffect, useState } from "react";
import { helperAXIOS } from "../helpers/helperAXIOS";
import useAuth from "../hooks/useAuth";
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from "../utils/jwt_data";
import { URI_BACKEND } from "../utils/urls";

const CrudUserContext=createContext()

const initialForm={
  "id":null,
  "username": "",
  "email": "",
  "password": "",
  "nombre": "",
  "apellido_materno": "",
  "apellido_paterno": ""
}

function CrudUserProvider({children}) {
    const {token,rol} = useAuth()
    const [dataToEdit, setDataToEdit] = useState(initialForm)
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
        setDataToEdit(initialForm)
    };

  async function viewDataEdit(url,id) {
    setLoading(true)
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      const res = await get(URI_BACKEND(`${url}/${id}`),token)
      // console.log(URI_BACKEND(`${url}/${id}`),token)
      if (res.status === 200) {
        setDataToEdit(res.data)
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
    let res
    if (data.rol===ROL_ADMIN){
      res = await post(URI_BACKEND('auth/register-admin'),data,token)
    }else{
      res = await post(URI_BACKEND('auth/register'),data,token)
    }
    if (res.status === 200) {
      setLoading(false)
      console.log(res)
      setResponse(res)
    }else{
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
    handleCloseModal()
  }

  async function updateData(url,data) {
    setLoading(true)
    let res = await patch(URI_BACKEND(url),data,token)
    // console.log(res)
    console.log(url,data,token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
    }else{
      // console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
    handleCloseModal()
  }

  async function deleteData(url,id) {
    setLoading(true)
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      let res = await del(URI_BACKEND(`${url}/${id}`),token)
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
  }

    const data={response,error,loading,
      viewDataEdit,createData,dataToEdit,setDataToEdit,updateData,deleteData,
      openModalForm,handleOpenModal,handleCloseModal}
    return(
        <CrudUserContext.Provider value={data}>
            {children}
        </CrudUserContext.Provider>

    )
}

export {CrudUserProvider}
export default CrudUserContext