import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { PAYPAL_ID } from "../../constants/env"
import { useNavigate } from "react-router-dom"
import CartContext from "../../context/CartContext"
import { useContext } from "react"

export const PayPalPayment = ({ value, order }) => {
    const nav = useNavigate()
    const { dispatch } = useContext(CartContext)

    //funcion vaciar carrito
    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        })
    }
    return (
        <PayPalScriptProvider
            options={{
            "client-id": PAYPAL_ID,
        }}
    >
            <PayPalButtons
                createOrder={(_, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: value,
                                },
                                custom_id: order.id,
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((resp) => {
                        if ( resp.status === "COMPLETED" ) {
                            nav("/checkout-success")
                            // clearCart()
                        } else {
                            alert("El pago no se pudo procesar")
                        }
                    });
                }}
                style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    )
}