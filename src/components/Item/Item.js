import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'




export const Item = ({info}) => {
  return (
    <div>
      
        <Card style={{ width: "18rem" }} className="item">
            <Card.Img variant="top" src={info.image} />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>
                {info.description}
                </Card.Text>
                <Card.Text>{info.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
            
    </div>
  )
}
