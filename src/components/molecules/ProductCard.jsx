import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import { formatPrice } from "../../helpers/number"

const ProductCard = ({product}) => {
    const {images, product_name, price, id, description} = product
    const { state, dispatch } = useContext(CartContext)

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
        <article className="flex flex-col h-70 border border-black">
            <div className="h-1/2 border border-emerald-500">
                <Link to={`/products/${id}`}>
                    <img
                        className="bg-center h-full w-full cover"
                        src={images[0]}
                        alt={product_name}
                    />
                </Link>
            </div>
            <div className="h-1/2 p-2">
                <Link to={`/products/${id}`}>
                    <h3 className="text-center text-base font-semibold lowercase tracking-tight text-gray-900 mb-2">
                        {product_name}
                    </h3>
                </Link>
                <p className="text-sm text-gray-800">{description}</p>
                <div className="">
                    <span className="">
                        {formatPrice(price)}
                    </span>
                </div>

                <div>
                    {
                        (!state.cart.find( (c) => c.id === product.id))
                        ? <button className="btn" onClick={addToCart}>Agregar al carrito</button>
                        : <button className="btn" onClick={removeFromCart}>Quitar el carrito</button>
                    }
                </div>
                
            </div>
        </article>
    )
}

export default ProductCard