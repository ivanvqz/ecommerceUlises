import axios from "axios";
import { createContext, useEffect, useState }  from"react";
import { API_URL } from "../constants/env";
import { Token } from "../helpers/auth";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState()

    useEffect(() => {
        if (Token) {
            axios
                .get(`${API_URL}/private/users`, {
                    headers: {
                        Authorization: `Bearer ${Token()}`,
                    },
                })
                .then((resp) => {
                    setUserData(resp.data.data)
                })
                
        }
    }, [])

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}