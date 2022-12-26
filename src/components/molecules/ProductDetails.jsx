import { PRODUCT_DETAILS } from "../../constants/product-details";
import { ProductDetailItem } from "../atoms/ProductDetailItem";

export const ProductDetails = ({details}) => {
    const features = Object.entries(details)
    return (
        <div >
            <h2 className="text-xl font-semibold mb-2">Detalles del producto</h2>
            <div className="rounded-lg bg-slate-100 grid grid-cols-3 gap-5 p-5">
                {
                    features.map( (details) => {
                        const [key, value] = details
                        const type = PRODUCT_DETAILS[key]

                        if (!value) return
                        
                        return <ProductDetailItem type={type} value={value} key={type} />
                    })
                }
            </div>
        </div>
    )
}