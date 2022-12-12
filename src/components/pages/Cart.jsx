import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import SummaryItem from "../atoms/SummaryItem"

const Cart = () => {
  const { state } = useContext(CartContext)
  
  let value = 0
  state.cart.forEach( (c) => (value += c.price))
  return (
    <>
      <div className="container m-auto">
        <div className="grid grid-cols-3 gap-8 mb-16">
          <section className="col-span-2 pt-10">
            <h1 className="text-3xl font-semibold mb-6">Carrito de compras</h1>
            {
              state?.cart?.length > 0 
              ? (
                <div>
                  <div className="grid mb-2 border-t border-gray-300/60">
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
    </>
  )
}

export default Cart