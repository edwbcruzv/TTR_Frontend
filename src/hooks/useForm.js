import { useState } from 'react'
import { helperHTTP } from '../helpers/helperHTTP'

export default function useForm (initialForm, validateForm, endpointForm, timeResetForm, token = null) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [resBody, setResBody] = useState(null)

  // limpia el formulario
  const handleReset = (e) => {
    setForm(initialForm)
  }

  // esta funcion leera todos los cambios generales del formulario y lo actualizara
  function handleChange (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // cuando se pierde el foco de alguna entrada del fomulario este se va activar y evaluara todo el formulario
  function handleBlur (e) {
    handleChange(e) // actualiza el estado del form
    setErrors(validateForm(form)) // valida y actualiza los errores
  }

  function handleSubmit (e) {
    e.preventDefault()
    setErrors(validateForm(form))

    // Mientras no existan errores en el objeto errors se enviara el formulario
    if (Object.keys(errors).length === 0) {
      // alert(`enviando formulario:${JSON.stringify(form)}`)
      setLoading(true) // estado de carga
      helperHTTP().post(
        endpointForm,
        {
          body: form,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        },
        token
      ).then((res) => {
        setLoading(false) // se acabo la espera
        setResponse(true) // informamos de que se recibio respuesta
        setForm(initialForm) // se restablece el formulario
        setTimeout(() => {
          setResponse(false) // Aqui esperamos n segundos para restablecer el formulario
        }, timeResetForm * 1000)
        setResBody(res)
        return res
      })
    } else {

    }
  }

  return {
    resBody,
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  }
}
