import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { formatPrice } from "../../helpers/number"


const SummaryItem = ({ product }) => {
    const { dispatch } = useContext(CartContext)

    // const removeFromCart = (e) => {
    //     e.preventDefault()
    //     dispatch({
    //         type: "REMOVE_FROM_CART",
    //         payload: product,
    //     })
    // }
    return (
        <div class="flex items-center justify-between py-8 items-top border-b border-gray-300/60">
            <div className="flex">
                <div className="rounded overflow-hidden mr-4">
                    <img
                        className="w-20 h-16 align-middle object-cover"
                        src={product.images[0]}
                        alt={product.product_name}
                    />
                </div>
                <div className="">
                    <h2 className="text-xl text-slate-600 mb-1">
                        {product.product_name}
                    </h2>
                    <p className="font-semibold">
                        { formatPrice(product.price) }
                    </p>
                </div>
                <div>
                    <button
                        onClick={() => {
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: product,
                            })
                        }}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                    >
                        <span>Eliminar</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SummaryItem