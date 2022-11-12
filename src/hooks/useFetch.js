import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../constants/env"

const useFetch = (endpoint, headers={}) => {
    // endpoint: para que el hook pueda recibir el endpoint de la API
    // headers: para peticiones de administración

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    // useEffect para que corra cuando la petición se haga
    useEffect(() => {
        axios
            .get(`${API_URL}/${endpoint}`) // endpoint es el endpoint de la API
            .then(resp => {
                setData(resp.data.data) // data: axios, data: API
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false) // para que no se quede cargando
            })
    },[])
    return { data, error, loading }
}

export default useFetch