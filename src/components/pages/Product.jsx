import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../constants/env"

const Product = () => {
    // devuelve un objeto con los parametros de la url
    const params = useParams()

    // declaramos el estado del producto
    const [ product, setProduct] = useState({})

    // useeffect para obtener el producto
    useEffect( () => {
        axios
            .get(`${API_URL}/public/products/${params.id}`)
            .then( (resp) => {
                setProduct(resp.data.data) // actualizamos el estado
            })
    } ,[])

    return (
        <div>
            <h2>Producto: {product?.product_name}</h2>
            <p>{JSON.stringify(product)}</p>
            <button className="btn">Agregar al carrito</button>
            <button className="btn">Quitar el carrito</button>
        </div>
    )
}

export default Product