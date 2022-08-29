import React, {useState,useEffect} from 'react';
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css'
import ps4 from '../assets/ps4.jpg'

const juegos = [
    {id:1 , title:"juegos ps4", description: "lorem ipsun" , price: 400, image: ps4 },
    {id:2 , title:"juegos ps5", description: "lorem ipsun" , price: 700, image: ps4 },
    {id:3 , title:"juegos xbox serie x", description: "lorem ipsun" , price: 550, image: ps4 },
]

export function ItemListContainer({greeting}) {

    const [items,setItems] = useState([])

    useEffect(() => {
    const getItems = new Promise(resolve => {
        setTimeout(() => {
            resolve(juegos)
        }, 3000);
    });
    getItems.then(res => setItems(res));

    }, [])
    

    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
    }

    return(
        <>
        <h1 className="principal-title">{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
        <ItemList items={items}></ItemList>
        </>
    )
}