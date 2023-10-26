import { useState, createContext} from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    // const [isAdmin, setIsAdmin] = useState(false)
    // const [isTeacher, setIsTeacher] = useState(false)
    // const [isStudent, setIsStudent] = useState(false)
  
    const values = {token, setToken}

  return (
    <AuthContext.Provider value={values} >{children}</AuthContext.Provider>
  )
}
export {AuthContext}

export default AuthProvider;