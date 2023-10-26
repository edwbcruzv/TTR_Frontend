import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ROL_ADMIN, ROL_STUDENT, ROL_TEACHER } from "../utils/jwt_data";
// con este hook accedemos al contexto

export default function useAuth (){
    return useContext(AuthContext)

    // // con esto hacemos logout
    // const logout = useCallback(() => {
    //   setJwt(null)
    //   window.sessionStorage.removeItem('jwt',jwt)
    //   setIsAdmin(false)
    //   setIsTeacher(false)
    //   setIsStudent(false)
    //   setIsAuth(false)
    // },
    // [jwt])
}