import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { ROL_ADMIN, ROL_TEACHER } from '../../utils/jwt_data';
import { helperAXIOS } from '../../helpers/helperAXIOS';
import { useEffect } from 'react';
import FormUser from './FormUser';

const initialForm = {
  "username": "",
  "email": "",
  "password": "",
  "nombre": "",
  "apellido_materno": "",
  "apellido_paterno": ""
};

const CrudUser = ({url_src=null,id=null}) => {
  const {token,rol} = useAuth()
  const [url, setUrl] = useState(url_src)
  // Guarda los datos que se nos regrese la petision
  const [Data, setData] = useState(null)
  // Guarda el status de la peticion
  const [IsPending, setIsPending] = useState(null)
  // Guarda el error si existe uno
  const [Error, setError] = useState(null)

  const {get,post,put,patch,del} = helperAXIOS()
  const [dataToEdit, setDataToEdit] = useState(initialForm)

  let res = null

  useEffect(() => {
    console.log("montado del elem")
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER) && url && id) {
      res = get(`${url}/${id}`,token)
      // setDataToEdit(res)
      console.log(res)
    }
    

  }, [])

  async function createData(data) {
    res = await post(url,data,token)
    console.log(res)
  }

  async function updateData(data) {
    res = await patch(url,data,token)
    console.log(res)
  }

  async function deleteData(data) {
    if (token && (rol===ROL_ADMIN || rol===ROL_TEACHER)) {
      res = await del(`${url}/${data.id}`,token)
      console.log(res)
    }
  }

  

return (
  <FormUser 
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          url={url}
          setUrl={setUrl}
          />
  )
};

CrudUser.propTypes = {}

export default CrudUser