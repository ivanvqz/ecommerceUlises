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
        <div className="details">
            <h2 className="details__title">Producto: {product?.product_name}</h2>
            {/* recorremos la informacion del producto */}
            <div className="details__container">
                <div className="details__images">
                    {/* recorrer las imagenes */}
                    {product?.images?.map( (image, index) => (
                        <img
                            className="rounded-lg"
                            src={image} 
                            alt={product?.product_name} 
                            key={index}
                        />
                    ))}
                    {/* <img src={product?.images[0]} alt={product?.product_name} /> */}
                </div>
                <div className="details__description">
                    <h3 className="details__d">Descripción</h3>
                    <p>{product?.description}</p>
                    <p className="">
                        <span className="details__span">Precio: </span>
                        ${product?.price}
                    </p>
                </div>
                <div className="details__btns">
                    <button className="btn">Agregar al carrito</button>
                    <button className="btn">Quitar el carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Product