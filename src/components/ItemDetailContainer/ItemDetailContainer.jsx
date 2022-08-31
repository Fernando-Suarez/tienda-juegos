import React, { useEffect, useState } from 'react'
import { getJuegos } from '../../helper/helper';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [item,setItem] = useState({});

    const {detalleId} = useParams();

  useEffect(()=>{
    getJuegos.then(res => setItem(res.find(juego => juego.id=== parseInt(detalleId))))
  },)
    
  return (
    <ItemDetail item={item}></ItemDetail>
  )
}
