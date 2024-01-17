import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from "../utils/jwt_data";
// con este hook accedemos al contexto

export default function useAuth (){
    const {token,setToken,rol,setRol,id, setId,nombre, setNombre} = useContext(AuthContext)
    
    useEffect(() => {
        if (token) {
            
            const [header, payload, signature] = token.split('.')
            const payloadJson = JSON.parse(atob(payload))
            setId(payloadJson.id)
            setNombre(payloadJson.nombre)
            
            switch (payloadJson.rol) {
                case ROL_ADMIN:
                    setRol(ROL_ADMIN) 
                    break;
                case ROL_TEACHER:
                    setRol(ROL_TEACHER) 
                    break;
                case ROL_STUDENT:
                    setRol(ROL_STUDENT) 
                break;
            default:
                setRol(null) 
                setToken(null)
                localStorage.removeItem("token")
                break;
            }
        }else{
            console.log("Token no es valido, token:"+token)
            setRol(null) 
            setToken(null)
            localStorage.removeItem("token")
        }
            

    }, [])
    
    return {token,setToken,rol,id,nombre} 
}