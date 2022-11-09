import { Link } from "react-router-dom"

const MainMenu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/products">Productos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainMenu