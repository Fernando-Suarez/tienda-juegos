import React, {useContext,useState} from 'react'
import {getFirestore,collection, addDoc} from 'firebase/firestore'
import { CartContext } from '../../context/CartContext'

export const OrderForm = () => {

    const {cart,totalPrice} = useContext(CartContext)
    const [orderId,setOrderId] = useState('')

const sendOrder = (e) =>{
    e.preventDefault()

   
    const order = {
        buyer: { 
            nombre: e.target[0].value,
            phone: e.target[1].value, 
            email: e.target[2].value },

        items: cart.map(product => ({id: product.id, title:product.title, price:product.price, quantity:product.quantity })),
        total: totalPrice(),
        
    }
    const db = getFirestore();
    const orderCollection = collection(db,'orders')
    addDoc(orderCollection, order).then(({id}) => setOrderId(id))
}
    console.log(orderId)

    return (
    <>   
    <div>
        <form onSubmit={sendOrder}>
            <input type='text' placeholder='nombre'></input>
            <input type='text' placeholder='telefono'></input>
            <input type='email' placeholder='email'></input>
            <button type='submit'>Generar orden</button>
        </form>
    </div>
    </>
 )
}
