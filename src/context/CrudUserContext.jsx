import { createContext, useEffect, useState } from "react";
import { helperAXIOS } from "../helpers/helperAXIOS";
import useAuth from "../hooks/useAuth";
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from "../utils/jwt_data";
import { URI_BACKEND } from "../utils/urls";

const CrudUserContext=createContext()


function CrudUserProvider({children}) {
    const {token,rol} = useAuth()
    const [dataToEdit, setDataToEdit] = useState({
        "id":null,
        "username": "",
        "email": "",
        "password": "",
        "nombre": "",
        "apellido_materno": "",
        "apellido_paterno": ""
      })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const {get,post,put,patch,del} = helperAXIOS()

    const [openModalForm, setOpenModalForm] = useState(false);
    const handleOpenModal = () => {
        setOpenModalForm(true);
    };
    const handleCloseModal = () => {
        console.log("cerrando")
        setOpenModalForm(false);
        setDataToEdit({
            "id":null,
            "username": "",
            "email": "",
            "password": "",
            "nombre": "",
            "apellido_materno": "",
            "apellido_paterno": ""
          })
    };

  async function viewDataEdit(url,id) {
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      const res = await get(URI_BACKEND(`${url}/${id}`),token)
      // console.log(URI_BACKEND(`${url}/${id}`),token)
      if (res.status === 200) {
        setDataToEdit(res.data)
        handleOpenModal()
      }else{
        console.log(res.error)
      }
    }
  }

  async function createData(url,data) {
    res = await post(URI_BACKEND(url),data,token)
    if (res.status === 200) {
      console.log(res)
    }else{
      console.log(res.error)
    }
  }

  async function updateData(url,data) {
    res = await patch(URI_BACKEND(url),data,token)
    // console.log(res)
    console.log(url,data,token)
    if (res.status === 200) {
      console.log(res)
    }else{
      console.log(res.error)
    }
  }

  async function deleteData(url,id) {
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      res = await del(URI_BACKEND(`${url}/${id}`),token)
      console.log(id)
      if (res.status === 200) {
      console.log(res)
      }else{
        console.log(res.error)
      }
    }
  }

    const data={error,loading,viewDataEdit,createData,dataToEdit,setDataToEdit,updateData,deleteData,openModalForm,handleOpenModal,handleCloseModal}
    return(
        <CrudUserContext.Provider value={data}>
            {children}
        </CrudUserContext.Provider>

    )
}

export {CrudUserProvider}
export default CrudUserContext