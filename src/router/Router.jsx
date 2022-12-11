import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import Error404 from '../components/pages/Error404';
import Products from '../components/pages/Products';
import Login from '../components/pages/Login.jsx';
import App from '../components/templates/App';
import Register from '../components/pages/Register';
import Form from '../components/pages/admin/Products/Form';
import Table from '../components/pages/admin/Products/Table';
import Admin from '../components/templates/Admin';
import Product from '../components/pages/Product';

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
            },
            {
                path: '/products/:id', //ruta de productos,
                element: <Product />,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: '/admin/products',
                element: <Table />,
            },
            {
                path: '/admin/products/create',
                element: <Form />,
            },
            {
                path: '/admin/products/edit/:id',
                element: <Form />,
            },
        ]
    }
    
    
])

export default Router