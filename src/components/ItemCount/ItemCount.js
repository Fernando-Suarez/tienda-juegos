
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export const ItemCount = ({initial,stock,onAdd}) => {
const [count, setCount ] = useState(initial)

//funcion para sumar productos 
const increase = () => {
    setCount( count + 1);
} 
//funcion par restar productos
const decrease = () => {
    setCount( count - 1)
}
// se vuelve a resetear cada vez que cambia el valor de "initial"
useEffect(()=>{
    setCount(initial);
}, [initial])
    
    return  (
        
        <div>
            <Button onClick={increase} variant="secondary" size="lg" disabled={count >= stock} > + </Button>

            <span>  {count}  </span>

            <Button onClick={decrease} variant="secondary" size="lg" disabled={count <= 1 } > - </Button>
            
            <div>
                <br></br>
            <Button onClick={() => onAdd(count)} variant='primary' size="lg" disabled={stock <=0}> Agregar al Carrito </Button>
            </div>
        </div>

        
    )
}