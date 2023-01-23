import useFetch from "../../hooks/useFetch"
import Loader from "../atoms/Loader"
import { useContext} from "react"
import { useParams } from "react-router-dom"
import CartContext from "../../context/CartContext"
import { Badge, BuyButton, ProductRating } from "../atoms"
import { ProductDetails, PriceDetails, ProductInformation, RelatedProducts, ShareProduct } from "../molecules"

const Product = () => {
    // devuelve un objeto con los parametros de la url
    const {state, dispatch}  = useContext(CartContext) // obtenemos el estado y la función de modificación del contexto
    const params = useParams()
    const { data, loading, error } = useFetch(`public/products/${params.id}`)

    if (loading) return <Loader />
    if (error) return <div>{error?.message}</div>

    const { rating, sold, hasDelivery } = data.features.stats

    // const addToCart = () => {
    //     // llamamos a la función de modificación del contexto
    //     dispatch({
    //         type: "ADD_TO_CART",
    //         payload: product,
    //     })
    // }

    // const removeFromCart = () => {
    //     // llamamos a la función de modificación del contexto
    //     dispatch({
    //         type: "REMOVE_FROM_CART",
    //         payload: product,
    //     })
    // }

    return (
        <div className="container mx-auto">
            <section className="py-10">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <div className="rounded-lg overflow-hidden mb-5">
                        <img
                            className="align-middle"
                            src={data.images[0]}
                            alt={data.product_name}
                        />
                        </div>
                        <ProductDetails details={data.features.details} />
                    </div>
                    

                    <div>
                        <span className="block text-gray-500 text-sm mb-2">
                            {sold} vendidos
                        </span>
                        <h1 className="text-xl lg:text-2xl font-semibold leading-7 lg:leading-6 text-gray-800 mb-4">
                            {data.product_name}
                        </h1>
                        <div className="flex items-center gap-2 mb-4">
                            <ProductRating rating={rating} />
                            {sold > 300 && <Badge text="Lo mas vendido" />}
                        </div>
                        <PriceDetails price={data.price} />
                        <div className="grid grid-cols-2 gap-4 mb-4">
                        <BuyButton text="Comprar ahora" />
                        {!state.cart.find((p) => p.id === data.id) ? (
                            <BuyButton
                            text="Agregar al carrito"
                            onClick={() => {
                                dispatch({ type: "ADD_TO_CART", payload: data })
                            }}
                            isGhost
                            />
                        ) : (
                            <BuyButton
                            text="Quitar del carrito"
                            onClick={() => {
                                dispatch({ type: "REMOVE_FROM_CART", payload: data })
                            }}
                            isGhost
                            />
                        )}
                        </div>
                        <ProductInformation
                            description={data.description}
                            deliveryAvariable={hasDelivery}
                        />
                        <ShareProduct id={data.id} />
                    </div>

                </div>
            </section>
            <RelatedProducts />
        </div>
    )
}

export default Product