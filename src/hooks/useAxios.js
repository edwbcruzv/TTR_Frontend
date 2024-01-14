import {useEffect,useState} from 'react'
import { helperAXIOS } from '../helpers/helperAXIOS'


/**
 * Peticion generica con fetch
 * @param url // url que se enviara la peticion
 * @returns 
 */
function useAxios(url,req="GET", data = null, token = null) {
  // Guarda los datos que se nos regrese la petision
  const [Data, setData] = useState(null)
  // Guarda el status de la peticion
  const [IsPending, setIsPending] = useState(false)
  // Guarda el error si existe uno
  const [Error, setError] = useState(null)

  const {get,post,put,patch,del} = helperAXIOS()

  useEffect(() => {
    // llegar a abortar la peticion con un tiempo limite de espera
    const abortController =new AbortController()

    // señal que se da para abortar la solicitud
    const signal = abortController.signal

    const getData = async (url) => { 
        // en este punto se hace la peticion
        // y debemos de cambiar el estado de pendiente a TRUE
        setIsPending(true)
        
        try {
            // se hace la peticion
            let res = undefined

            switch (req) {
                case "GET":
                    res = await get(url,data,token)
                    break;
                case "POST":
                    res = await post(url, data, token)
                    break;
                case "PUT":
                    res = await put(url, data, token)
                    break;
                case "PATCH":
                    res = await patch(url, data, token)
                    break;
                case "DEL":
                    res = await del(url,token)
                    break;
                default:
                    break;
            }
            // console.log(res)
            if (!res.status === 200) { // en el caso de haber un error, res.ok==false
                throw {
                    error: true,
                    status: res.status,
                    statusText: !res.statusText ? "Ocurrio un error" : res.statusText
                }
            }
            // en caso de no haber ningun error,res.ok===true
            // console.log(signal)
            if (!signal.aborted) { // significa que no hubo ningun error
                setData(res.data) // se toma la dada que recibimos de la peticion
                setError({error:false}) // se deja claro que no hubo error
            }
        } catch (error) {
            if (!signal.aborted) { // significa que no hubo ningun error
                setData(null) // al no tener exito en la peticion la data se deja en nulo
                setError(error) // se asigna el error
            }
        }finally{
            if (!signal.aborted) { // significa que no hubo ningun error
                // independientemente de si hubo un error o pa peticion tuvo exito
                // indicamos que la peticion termino de ejecutarse
                setIsPending(false) 
            }
        }
     }
  
    getData(url)

     return ()=>abortController.abort() // fase de desmontaje

  }, [url]) // cuando la url cambie, se ejecuta el efecto
  

  return {Data,IsPending,Error}
}

export default useAxios