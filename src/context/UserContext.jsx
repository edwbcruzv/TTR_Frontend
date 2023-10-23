import { useState, createContext, useEffect } from "react";

const UserContext = createContext()

const initialJwt=window.sessionStorage.getItem('jwt') //  se cierra el navegador el token se elimina
// const initialJwt=window.localStorage.getItem('jwt') // se cierra el navegador el token se quedara guardado

const UserProvider = ({children}) => {
    const [jwt, setJwt] = useState(window.sessionStorage.getItem('jwt'))
    const [isAdmin, setIsAdmin] = useState(false)
    const [isTeacher, setIsTeacher] = useState(false)
    const [isStudent, setIsStudent] = useState(false)
    

    const values = {jwt,setJwt,isAdmin,setIsAdmin,isTeacher,setIsTeacher,isStudent,setIsStudent}

  return (
    <UserContext.Provider value={values} >{children}</UserContext.Provider>
  )
}

export {UserProvider}
export default UserContext