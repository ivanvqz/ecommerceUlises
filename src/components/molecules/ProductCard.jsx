import { Link } from "react-router-dom"
import { formatPrice } from "../../helpers/number"

const ProductCard = ({product}) => {
    const {images, product_name, price, id, description} = product

    return (
        <article className="flex flex-col h-70 border border-black">
            <div className="h-1/2 border border-emerald-500">
                <Link to={`/productos/${id}`}>
                    <img
                        className="bg-center h-full w-full cover"
                        src={images[0]}
                        alt={product_name}
                    />
                </Link>
            </div>
            <div className="h-1/2 p-2">
                <Link to={`/productos/${id}`}>
                    <h3 className="text-center text-base font-semibold lowercase tracking-tight text-gray-900 mb-2">
                        {product_name}
                    </h3>
                </Link>
                <p class="text-sm text-gray-800">{description}</p>
                <div className="">
                    <span className="">
                        {formatPrice(price)}
                    </span>
                </div>
                
            </div>
        </article>
    )
}

export default ProductCard