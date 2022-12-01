import axios from "axios"
import { Link } from "react-router-dom"
import { API_URL } from "../../../../constants/env"
import { Token } from "../../../../helpers/auth"
import useFetch from "../../../../hooks/useFetch"
import Loader from "../../../atoms/Loader"


const Table = () => {

    const {data, error, loading} = useFetch("public/products") // endopint
    if( loading ) return <Loader />
    if( error ) return <p className="text-center">{error?.message}</p>

    // deleteProduct
    const deleteProduct = (product) => {
        if( window.confirm("¿Estás seguro de eliminar este producto?") ){
            // delete
            axios.delete(`${API_URL}/admin/products/${product.id}`, {
                headers: {
                    Authorization: `Bearer ${Token()}`,
                }
            })
            .then( () => {
                
            })
        }
    }


    return (
        <div className="container m-auto">
            <section className="pt-10">
                <h1 className="title">Productos</h1>
                <div className="pt-1 mb-12 pb-1">
                    <Link className="bg-gradient button" to="/admin/products/create">
                        Agregar producto
                    </Link>
                </div>

                <table className="overflow-x-scroll">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 && <tr><td colSpan={4}>No existen productos actualmente</td></tr>}
                        {
                            data.map( product => (
                                <tr key={product.id}>
                                    <td>{product.product_name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Link to={`/admin/products/edit/${product.id}`}>
                                            Editar
                                        </Link>
                                    </td>
                                    <td>
                                        <a 
                                            className="text-red-600 hover:cursor-pointer"
                                            onClick={() => deleteProduct(product)}
                                        >
                                            Borrar
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Table