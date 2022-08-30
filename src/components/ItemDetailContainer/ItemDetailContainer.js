import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import ps4 from '../assets/ps4.jpg'

const juego = {id:1 , title:"juegos ps4", description: "lorem ipsun" , price: 400, image: ps4 }

export const ItemDetailContainer = () => {
    const [item,setItem] = useState({});

    useEffect(() => {
        const getJuego = new Promise(resolve => {
       setTimeout(() => {
        resolve(juego)
       }, 2000); 
    },[])

    getJuego.then(res => setItem(res))
});
    
  return (
    <ItemDetail item={item}></ItemDetail>
  )
}
