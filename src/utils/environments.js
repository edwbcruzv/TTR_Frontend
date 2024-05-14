/**
 * Variables de los roles
 */
export const ISS = '2023-b129'
export const ROL_ADMIN = 'ADMIN'
export const ROL_STUDENT = 'STUDENT'
export const ROL_TEACHER = 'TEACHER'
export const JWT_PUBLIC_KEY = '32e306b85c808336036e9caa7d06a89abbe56be5e32c831c2a541b21b5dc9bc7'
/**
 * Datos del servidor backend
 */
// Cambiar a sus propios datos y descomentar en el .gitignore la ruta de este archivo.
const PUERTO = 8080
const ESQUEMA = 'http'
const AUTORIDAD = `localhost:${PUERTO}`
export const SERVER_URL = `${ESQUEMA}://${AUTORIDAD}`
/**
 * De aqui en adelante no moverle, ya que se alteraran las peticiones de todos los context
 */
const API = 'api'
const PATH = (recurso) => `${API}/${recurso}`

export const URI_BACKEND = (recurso) => {
  return `${SERVER_URL}/${PATH(recurso)}`
  // return `${SERVER_URL}/${recurso}`
}
