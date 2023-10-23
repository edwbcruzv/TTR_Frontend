import { useCallback, useContext, useState } from "react";
import UserContext from "../context/UserContext";   
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from "../utils/jwt_data";
// con este hook accedemos al contexto

export default function useAuth (){
    const {jwt,setJwt,isAdmin,setIsAdmin,isTeacher,setIsTeacher,isStudent,setIsStudent} = useContext(UserContext)
    const [isAuth, setIsAuth] = useState(false)

    // con esto hacemos login, se recibe un jwt de la peticion.
    const login = useCallback((jwt_arg) => {
      
      // se valida el jwt exista y se extrae el tipo de usuario que se esta logenado o registrando.
      if (jwt_arg) {
        // console.log(jwt_arg)
        window.sessionStorage.setItem('jwt',jwt_arg)
        const [header, payload, signature] = jwt_arg.split('.')
        const payloadJson = JSON.parse(atob(payload))
        
        setJwt(window.sessionStorage.getItem('jwt') )
        switch (payloadJson.rol) {
          case ROL_ADMIN:
            setIsAdmin(true)
            break;
          case ROL_TEACHER:
            setIsTeacher(true)
            break;
          case ROL_STUDENT:
            setIsStudent(true)
            break;
          default:
            setIsAuth(false)
            break;
        }
        // se autoriza el acceso
        setIsAuth(true)
        } else {
        // no se autoriza nada por no existir el jwt
          setIsAuth(false)
        }

      },
      [setJwt, setIsAdmin, setIsTeacher, setIsStudent]) // cuando se modifique el seteo se ejecuta el callback

    // con esto hacemos logout
    const logout = useCallback(() => {
      setJwt(null)
      window.sessionStorage.removeItem('jwt',jwt)
      setIsAdmin(false)
      setIsTeacher(false)
      setIsStudent(false)
      setIsAuth(false)
    },
    [jwt])

    return{
      login, // callback que recibe el token para iniciar sesion
      logout, // callback para cerrar sesion
      isAuth, // boleano de autorizacion
      isAdmin, // boleano para saber si el acceso es de tipo admin
      isTeacher, // boleano para saber si el acceso es de tipo teacher
      isStudent // boleano para saber si el acceso es de tipo student
    }
}