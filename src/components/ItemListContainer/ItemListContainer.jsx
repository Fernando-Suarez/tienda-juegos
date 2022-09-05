import React, {useState,useEffect} from 'react';
import { ItemList } from '../ItemList/ItemList';
import { getJuegos } from '../../helper/helper';
import {useParams} from 'react-router-dom'
import './ItemListContainer.css'


export function ItemListContainer({greeting}) {
    //variable de estado inicializada en un array vacio

    const [items,setItems] = useState([])

    //variable con parametro de ruta
    
    const {categoriaId} = useParams();

    useEffect(() =>{
        //si el parametro de ruta no esta vacio entonces se obtiene una respuesta que luego filtramos por categoria y la seteamos
        
        if(categoriaId){
        getJuegos.then(res => setItems(res.filter(juego => juego.category ===categoriaId)));

        //si el parametro de ruta esta vacio entonces obtenemos la respuesta con todos los productos
        }else{
            
            getJuegos.then(res => setItems(res));
        }
        //le pasamos al arreglo de dependencias la variable con el parametro de ruta para que renderice cada vez que cambie
    },[categoriaId])


    return(
        <>
        <h1 className="principal-title">{greeting}</h1>
        <ItemList items={items}></ItemList>
        </>
    )
}