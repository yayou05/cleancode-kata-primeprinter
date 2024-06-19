import '../styles/Cart.css'
import { useState, useEffect } from 'react'
import { plantList } from '../data/plantList'
/*function Cart() {
    const prixM = 8
    const prixL = 10
    const prixBF = 15
    return(
    <div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
        <li>Monstera : {prixM}$</li>
          <li>lierre :{prixL}</li>
          <li>Bouquet de fleurs :{prixBF}</li>
        </ul>
          total : {prixM + prixL + prixBF}$
    </div>)
    }
    
 */

//import { plantList } from './plantList'
//import PlantItem from './PlantItem'

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  /*const clearCart = () => {updateCart(0);}*/
  const total = cart.reduce(
      (acc, plantType) => acc + plantType.amount * plantType.price,
          0
      )
      useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])

    console.log('les données du panier sont: ',cart);

  return isOpen ? (
      <div className='lmj-cart'>
          <button
              className='lmj-cart-toggle-button'
              onClick={() => setIsOpen(false)}
          >
              Fermer
          </button>
          {cart.length > 0 ? (
              <div>
                  <h2>Panier</h2>
                  <ul>
						{cart.map(({ name, price, amount }, index) => (
							<li key={`${name}-${index}`}>
								{name} {price} x {amount}
							</li>
						))}
					</ul>
                  <h3>Total :{total}€</h3>
                  <button onClick={() => updateCart([])}>Vider le panier</button>
              </div>
          ) : (
              <div>Votre panier est vide</div>
          )}
      </div>
  ) : (
      <div className='lmj-cart-closed'>
          <button
              className='lmj-cart-toggle-button'
              onClick={() => setIsOpen(true)}
          >
              Ouvrir le Panier
          </button>
      </div>
  )
}
export default Cart
