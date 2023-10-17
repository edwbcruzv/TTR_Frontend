import { useState, createContext } from "react";


const UserContext = createContext()

const initialJwt=window.sessionStorage.getItem('jwt') //  se cierra el navegador el token se elimina
// const initialJwt=window.localStorage.getItem('jwt') // se cierra el navegador el token se quedara guardado

const UserProvider = ({children}) => {
    const [jwt, setJwt] = useState(initialJwt)

    const values = {jwt,setJwt}

  return (
    <UserContext.Provider value={values} >{children}</UserContext.Provider>
  )
}

export {UserProvider}
export default UserContext