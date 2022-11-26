import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DeleteToken, Token } from '../../../helpers/auth'

const MainMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [closeNav, setCloseNav] = useState(false)

    const nav = useNavigate()
    const handleSession = () => {
        DeleteToken()
        nav("/") // Redirect to home
    }

    return (

        <div className="mov mx-auto media">
            <div className="">
                <div className="flex items-center justify-end">
                    <nav>
                        <section className="MOBILE-MENU flex lg:hidden">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={
                                () => setIsNavOpen((prev) => !prev)
                            } // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        </div>

                        {/* toggle class based on isNavOpen state */}
                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
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
                                            <Link className="btn" to="/login">
                                                Iniciar sesión
                                            </Link>
                                        </li>)
                                    : (
                                        <li className="flex items-center">
                                            <a onClick={handleSession} className="btn-sc cursor-pointer">
                                                Cerrar sesión
                                            </a>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        </section>

                        <ul className="hidden space-x-8 lg:flex">
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
                    
                </div>
            </div>  
        </div>

    )
}

export default MainMenu