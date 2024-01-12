import { createContext, useEffect, useState } from "react";
import { helperAXIOS } from "../helpers/helperAXIOS";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { URI_BACKEND } from "../utils/urls";
import { ROL_ADMIN, ROL_TEACHER } from "../utils/jwt_data";

const CrudCaseContext=createContext()

// const initialForm={
//   id:null,
//   profesor_id:0,
//   titulo:"",
//   introduccion:"",
//   resumen:"<p>resumen</p>",
//   resumen_multimedia_list:[],
//   objetivos:"<p>objetivos</p>",
//   objetivos_multimedia_list:[],
//   clasificacion:"<p>clasificacion</p>",
//   clasificacion_multimedia_list:[],
//   lugar:"<p>lugar</p>",
//   lugar_multimedia_list:[],
//   temporalidades:"<p>temporalidad</p>",
//   temporalidades_multimedia_list:[],
//   protagonistas:"<p>protagonistas</p>",
//   protagonistas_multimedia_list:[],
//   organizaciones:"<p>organizacion</p>",
//   organizaciones_multimedia_list:[],
//   preguntas:"<p>preguntas</p>",
//   preguntas_multimedia_list:[],
//   riesgos:"<p>riesgos</p>",
//   riesgos_multimedia_list:[],
//   resultados:"<p>resultados</p>",
//   resultados_multimedia_list:[],
//   anexos:"<p>anexos</p>",
//   anexos_multimedia_list:[],
//   conclusion:"",
//   coimentarios:""
// }


const initialForm={
  id:null,
  profesor_id:null,
  titulo:"",
  introduccion:"",
  resumen:"",
  resumen_multimedia_list:[],
  objetivos:"",
  objetivos_multimedia_list:[],
  clasificacion:"",
  clasificacion_multimedia_list:[],
  lugar:"",
  lugar_multimedia_list:[],
  temporalidades:"",
  temporalidades_multimedia_list:[],
  protagonistas:"",
  protagonistas_multimedia_list:[],
  organizaciones:"",
  organizaciones_multimedia_list:[],
  preguntas:"",
  preguntas_multimedia_list:[],
  riesgos:"",
  riesgos_multimedia_list:[],
  resultados:"",
  resultados_multimedia_list:[],
  anexos:"",
  anexos_multimedia_list:[],
  conclusion:"",
  coimentarios:""
}

function CrudCaseProvider({children}){

  const {token,rol,id} = useAuth()
  initialForm.profesor_id=id
  const {register,handleSubmit,watch,reset,setValue,getValues,formState: { errors }} = useForm({defaultValues:initialForm})
    
    const [error, setError] = useState(null)
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(true)

    const {get,post,put,patch,del} = helperAXIOS()

    const [openModalForm, setOpenModalForm] = useState(false);
    const handleOpenModalForm = () => {
        setOpenModalForm(true);
    };
    const handleCloseModalForm = () => {
        console.log("cerrando")
        setOpenModalForm(false);
        reset(initialForm)
        window.location.reload();
    };

    const [openModalView, setOpenModalView] = useState(false);
    const handleOpenModalView = () => {
        setOpenModalView(true);
    };
    const handleCloseModalView = () => {
        console.log("cerrando")
        setOpenModalView(false);
        reset(initialForm)
    };
    
  async function viewDataEdit(id) {
    setLoading(true)
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      let res = await get(URI_BACKEND(`caso-estudio/${id}`),token)
      // console.log(URI_BACKEND(`${url}/${id}`),token)
      if (res.status === 200) {
        reset(res.data)
        // console.log(res.data)
        handleOpenModalForm()
      }else{
        console.log(res.error)
        setError(res.error)
      }
    }
    setLoading(false)
  }

  async function createData(data) {
    setLoading(true)
    // console.log(data)
    let res = await post(URI_BACKEND('caso-estudio'),data,token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
      handleCloseModalForm()
    }else{
      console.log(res)
      setError(res.error)
    }
    setLoading(false)
  }

  async function updateData(data) {
    setLoading(true)
    let res = await patch(URI_BACKEND('caso-estudio'),data,token)
    // console.log(res)
    // console.log(data,token)
    if (res.status === 200) {
      setLoading(false)
      // console.log(res)
      setResponse(res)
      handleCloseModalForm()
    }else{
      console.log(res.error)
      setError(res.error)
    }
    setLoading(false)
  }

  async function deleteData(id) {
    setLoading(true)
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && id) {
      let res = await del(URI_BACKEND(`caso-estudio/${id}`),token)
      // console.log(id)
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
      register,handleSubmit,watch,errors,setValue,getValues,
      openModalForm,handleOpenModalForm,handleCloseModalForm,
      openModalView,handleOpenModalView,handleCloseModalView}
    return(
        <CrudCaseContext.Provider value={data}>
            {children}
        </CrudCaseContext.Provider>

    )
}

export {CrudCaseProvider}
export default CrudCaseContext