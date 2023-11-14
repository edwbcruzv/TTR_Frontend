import { useState, createContext} from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [rol, setRol] = useState(null)
  
    const values = {token, setToken,rol, setRol}

  return (
    <AuthContext.Provider value={values} >{children}</AuthContext.Provider>
  )
}
export {AuthContext}

export default AuthProvider;