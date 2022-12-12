import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../constants/env"
import CartContext from "../../context/CartContext"


const Product = () => {
    // devuelve un objeto con los parametros de la url
    const params = useParams()
    const {state, dispatch}  = useContext(CartContext) // obtenemos el estado y la función de modificación del contexto
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

    const addToCart = () => {
        // llamamos a la función de modificación del contexto
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        })
    }

    const removeFromCart = () => {
        // llamamos a la función de modificación del contexto
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
        })
    }

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
                    {
                        (!state.cart.find( (c) => c.id === product.id))
                        ? <button className="btn" onClick={addToCart}>Agregar al carrito</button>
                        : <button className="btn" onClick={removeFromCart}>Quitar el carrito</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product