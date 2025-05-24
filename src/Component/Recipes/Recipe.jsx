import React from 'react';

import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Recipe({ Single_Recipe }) {

const NavigateHandle =  useNavigate()


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Single_Recipe.image} />
      <Card.Body>
        <Card.Title>{Single_Recipe.name}</Card.Title>
        <Card.Text>{Single_Recipe.cuisine}</Card.Text>
        <Button variant="primary" onClick={() => NavigateHandle(`/Recipes/${Single_Recipe.id}`)}>Get More</Button>
      </Card.Body>
    </Card>
  );
}

export default Recipe;






