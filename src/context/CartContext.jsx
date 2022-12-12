import { createContext, useReducer } from "react"
import CartReducer from "./CartReducer"

export const CartContext = createContext() // creamos el contexto del carrito

export const CartProvider = ({ children }) => {
    // usereducer es una función que modifica el estado de un contexto
    // parametros: valo del contexto y función que modifica el contexto con     
    ///reducer
    const initialState = {
        cart: [], // array de productos
    }
    const [ state, dispatch ] = useReducer( CartReducer, initialState )

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext