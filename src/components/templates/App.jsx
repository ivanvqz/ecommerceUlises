import { Outlet } from 'react-router-dom'
import MainMenu from '../molecules/header/MainMenu'
import MainHeader from '../organisms/MainHeader'
const App = () => {
    return (
        <div>
            <MainHeader>
                <MainMenu/>
            </MainHeader>
            {/* outlet es el componente que se encarga de renderizar el contenido de
             la ruta */}
            <div className="pt-16 max-w-256 m-auto">
                <Outlet />
            </div>
        </div>
    )
}

export default App