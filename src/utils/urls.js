
// Cambiar a sus propios datos y descomentar en el .gitignore la ruta de este archivo.
const PUERTO = 8080
const ESQUEMA = 'http'
const AUTORIDAD = `localhost:${PUERTO}`
export const SERVER_URL = `${ESQUEMA}://${AUTORIDAD}`
// Aqui en adelante no moverle.
const API = `api`
const PATH = (recurso) => `${API}/${recurso}`


export const URI_BACKEND =(recurso)=>{

    return `${SERVER_URL}/${PATH(recurso)}`

}