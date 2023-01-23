import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import Loader from "../atoms/Loader"
import ProductCard from "../molecules/ProductCard"


const Products = () => {
    const {data, error, loading} = useFetch("public/products") // endpoint
    const [result, setResult] = useState([])

    useEffect( ()=> {
        if (data) setResult(data)
    }, [data]) // 

    const handleFilter = (e) => {
        const filterValue = e.target.value.toLocaleLowerCase()

        setResult(
            data.filter( 
                (p) => JSON.stringify(p).toLocaleLowerCase().includes(filterValue)
            )
        )
    }

    if( loading ) return <Loader />
    if( error ) return <p className="text-center">{error?.message}</p>

    return (
        <section className="py-16 mov mx-auto cont">
            <h1 className="text-2xl font-bold mb-6">Explora nuestros productos</h1>
            <input
                className="w-full mb-6 p-2 border border-gray-300 rounded-lg"
                onChange={handleFilter}
                type="text"
                placeholder="Buscar"
            />
            <div className="grid grid-cols-2 gap-6 media">
                {
                    result.map((product) => (
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