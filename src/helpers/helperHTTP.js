export const helperHTTP = () => {

    const customFetch = (endpoint,options,token = null) => {
        // manejar objetos JSON en las peticiones
        const defaultHeader={
            accept:"application/json",
        }

        const controller=new AbortController()
        //manejador de errores
        options.signal=controller.signal 
        // Si no se especifica un metodo por defecto sera GET
        options.method=options.method || "GET" 
        // cabeceras que la peticion tenga adicionalmente
        options.headers=options.headers?
            {...defaultHeader,...options.headers}
            :
            defaultHeader
        // Agregar el token JWT si está definido
        if (token) {
            options.headers["Authorization"] = `Bearer ${token}`;
        }
        // cuando se envian datos en el body
        options.body=JSON.stringify(options.body) || false
        if (!options.body) {
            // eliminando el body porque no lo podemos dejar en falso// Configurando el método PATCH
            delete options.body
        }

        // console.log(options)

        // si despues de tres segundos no hay respuesta de un servidor abortamos
        setTimeout(() => controller.abort(), 3000)

        return fetch(endpoint,options)
            .then((res) => res.ok ? res.json():Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "ocurrio un error"
            }))
            .catch((err)=>err)
    }

    const get = (url,options={},token = null) => {
        return customFetch(url,options,token)
    }

    const post = (url,options={},token = null) => {
        options.method="POST"
        return customFetch(url,options,token)
    }

    const put = (url, options = {},token = null) => {
        options.method = "PUT"
        return customFetch(url, options,token)
    }

    const patch = (url, options = {}, token = null) => {
        options.method = "PATCH";
        return customFetch(url, options, token);
    }

    const del = (url, options = {},token = null) => {
        options.method = "DELETE"
        return customFetch(url, options,token)
    }

    return{
        get,
        post,
        put,
        patch,
        del
    }
}



