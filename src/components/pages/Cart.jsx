import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import SummaryItem from "../atoms/SummaryItem"

const Cart = () => {
  const { state } = useContext(CartContext)
  
  let value = 0
  state.cart.forEach((c) => (value += c.price))
  
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