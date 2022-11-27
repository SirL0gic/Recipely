//Base React libs
import React, { useState } from "react";

//Bootstrap-npm-lib
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//Bootstrap-Bundle-JS-CSS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

//Custom CSS stylesheet
import "../styles/create.css";


function RecipeForm() {
    const [email,setEmail] = useState('');

  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Recipe</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author name" />
        <Form.Label>Ingredients</Form.Label>
        <Form.Control type="textarea" placeholder="Enter Ingredients" />
        <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p>{email}</p>
    </Form>
   
  );
}

export default RecipeForm;