import React from 'react'


export const ItemDetail = ({item}) => {
  return (
    <>
    <div>
        <img src={item.image} alt="Imagen"></img>
    </div>    
    <div>    
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
    </div>
    </>
  )
}
