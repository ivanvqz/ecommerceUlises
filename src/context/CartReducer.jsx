const CartReducer = (state, action) => {
    //va a modificar el carrito
    switch (action.type) {
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload] }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: [...state.cart.filter( (c) => c.id !== action.payload.id)]
            }
        case "CLEAR_CART":
            return { cart: [] }
        default: 
        return state // se retorna sin modificar
    }
}

export default CartReducer
