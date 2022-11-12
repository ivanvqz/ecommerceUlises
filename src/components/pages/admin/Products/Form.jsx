import axios from "axios"
import { API_URL } from "../../../../constants/env"
import { Token } from "../../../../helpers/auth"

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {
            product_name: e.target.productName.value,
            product_price: Number(e.target.price.value),
            product_images: [e.target.image.value],
            product_description: e.target.description.value,
            features: {
                color: e.target.color.value
            }
            
        }

        // envío de la info
        axios
            .post(`${API_URL}/admin/products`, data, {//  header 
                headers: {
                    Authorization: `Bearer ${Token()}` // bearer es un tipo de token
                },
            })
            .then(resp => {
                console.log(resp);
                alert("producto creado")
            })
            .catch( err => {
                console.log(err);
                alert("Error al crear producto")
            })
    }

    return (
        <div className="w-11/12	mx-auto">
            <h2 className="title-dashboard">Crear producto</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-l my-3">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="form-label">
                            Nombre del producto
                        </label>
                        <input 
                            className="form-input"
                            type="text" 
                            name="productName"
                            required
                        />
                        <p className="text-red-500 text-base text-right">*Obligatorio</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="form-label">
                            Precio
                        </label>
                        <input
                            className="form-price border-emerald-500"
                            type="number" 
                            name="price" 
                            placeholder=""
                            // teto por defecto
                            defaultValue={0}
                            required
                        />
                        <p className="text-red-500 text-base text-right">*Obligatorio</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="form-label">
                            Url de la imagen
                        </label>
                        <input 
                            className="form-input"
                            type="url" 
                            name="image" 
                            placeholder="Imagen" 
                            required
                        />
                        <p className="text-red-500 text-base text-right">*Obligatorio</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="form-label">
                            Descripción del producto
                        </label>
                        <textarea
                            className="form-input"
                            name="description" 
                            rows={5} 
                            placeholder="Descripción" 
                            required
                        />
                        <p className="text-red-500 text-base text-right">*Obligatorio</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="form-label">
                            Talla
                        </label>
                        {/* <input 
                            className="form-input"
                            type="text" 
                            name="color" 
                            placeholder="Color" 
                            required
                        /> */}
                        <select className="form-select" name="talla" required>
                            <option value="C">CH</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <p className="text-red-500 text-base text-right">*Obligatorio</p>
                    </div>
                </div>

                <div className="md:w-2/3">
                    <button className="button" type="submit">Crear producto</button>
                </div>
            </form>
        </div>
    )
}

export default Form