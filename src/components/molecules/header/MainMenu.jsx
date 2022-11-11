import { Link, useNavigate } from "react-router-dom"
import { DeleteToken, Token } from '../../../helpers/auth'

const MainMenu = () => {

    const nav = useNavigate()
    const handleSession = () => {
        DeleteToken()
        nav("/") // Redirect to home
    }

    return (
        <nav className="w-full">
            <ul className="flex justify-end text-gray-100">
                <li className="flex items-center">
                    <Link className="menu-item" to="/">
                        Inicio
                    </Link>
                </li>
                <li className="flex items-center">
                    <Link className="menu-item" to="/products">
                        Productos
                    </Link>
                </li>

                {/* Validar si el usuario esta logeado */}
                
                {
                    !Token() ?
                        (<li className="flex items-center">
                            <Link className="menu-item" to="/login">
                                Iniciar sesión
                            </Link>
                        </li>)
                    : (
                        <li className="flex items-center">
                            <a onClick={handleSession} className="menu-item cursor-pointer">
                                Cerrar seción
                            </a>
                        </li>
                    )
                }

                
                
            </ul>
        </nav>
    )
}

export default MainMenu