import React from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export const ItemDetail = ({item}) => {

  const [irCarrito,setIrCarrito] = useState(false);
  

  const onAdd = (quantity) => {
    setIrCarrito(true);
}

  return (
    <div className='custom-detail'>
      <div>
          <img src={item.image} alt="Imagen"></img>
      </div>    
      <div>    
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
      </div>
      { irCarrito
      ? <NavLink to="/cart"><Button variant="primary" size="lg">Ir al Carrito</Button></NavLink>
      : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}></ItemCount> }
    </div>
  )
}
