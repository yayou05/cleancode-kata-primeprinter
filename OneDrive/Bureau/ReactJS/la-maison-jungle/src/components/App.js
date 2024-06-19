import Banner from './Banner'
import Cart from './cart'
import ShoppingList from './ShoppingList'
import { useState } from 'react'
import Footer from './footer'
import '../styles/Layout.css'

function App() {
    const [cart, updateCart] = useState([])
    const [isFooterShown, updateIsFooterShown] = useState(true)
    
    
    return (
        <div>
            <Banner>
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            {<button onClick={() => updateIsFooterShown(!isFooterShown)}>Cacher</button> }
            {isFooterShown && <Footer cart={cart}/>}
            
      
        </div>
    )
}



/*<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Tapez votre texte' />
    <button type='submit'>Entrer</button>
</form>

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}*/
export default App