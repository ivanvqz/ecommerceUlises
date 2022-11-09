import { Outlet } from 'react-router-dom'
import MainHeader from '../organisms/MainHeader'
const App = () => {
    return (
        <div>
            <MainHeader />
            {/* outlet es el componente que se encarga de renderizar el contenido de
             la ruta */}
            <Outlet />
        </div>
    )
}

export default App