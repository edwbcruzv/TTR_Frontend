import { useState, createContext} from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [rol, setRol] = useState(null)
    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState(null)
  
    const values = {token, setToken,rol, setRol,id, setId,nombre, setNombre}

  return (
    <AuthContext.Provider value={values} >{children}</AuthContext.Provider>
  )
}
export {AuthContext}

export default AuthProvider;