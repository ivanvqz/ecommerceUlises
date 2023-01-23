import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/env.js";
import { UserContext } from "../../context/UserContext.jsx";
import { SetToken } from "../../helpers/auth.js";
import LoginTemplate from "../templates/LoginTemplate.jsx";

const Login = () => {
    // para navegar a otra ruta
    const nav = useNavigate()
    const { setUserData } = useContext(UserContext)

    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError() // limpiar el error
        //recibir los datos del formulario
        const body = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        //enviar los datos al servidor
        axios
            .post( `${API_URL}/public/login`, body)
            .then((resp) => {
                SetToken(resp.data.data.token)
                setUserData(resp.data.data.user)
                nav("/")
            })
            .catch((err) => {
                setError(err) // mostrar el error
            })

    }
    

    return (
        <LoginTemplate title="Iniciar seción">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input 
                        type="email"
                        name="email"
                        placeholder="Correo electrónico" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="password"
                        name="password" 
                        placeholder="Contraseña" 
                        required
                    />
                </div>

                <div className="text-center pt-1 mb-12 pb-1 text-white-800">
                    <button className="bg-gradient w-full" type="submit">
                        Ingresar
                    </button>
                    <Link className="text-gray-500" to="/register">
                        ¿Deseas registrarte?
                    </Link>
                </div>

                { error && (
                    <p className="text-center p-2 bg-red-100 text-red-800">
                        {error?.response?.data?.data}
                        {/* imprimir en consola el error */}
                        {console.log(error)}
                    </p>
                )}
            </form>
        </LoginTemplate>
    )
}

export default Login