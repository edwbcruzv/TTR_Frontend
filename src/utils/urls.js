
// Cambiar a sus propios datos y descomentar en el .gitignore la ruta de este archivo.
const PUERTO = 8080
const ESQUEMA = 'http'
const AUTORIDAD = `localhost:${PUERTO}`

// Aqui en adelante no moverle.
const API = `api`
const PATH = (recurso) => `${API}/${recurso}`


export const URI_BACKEND =(recurso)=>{

    return `${ESQUEMA}://${AUTORIDAD}/${PATH(recurso)}`

}