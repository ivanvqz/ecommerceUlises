import axios from "axios"
import { createContext, useEffect, useState }  from "react"
import { API_URL } from "../constants/env"
import { token } from "../helpers/auth"

const UserContext = createContext()

const UserProvider = ({ children  }) => {
    const [userData, setUserData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        if (token && token()) {
                // Realizamos la petición GET a la URL especificada
                axios
                    .get(`${API_URL}/private/users`, {
                        headers: {
                            Authorization: `Bearer ${token()}`,
                        },
                    })
                    .then((resp) => {
                            // En caso contrario, obtenemos los datos del usuario
                            setUserData(resp.data.data)
                    })
                    .catch( (error) => {
                        setError(error)
                    })
                    }

    }, [])

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            { children }
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }
