// Cambiar a sus propios datos y descomentar en el .gitignore la ruta de este archivo.
const PUERTO = 8080
const ESQUEMA = 'http'
const AUTORIDAD = `localhost:${PUERTO}`
export const SERVER_URL = `${ESQUEMA}://${AUTORIDAD}`
// Aqui en adelante no moverle.
// const API = `api`
// const PATH = (recurso) => `${API}/${recurso}`
// export const URI_BACKEND =(recurso)=>{return `${ESQUEMA}://${AUTORIDAD}/${PATH(recurso)}`}

// produccion: https://tt-backend.azurewebsites.net
const ESQUEMA = 'https'
const AUTORIDAD = "tt-backend.azurewebsites.net"
export const URI_BACKEND =(recurso)=>{return `${ESQUEMA}://${AUTORIDAD}/${recurso}`}