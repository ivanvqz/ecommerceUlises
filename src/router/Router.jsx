import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import Error404 from '../components/pages/Error404';
import Products from '../components/pages/Products';
import App from '../components/templates/App';
const Router = createBrowserRouter([
    //array de todas las rutas de la app
    {
        path: '/', //ruta raiz,
        element: <App />, //elemento que se va a renderizar
        errorElement: <Error404 />,
        // los hijos que se van a renderizar y heredarán lo que tenga el padre
        children: [
            {
                index: true, //ruta por defecto
                element: <Home />,
            },
            {
                path: '/products', //ruta de productos,
                element: <Products />,
            }
        ]
    }
    
])

export default Router