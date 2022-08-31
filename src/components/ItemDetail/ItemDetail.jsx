import React from 'react'
import './ItemDetail.css'


export const ItemDetail = ({item}) => {
  return (
    <div className='custom-detail'>
      <div>
          <img src={item.image} alt="Imagen"></img>
      </div>    
      <div>    
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
      </div>
    </div>
  )
}
