import { createContext, useEffect, useState } from "react";
import { helperAXIOS } from "../helpers/helperAXIOS";

const CrudCaseContext=createContext()


function CrudCaseProvider({children}) {
    const [dataToEdit, setDataToEdit] = useState({
      Id:null,
      Resumen:"<p>resumen</p>",
      Objetivos:"<p>objetivos</p>",
      Clasificacion:"<p>clasificacion</p>",
      Lugar:"<p>lugar</p>",
      Temporalidad:"<p>temporalidad</p>",
      Protagonistas:"<p>protagonistas</p>",
      Organizacion:"<p>organizacion</p>",
      Preguntas:"<p>preguntas</p>",
      Riesgos:"<p>riesgos</p>",
      Resultados:"<p>resultados</p>",
      Anexos:"<p>anexos</p>"
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const {get,post,put,patch,del} = helperAXIOS()

  async function viewDataEdit(id) {
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

  async function createData(data) {
    res = await post(URI_BACKEND(url),data,token)
    if (res.status === 200) {
      console.log(res)
    }else{
      console.log(res.error)
    }
  }

  async function updateData(data) {
    res = await patch(URI_BACKEND(url),data,token)
    // console.log(res)
    console.log(url,data,token)
    if (res.status === 200) {
      console.log(res)
    }else{
      console.log(res.error)
    }
  }

  async function deleteData(id) {
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

    const data={error,loading,viewDataEdit,createData,dataToEdit,setDataToEdit,updateData,deleteData}
    return(
        <CrudCaseContext.Provider value={data}>
            {children}
        </CrudCaseContext.Provider>

    )
}

export {CrudCaseProvider}
export default CrudCaseContext