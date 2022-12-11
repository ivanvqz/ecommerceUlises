import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../../../../constants/env"
import { token } from "../../../../helpers/auth"
import Loader from "../../../atoms/Loader"

const Form = () => {
    const nav = useNavigate()
    const params = useParams()
    console.log(params)
    
    const [product, setProduct] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        if (params?.id) {
            setLoading(true)
            axios
            .get(`${API_URL}/public/products/${params.id}`)
            .then((data) => {
                setProduct(data.data.data)
            })
            .catch( error => setError(error) )
            .finally(() => {
                setLoading(false)
            })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const body = {
            product_name: e.target.product_name.value,
            price: Number(e.target.price.value),
            images: [e.target.image.value],
            description: e.target.description.value,
            features: {
                details: {
                    size: e.target.size.value,
                    color: e.target.color.value,
                }
            }
            
        }

        // envío de la info
        if (!params.id) {
            axios
            .post(`${API_URL}/admin/products`, body, {//  header 
                headers: {
                    Authorization: `Bearer ${token()}` // bearer es un tipo de token
                },
            })
            .then(() => {
                nav("/admin/products")
            })
            .catch( err => {setError(err)})
        } else {
            axios
            .put(`${API_URL}/admin/products/${params.id}`, body, {//  actualiza el producto
                headers: {
                    Authorization: `Bearer ${token()}` // bearer es un tipo de token
                },
            })
            .then(() => {
                nav("/admin/products")
            })
            .catch( err => {setError(err)})
        }
    }

    if (loading) return <Loader />

    return (
        <div className="w-11/12	mx-auto">
            <h2 className="title-dashboard">
                {`${params.id ? "Editar" : "Crear"}`} producto
            </h2>

            <form onSubmit={handleSubmit} className="w-full max-w-l my-3">
                <div className="grid md:grid-cols-2 gap-2 items-center">
                    <div className="">
                        <label htmlFor="product_name" className="form-label">
                            Nombre del producto
                        </label>
                        <input 
                            className="form-input"
                            type="text" 
                            name="product_name"
                            defaultValue={product && product.product_name}
                            required
                        />
                        <p className="aviso">*Obligatorio</p>
                    </div>
                    <div className="">
                        <label htmlFor="price" className="form-label">
                            Precio
                        </label>
                        <input
                            className="form-price border-emerald-500"
                            type="number" 
                            name="price"
                            defaultValue={product && product.price}
                            required
                        />
                        <p className="aviso">*Obligatorio</p>
                    </div>
                    <div className="">
                        <label htmlFor="image" className="form-label">
                            URL de la imagen
                        </label>
                        <input 
                            className="form-input"
                            type="text" 
                            name="image"
                            defaultValue={product && product.images[0]}
                            required
                        />
                        <p className="aviso">*Obligatorio</p>
                    </div>
                    <div className="">
                        <label htmlFor="color" className="form-label">
                            Color
                        </label>
                        <input 
                            className="form-input"
                            type="tetx" 
                            name="color"
                            defaultValue={product && product.features.details.color}
                            required
                        />
                        <p className="aviso">*Obligatorio</p>
                    </div>
                    
                    <div className="size">
                        <label htmlFor="" className="form-label">
                            Talla
                        </label>
                        {/* <input 
                            className="form-input"
                            type="text" 
                            name="color" 
                            placeholder="Color" 
                            required
                        /> */}
                        <select 
                            className="form-select" 
                            name="size" 
                            defaultValue={product && product.features.details.size}
                            required
                        >
                            <option value="otros">-- Seleccione una talla --</option>
                            <option value="C">CH</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <p className="aviso">*Obligatorio</p>
                    </div>
                    <div className="">
                        <label htmlFor="description" className="form-label">
                            Descripción del producto
                        </label>
                        <textarea
                            className="form-input"
                            name="description" 
                            rows={2}
                            defaultValue={product && product.description}
                            required
                        />
                        <p className="aviso">*Obligatorio</p>
                    </div>



                    <div className="block">
                        <button className="button" type="submit">Guardar</button>
                        <p>{error && JSON.stringify(error)}</p>     
                    </div>
                    
                </div>

            </form>
        </div>
    )
}

export default Form