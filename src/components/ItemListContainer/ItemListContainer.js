import React, {useState,useEffect} from 'react';
import { ItemCount } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css'
import ps4 from '../assets/ps4.jpg'

//Simulacion de articulos en base de datos
const juegos = [
    {id:1 , title:"juegos ps4", description: "lorem ipsun" , price: 400, image: ps4 },
    {id:2 , title:"juegos ps5", description: "lorem ipsun" , price: 700, image: ps4 },
    {id:3 , title:"juegos xbox serie x", description: "lorem ipsun" , price: 550, image: ps4 },
]

export function ItemListContainer({greeting}) {
    //variable de estado inicializada en un array vacio
    const [items,setItems] = useState([])

    //se crea una nueva promesa que pide los juegos de la base de datos despues de 3 segundos
    useEffect(() => {
    const getItems = new Promise(resolve => {
        setTimeout(() => {
            resolve(juegos)
        }, 3000);
    });
    //entonces si se resulva la promesa seteamos esa respuesta a la variable de estado
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