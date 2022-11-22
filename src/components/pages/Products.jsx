import useFetch from "../../hooks/useFetch"
import Loader from "../atoms/Loader"
import ProductCard from "../molecules/ProductCard"


const Products = () => {

    const {data, error, loading} = useFetch("public/products") // endpoint
    if( loading ) return <Loader />
    if( error ) return <p className="text-center">{error?.message}</p>

    return (
        <section className="py-16 container mx-auto cont">
            <h1 className="text-2xl font-bold mb-6">Explora nuestros productos</h1>
            <div className="grid md:grid-cols-4 gap-6 media">
                {
                    data.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Products