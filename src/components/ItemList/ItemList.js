import React from 'react'
import { Item } from '../Item/Item';

export  const ItemList = ({ items = []}) => {
    return (
        items.map(juegos => <Item key={juegos.id} info={juegos} />)
    )
}