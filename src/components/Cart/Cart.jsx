import React, {useContext} from 'react'
import { Button, Container,Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCart } from '../ItemCart/ItemCart'
import './Cart.css'

export const Cart = () => {
  const {cart,totalPrice} = useContext(CartContext)
  
  if (cart.length === 0) {
    return(
      <>
        <p className='custom-cart'>No Hay elementos en el carrito</p>
        <NavLink to="/" className='nav-link'><Button variant='primary' size='lg'>Hacer compras</Button></NavLink>
      </>
    )
  }
  
  return (
    <>
    <Container>
      <Row xs={1} md={2} lg={3}>
    {
      cart.map(product => <ItemCart key={product.id} product={product}></ItemCart>)
    }
    
    </Row>
    <p className='custom-cart'> Total: ${totalPrice()}</p>
    </Container>
    </>
  )
}
