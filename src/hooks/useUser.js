import { useCallback, useContext } from "react";
import UserContext from "../context/UserContext";   
// con este hook accedemos al contexto

export default function useUser (){
    const {jwt, setJwt} = useContext(UserContext)

    // con esto hacemos login
    const login = useCallback((param) => {
        setJwt(param)
        window.sessionStorage.setItem('jwt',jwt)
      },
      [setJwt])

    // con esto hacemos logout
    const logout = useCallback(() => {
      setJwt(null)
      window.sessionStorage.removeItem('jwt',jwt)
    },
    [setJwt])
    

    return{
        isLogged:Boolean(jwt), // si existe un jwt
        login,
        logout
    }
}