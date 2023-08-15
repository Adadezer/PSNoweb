import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 
function ProductCard({ name, price, currency }) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {currency} {price}
        </Card.Text>
        <Button variant="success">Adicionar ao Carrinho</Button>
      </Card.Body>
    </Card>
  );
}
 
export default ProductCard;
