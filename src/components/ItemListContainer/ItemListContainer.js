import { ItemCount } from '../ItemCount/ItemCount'
import './ItemListContainer.css'

export function ItemListContainer({greeting}) {

    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`);
    }

    return(
        <>
        <h1 className="principal-title">{greeting}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
        </>
    )
}