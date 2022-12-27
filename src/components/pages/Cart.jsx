import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import SummaryItem from "../atoms/SummaryItem"
import axios from "axios"
import { API_URL } from "../../constants/env"
import { token } from "../../helpers/auth"
import { PayPalPayment } from "../organisms/PayPalPayment"

const Cart = () => {
  const { state } = useContext(CartContext)
  const [ order, setOrder ] = useState()
  
  let value = 0
  state.cart.forEach((c) => (value += c.price)) // suma de los preios de los productos

  const handleOrder = () => {
    const products = state.cart.map((p) => {
      return {
        product_id: p.id,
        amount: 1, // p.amount, mejorar
        unit_price: p.price 
      }
    })

    const data = {
      products: products,
    }
    axios.post(`${API_URL}/private/purchase-orders`, data, {
      headers: {
        Authorization: `Bearer ${token()}`
      }
    })
    .then( (resp) => {
      setOrder(resp.data.data)// guardar la orden
    })
    .catch( (err) => {
      alert("Error al generar la orden :(")
    })
  }
  
  return (
    <div className="pt-9">
      <div className="container m-auto product-card">
        <div className="mb-16">
          <section className="  product__center">
            <h1 className="text-3xl font-semibold mb-6">Carrito de compras</h1>
            {
              state?.cart?.length > 0 
              ? (
                <div>
                    <div className="grid border-t border-gray-300/60">
                      {
                        state.cart.map( (prod) => (
                          <SummaryItem key={prod.id} product={prod} />
                        ))
                      }
                  </div>

                  {
                    !order
                    ? (
                      <button
                        className="btn btn-primary mt-4"
                        onClick={handleOrder}
                      >
                        Crear orden de pago
                      </button>
                    )
                    : (
                      <>
                        <p>ID de orden de compra: {order.id}</p>
                        <PayPalPayment
                          value={value}
                          order={order}
                        />
                      </>
                    )
                  }
                </div>
              )
              : (
                <div>
                  <p className="mb-2">Tu carrito está vacío</p>
                  <Link to="/products" className="btn">Ver productos</Link>
                </div>
              )
            }
          </section>
        </div>
      </div>
    </div>
  )
}

export default Cart