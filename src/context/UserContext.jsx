import { useState } from "react";

const { createContext } = require("react");


const UserContext = createContext()

const initialJwt=null

const UserProvider = ({children}) => {
    const [jwt, setJwt] = useState(initialJwt)

    const values = {jwt,setJwt}

  return (
    <UserContext.Provider value={values} >{children}</UserContext.Provider>
  )
}

export {UserProvider}
export default UserContext