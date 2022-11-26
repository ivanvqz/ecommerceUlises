import useFetch from "../../../../hooks/useFetch"


const Table = () => {

    const {data, error, loading} = useFetch("public/products") // endopint
    if( loading ) return <p className="text-center">Loading...</p>
    if( error ) return <p className="text-center">Error en la petición</p>

    return (
        <>
            <div>
                <h1 className="title">Nuestros productos</h1>
                { data.length === 0 ?
                (<p className="text-center">No existen productos</p>) :
                    data.map( product => (
                        (
                            <div key={product.id}>
                                <h2 className="title-products">{product.name}</h2>
                                <p >{product.image}</p>
                                <p className="paragraph">{product.description}</p>
                            </div>
                        )
                    ))
                }
            </div>
        </>
    )
}

export default Table