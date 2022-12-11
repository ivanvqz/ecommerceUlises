import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Router from './router/Router'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={Router} />
  </UserProvider>
)
