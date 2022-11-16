import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../constants/env"

const useFetch = (endpoint, headers={}) => {

    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    // useEffect for a petition
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
                setLoading(false) // for loading state
            })
    },[])
    return { data, error, loading }
}

export default useFetch