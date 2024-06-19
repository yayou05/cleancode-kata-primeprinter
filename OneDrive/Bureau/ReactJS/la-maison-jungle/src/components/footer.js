import { useState, useEffect } from 'react'
import '../styles/Footer.css'

function Footer({ cart }){
    const [inputValue, setInputValue] = useState('')

    /* useEffect(() =>{
        console.log('1 Cette alerte s'affiche à chaque rendu')
    })*/

    /*
     useEffect(() =>{
        console.log('2 Cette alerte s'affiche à la premiere rendu')}, [])
    */

    /*
     useEffect(() =>{
        console.log('3 Cette alerte s'affiche à la premiere foi et à la mise à jour ')}, [cart])
    */

    
     useEffect(() =>{
        return() =>
            console.log('4 Cette alerte s affiche quand le footer s ouvre')}, [])
    

    function handleInput(e){
        setInputValue(e.target.value)
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné.e.s de plantes
            </div>
            <di className='lmj-footer-elem'> laissez nous votre contact </di>
            <input 
            placeholder='Entrez votre mail'
            onChange={handleInput}
            value={inputValue}></input>
        </footer>
    )
    
}
export default Footer  